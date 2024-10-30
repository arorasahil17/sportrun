import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, SessionInputs } from "../types";
import { prisma } from "../utils";

export const createSessionm = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { title, description, sessionTime, sessionLink, courseId } =
      request.body as SessionInputs;

    console.log(request.body);

    const courseExists = await prisma.course.findUnique({
      where: { id: courseId },
    });

    console.log("course", courseExists);

    if (!courseExists) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Course not found. Please provide a valid courseId.",
      };
      return next(error);
    }

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

export const fetchAllSession = asyncHandler(
  async (_request: Request, response: Response, next: NextFunction) => {
    const sessions = await prisma.sessions.findMany({});
    if (!sessions) {
      const error: AsyncError = {
        statusCode: 404,
        message: "No sessions found",
      };
      return next(error);
    }
    return response
      .status(200)
      .json({ success: true, message: "Session fetched", data: sessions });
  }
);

export const fetchSession = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const sessionId = parseInt(request.params.id);
    const session = await prisma.sessions.findUnique({
      where: {
        id: sessionId,
      },
      include: {
        course: true,
      },
    });
    if (!session) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Session not found",
      };
      return next(error);
    }
    return response.status(200).json({
      success: true,
      message: "Session fetched successfully",
      data: session,
    });
  }
);

export const updateSession = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { id, title, description, sessionTime, sessionLink } =
      request.body as SessionInputs;

    const updatedSession = await prisma.sessions.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        sessionTime,
        sessionLink,
      },
    });

    if (!updatedSession) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Session not updated, please try again",
      };
      return next(error);
    }

    return response.status(200).json({
      success: true,
      message: "Session updated successfully",
      data: updatedSession,
    });
  }
);

export const deleteSession = asyncHandler(
  async (request: Request, response: Response, _next: NextFunction) => {
    const sessionId = parseInt(request.params.id);

    const deletedSession = await prisma.sessions.delete({
      where: {
        id: sessionId,
      },
    });

    return response.status(200).json({
      success: true,
      message: "Session deleted successfully",
      data: deletedSession,
    });
  }
);
