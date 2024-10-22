import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import {
  AsyncError,
  AuthenticatedRequest,
  JwtPayloadWithEmail,
} from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "your-very-secure-secret-key";

// Interface for the Request with an added `user` property

// Middleware to authenticate user with token
export const authenticateUser = (
  request: AuthenticatedRequest,
  _response: Response,
  next: NextFunction
) => {
  // Try to extract the token from either the cookies or Authorization header
  const token =
    request.cookies.token || request.headers.authorization?.split(" ")[1];

  console.log(token);
  if (!token) {
    const error: AsyncError = {
      statusCode: 401,
      message: "You are not logged in, Please login to continue",
    };
    return next(error);
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach the decoded user info to the request object
    if (typeof decoded === "string") {
      request.user = decoded;
    } else {
      request.user = decoded as JwtPayloadWithEmail;
    }

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    const err: AsyncError = {
      statusCode: 403,
      message: "Your session has expired. Please login again",
    };
    return next(err);
  }
};
