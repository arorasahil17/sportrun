import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, SubscriptionInputs } from "../types";
import { Request, Response, NextFunction } from "express";
import { addDays } from "date-fns";
import { prisma } from "../utils";

const calculateEndDate = (startDate: Date, numberOfDays: number): Date => {
  return addDays(startDate, numberOfDays);
};

export const createSubscription = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { userId, courseId, numberOfDays, price } =
      request.body as SubscriptionInputs;

    if (typeof numberOfDays !== "number" || numberOfDays <= 0) {
      const error: AsyncError = {
        statusCode: 400,
        message: "Invalid number of days",
      };
      return next(error);
    }

    const purchaseDate = new Date();
    const startDate = purchaseDate;
    const endDate = calculateEndDate(startDate, numberOfDays);

    const newSubscription = await prisma.subscription.create({
      data: {
        user: {
          connect: { id: userId },
        },
        course: {
          connect: { id: courseId },
        },
        price,
        purchaseDate,
        startDate,
        endDate,
        numberOfDays,
      },
    });

    await prisma.course.update({
      where: {
        id: courseId,
      },
      data: {
        user: {
          connect: { id: userId },
        },
      },
    });

    if (!newSubscription) {
      const error: AsyncError = {
        statusCode: 400,
        message:
          "Something went wrong while subscribing, please try again later",
      };
      return next(error);
    }

    return response.status(201).json({
      success: true,
      message: "Subscription created successfully",
      data: newSubscription,
    });
  }
);

export const fetchAllSubscriptions = asyncHandler(
  async (_request: Request, response: Response, next: NextFunction) => {
    const subscriptions = await prisma.subscription.findMany({
      include: { user: true },
    });

    if (!subscriptions) {
      const error: AsyncError = {
        statusCode: 404,
        message: "No subscriptions found",
      };

      return next(error);
    }

    return response.status(200).json({ success: true, data: subscriptions });
  }
);
