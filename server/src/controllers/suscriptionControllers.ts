import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, SubscriptionInputs } from "../types";
import { Request, Response, NextFunction } from "express";
import { addDays, addMonths, addYears } from "date-fns";
import { prisma } from "../utils";

// Helper function to calculate end date based on plan duration
const calculateEndDate = (startDate: Date, planDuration: string): Date => {
  switch (planDuration) {
    case "WEEKLY":
      return addDays(startDate, 7); // Adds 7 days for weekly plan
    case "MONTHLY":
      return addMonths(startDate, 1); // Adds 1 month for monthly plan
    case "YEARLY":
      return addYears(startDate, 1); // Adds 1 year for yearly plan
    default:
      throw new Error("Invalid plan duration");
  }
};

export const createSubscription = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { userId, courseId, planDuration, price } =
      request.body as SubscriptionInputs;

    const purchaseDate = new Date();
    const startDate = purchaseDate;
    const endDate = calculateEndDate(startDate, planDuration);

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
        planDuration,
      },
    });

    if (!newSubscription) {
      const error: AsyncError = {
        statusCode: 400,
        message:
          "Something went wrong while subscribing please try again later",
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
