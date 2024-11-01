import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { prisma } from "../utils";
import { compare, hash } from "bcryptjs";
import {
  AsyncError,
  AuthenticatedRequest,
  JwtPayloadWithUsername,
} from "../types";
import jwt from "jsonwebtoken";

export const createAdmin = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { name, username, password } = request.body;

    const adminExist = await prisma.admin.findUnique({
      where: { username },
    });

    if (adminExist) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Admin already exists",
      };
      return next(error);
    }

    const hashedPassword = await hash(password, 10);

    const admin = await prisma.admin.create({
      data: {
        name,
        username,
        password: hashedPassword,
      },
    });

    return response
      .status(201)
      .json({ success: true, message: "Admin created", data: admin });
  }
);

export const loginAdmin = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { username, password } = request.body;

    const admin = await prisma.admin.findUnique({
      where: { username },
    });

    if (!admin) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Admin not found",
      };

      return next(error);
    }

    if (!(await compare(password, admin.password))) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Incorrect password",
      };
      return next(error);
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    response.cookie("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
    });

    return response.status(200).json({
      success: true,
      message: "Logged in successfully",
      data: admin,
    });
  }
);

export const checkAdminAuth = asyncHandler(
  async (
    request: AuthenticatedRequest,
    response: Response,
    next: NextFunction
  ) => {
    const adminPayload = request.admin as JwtPayloadWithUsername;

    if (adminPayload && typeof adminPayload.username === "string") {
      // Destructure the username from the payload
      const { username } = adminPayload;

      // Query the database to find the admin
      const admin = await prisma.admin.findUnique({
        where: { username },
      });

      // If admin doesn't exist, return a 404 error
      if (!admin) {
        const error: AsyncError = {
          statusCode: 404,
          message: `No account found with the email: ${username}`,
        };
        return next(error);
      }

      // Return success response if admin is authenticated
      return response.status(200).json({
        success: true,
        message: "Logged in successfully",
        data: admin,
      });
    } else {
      // If the admin is not logged in or no username found in the token
      const error: AsyncError = {
        statusCode: 401,
        message: "You are not logged in. Please log in to continue.",
      };
      return next(error);
    }
  }
);
