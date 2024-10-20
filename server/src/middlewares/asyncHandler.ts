// src/utils/asyncHandler.ts
import { Request, Response, NextFunction } from "express";

type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

/**
 * Wraps an async express handler function with error catching.
 * @param fn an async express handler function
 * @returns an express handler function that catches any errors
 * thrown by the original function and passes them to the next
 * middleware in the chain.
 */
const asyncHandler =
  (fn: AsyncHandler) =>
  (request: Request, response: Response, next: NextFunction) => {
    Promise.resolve(fn(request, response, next)).catch(next);
  };

export default asyncHandler;
