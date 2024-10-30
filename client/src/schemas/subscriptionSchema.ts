import { z } from "zod";
import { createNumberUnionValidator, validateRequiredString } from "../utils";

export const subscriptionSchema = z.object({
  userId: z.number(),
  courseId: z.number(),
  price: z.number(),
  numberOfDays: createNumberUnionValidator("Number of days are required"),
});

export const cancelSubscriptionSchema = z.object({
  id: z.number().optional(),
  subscriptionId: createNumberUnionValidator("Required"),
  reason: validateRequiredString("Reason is required"),
});

export type SubscriptionInputs = z.infer<typeof subscriptionSchema>;

export type CancelSubscriptionFormData = z.infer<
  typeof cancelSubscriptionSchema
>;
