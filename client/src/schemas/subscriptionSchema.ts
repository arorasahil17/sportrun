import { z } from "zod";
import { createNumberUnionValidator } from "../utils";

export const subscriptionSchema = z.object({
  userId: z.number(),
  courseId: z.number(),
  price: z.number(),
  numberOfDays: createNumberUnionValidator("Number of days are required"),
});

export type SubscriptionInputs = z.infer<typeof subscriptionSchema>;
