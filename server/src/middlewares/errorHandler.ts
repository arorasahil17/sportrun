import { Request, Response, NextFunction } from "express";
import { AsyncError } from "../types";

/**
 * Centralized error handler for express.
 *
 * @param {AsyncError} error
 * @param {Request} _
 * @param {Response} res
 * @param {NextFunction} _
 */
export const errorHandler = (
  error: AsyncError,
  _request: Request,
  response: Response,
  _next: NextFunction
) => {
  console.log(error);
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  response.status(statusCode).json({
    success: false,
    message,
  });
};
