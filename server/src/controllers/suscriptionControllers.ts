import asyncHandler from "../middlewares/asyncHandler";
import { SubscriptionInputs } from "../types";
import { Request, Response, NextFunction } from "express";
import { addDays } from "date-fns";
import { createError, prisma } from "../utils";
import paypal from "@paypal/checkout-server-sdk";

const client = new paypal.core.PayPalHttpClient(
  new paypal.core.LiveEnvironment(
    process.env.PAYPAL_CLIENT_ID as string,
    process.env.PAYPAL_CLIENT_SECRET as string
  )
);

const calculateEndDate = (startDate: Date, numberOfDays: number): Date => {
  return addDays(startDate, numberOfDays);
};

export const createSubscription = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { userId, courseId, numberOfDays, price } =
      request.body as SubscriptionInputs;

    if (typeof numberOfDays !== "number" || numberOfDays <= 0) {
      return next(createError(400, "Invalid number of days"));
    }

    const purchaseDate = new Date();
    const startDate = purchaseDate;
    const endDate = calculateEndDate(startDate, numberOfDays);

    const orderRequest = new paypal.orders.OrdersCreateRequest();
    orderRequest.prefer("return=representation");
    orderRequest.requestBody({
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: price.toString(),
          },
        },
      ],
      application_context: {
        return_url: `${process.env.CLIENT_URL}/payment/success`,
        cancel_url: `${process.env.CLIENT_URL}/payment/failure`,
      },
    });

    const order = await client.execute(orderRequest);
    const orderId = order.result.id;
    const approvalUrl = order.result.links.find(
      (link: { rel: string; href: string }) => link.rel === "approve"
    ).href;

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
        paymentStatus: "PENDING",
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
      return next(
        createError(
          400,
          "Something went wrong while subscribing, please try again later"
        )
      );
    }

    return response.status(201).json({
      success: true,
      message:
        "Subscription requested successfully, please completed the payment",
      data: { subscription: newSubscription, approvalUrl, orderId },
      // approvalUrl,
      // orderId,
    });
  }
);

export const capturePayment = asyncHandler(
  async (request: Request, response: Response, next: NextFunction) => {
    const { orderId, subscriptionId } = request.body;

    if (!orderId || !subscriptionId) {
      return next(
        createError(400, "Order ID and Subscription ID are required")
      );
    }

    const captureRequest = new paypal.orders.OrdersCaptureRequest(orderId);
    // captureRequest.requestBody({payment_source:{}});

    try {
      const capture = await client.execute(captureRequest);
      const paymentStatus = capture.result.status;

      if (paymentStatus === "COMPLETED") {
        const updatedSubscription = await prisma.subscription.update({
          where: { id: subscriptionId },
          data: {
            paypalTransactionId: capture.result.id,
            paymentStatus,
            paypalPayerId: capture.result.payer?.payer_id,
            paypalPaymentDate: new Date(),
          },
        });

        // const user = await prisma.user.findUnique({
        //   where: { id: updatedSubscription.userId },
        // });

        return response.status(200).json({
          success: true,
          message: "Subscription activated successfully",
          data: updatedSubscription,
          // user,
        });
      } else {
        return next({ statusCode: 400, message: "Payment not completed" });
      }
    } catch (error) {
      console.error("Error capturing payment:", error);
      return next({ statusCode: 500, message: "Payment capture failed" });
    }
  }
);

export const fetchAllSubscriptions = asyncHandler(
  async (_request: Request, response: Response, next: NextFunction) => {
    const subscriptions = await prisma.subscription.findMany({
      include: { user: true, course: true },
    });

    if (!subscriptions) {
      return next(createError(404, "Subscriptions not found"));
    }

    return response.status(200).json({ success: true, data: subscriptions });
  }
);
