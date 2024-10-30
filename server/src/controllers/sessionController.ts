import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, SessionInputs } from "../types";
import { prisma } from "../utils";

export const createSessionm = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { title, description, sessionTime, sessionLink, courseId } =
      request.body as SessionInputs;

    const newSession = await prisma.sessions.create({
      data: {
        title,
        description,
        sessionLink,
        sessionTime,

        course: {
          connect: { id: courseId },
        },
      },
    });

    if (!newSession) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Session not created, please try again after sometime",
      };
      return next(error);
    }

    return response.status(201).json({
      success: true,
      message: "Session created successfully",
      data: newSession,
    });
  }
);

export const fetchUpcomingSessions = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const userId = parseInt(request.params.id);
    const currentDate = new Date();

    const sessions = await prisma.sessions.findMany({
      where: {
        course: {
          subscriptions: {
            some: {
              userId,
              endDate: {
                gte: currentDate,
              },
            },
          },
        },
      },
    });

    if (!sessions) {
      const error: AsyncError = {
        statusCode: 404,
        message: "No sessions found",
      };

      return next(error);
    }

    return response
      .status(200)
      .json({ success: true, message: "Sessions fetched", data: sessions });
  }
);
