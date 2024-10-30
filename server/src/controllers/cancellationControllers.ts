import { Request, Response, NextFunction } from "express";
import asyncHandler from "../middlewares/asyncHandler";
import { AsyncError, CancellationInputs } from "../types";
import { prisma, transporter } from "../utils";

export const cancelSubscription = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { subscriptionId, reason } = request.body as CancellationInputs;

    const subscription = await prisma.subscription.findUnique({
      where: { id: subscriptionId },
    });

    if (!subscription) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Subscription not found",
      };
      return next(error);
    }

    // Create cancellation record

    const cancellation = await prisma.cancellation.create({
      data: {
        subscriptionId: subscription.id,
        reason: reason,
      },
    });

    return response.status(201).json({
      success: true,
      message: "Cancellation requested successfully",
      data: cancellation,
    });
  }
);

export const updateCancellationStatus = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { cancellationId } = request.body;

    // Find the cancellation record
    const cancellation = await prisma.cancellation.findUnique({
      where: { id: cancellationId },
      include: { subscription: { include: { user: true } } },
    });

    if (!cancellation) {
      const error: AsyncError = {
        statusCode: 404,
        message: "Cancellation not found",
      };
      return next(error);
    }

    // Update the status
    const updatedCancellation = await prisma.cancellation.update({
      where: { id: cancellationId },
      data: { status: "APPROVED" },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: cancellation.subscription.user.email,
      subject: "Cancellation Request Approved",
      text: `Hello ${cancellation.subscription.user.name},\n\nYour cancellation request for the subscription has been approved.\n\nThank you.`,
    };

    await transporter.sendMail(mailOptions);

    return response.status(200).json({
      success: true,
      message: "Cancellation status updated successfully",
      data: updatedCancellation,
    });
  }
);

export const fetchAllCancellations = asyncHandler(
  async (_request: Request, response: Response, next: NextFunction) => {
    const cancellations = await prisma.cancellation.findMany({
      include: {
        subscription: {
          include: {
            user: true,
          },
        },
      },
    });

    if (!cancellations) {
      const error: AsyncError = {
        statusCode: 404,
        message: "No record found",
      };
      return next(error);
    }

    return response.status(200).json({
      success: true,
      data: cancellations,
    });
  }
);
