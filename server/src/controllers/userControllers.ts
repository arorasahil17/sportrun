import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { hash, compare } from "bcryptjs";
import { generateResetToken, prisma, transporter } from "../utils";
import {
  AsyncError,
  AuthenticatedRequest,
  JwtPayloadWithEmail,
  UserInputs,
} from "../types";
import jwt from "jsonwebtoken";

export const signUp = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    // Destructure inputs from the request body
    const { firstName, lastName, password, email, username, confirmPassword } =
      request.body as UserInputs;

    // Check if a user already exists with the given email or username
    const userExists = await prisma.$transaction(async (prisma) => {
      const userExistsWithEmail = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      if (userExistsWithEmail) return userExistsWithEmail;

      const userExistsWithUsername = await prisma.user.findUnique({
        where: {
          username,
        },
      });

      if (userExistsWithUsername) return userExistsWithUsername;
    });

    // If user exists, return a 400 error with an appropriate message
    if (userExists) {
      const error: AsyncError = {
        statusCode: 400,
        message: `User already exists with this ${
          userExists.email === email ? "email" : "username"
        }.`,
      };
      return next(error);
    }

    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Passwords do not match. Please confirm your password again.",
      };
      return next(error);
    }

    // Hash the password before storing it in the database
    const hashedPassword = await hash(password, 10);

    // Create a new user record in the database
    const user = await prisma.user.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        username,
        password: hashedPassword,
      },
    });

    // Respond with a success message and the created user data
    return response.status(201).json({
      success: true,
      message: `Welcome, ${user.name}! Your account has been successfully created.`,
      data: user,
    });
  }
);

export const signIn = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    // Extract the email and password from request object
    const { email, password } = request.body as UserInputs;

    // Search for the user in the database
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      // If the user doesn't exist, return a 404 error
      const error: AsyncError = {
        statusCode: 404,
        message: `User does not exist with this email ${email}`,
      };
      return next(error);
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordCorrect = await compare(password, user.password);

    if (!isPasswordCorrect) {
      // If the password doesn't match, return a 400 error
      const error: AsyncError = {
        statusCode: 400,
        message: "Incorrect password",
      };
      return next(error);
    }

    // Sign a JSON Web Token with the user's email and the secret key
    const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    // Set the signed token as a cookie in the response
    response.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    // Return a successful response with the user data
    return response.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: user,
    });
  }
);

export const checkAuth = asyncHandler(
  async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ) => {
    const userPayload = request.user as JwtPayloadWithEmail;

    if (userPayload && typeof userPayload.email === "string") {
      // Destructure the email from the payload
      const { email } = userPayload;

      // Query the database to find the user
      const user = await prisma.user.findUnique({
        where: { email },
      });

      // If user doesn't exist, return a 404 error
      if (!user) {
        const error: AsyncError = {
          statusCode: 404,
          message: `No account found with the email: ${email}`,
        };
        return next(error);
      }

      // Return success response if user is authenticated
      return response.status(200).json({
        success: true,
        message: "Logged in successfully",
        data: user,
      });
    } else {
      // If the user is not logged in or no email found in the token
      const error: AsyncError = {
        statusCode: 401,
        message: "You are not logged in. Please log in to continue.",
      };
      return next(error);
    }
  }
);

export const forgetPassword = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { email } = request.body;

    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // If user doesn't exist, return a 404 error
    if (!user) {
      const error: AsyncError = {
        statusCode: 404,
        message: `No account found with the email: ${email}`,
      };
      return next(error);
    }

    // Generate a unique reset token and set its expiry time to 10 minutes
    const resetToken = generateResetToken();
    const resetTokenExpiry = new Date(Date.now() + 600000);

    // Update the user's reset token and expiry time in the database
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    });

    // Send an email with the reset token to the user
    const resetUrl = `${request.protocol}://${request.get(
      "host"
    )}/api/auth/reset-password/${resetToken}`;
    const message = `You have requested a password reset. Please use the following link to reset your password: \n\n${resetUrl}`;

    // Send the email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Request",
      text: message,
    };
    await transporter.sendMail(mailOptions);

    // Return success response
    return response.status(200).json({
      success: true,
      message: "Password reset link sent to your email",
    });
  }
);

export const resetPassword = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { token } = request.params;
    const { newPassword, confirmPassword } = request.body;

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Passwords do not match.",
      };
      return next(error);
    }

    // Find the user by reset token and check if the token has not expired
    const user = await prisma.user.findFirst({
      where: {
        resetToken: token,
        resetTokenExpiry: {
          gte: new Date(), // Ensure token has not expired
        },
      },
    });

    if (!user) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Invalid or expired token.",
      };
      return next(error);
    }

    // Hash the new password
    const hashedPassword = await hash(newPassword, 10);

    // Update the user's password and remove the reset token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    });

    return response.status(200).json({
      success: true,
      message: "Your password has been reset successfully.",
    });
  }
);
