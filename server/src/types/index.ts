import { Course } from "@prisma/client";
import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface AsyncError {
  statusCode: number;
  message: string;
}

export interface UserInputs {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  username: string;
}

export interface JwtPayloadWithEmail extends JwtPayload {
  email: string;
}
export interface JwtPayloadWithUsername extends JwtPayload {
  username: string;
}

export interface AuthenticatedRequest extends Request {
  user?: JwtPayloadWithEmail | string;
  admin?: JwtPayloadWithUsername | string;
}

export interface CourseInputs extends Course {}

enum SubscriptionPlanDuration {
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  YEARLY = "YEARLY",
}

export interface SubscriptionInputs {
  id?: number;
  userId: number;
  courseId: number;
  offPrice: number;
  numberOfDays: SubscriptionPlanDuration;
  price: number;
}

export interface SessionInputs {
  id: number;
  title: string;
  description: string;
  sessionLink: string;
  sessionTime: Date;
  courseId: number;
}

export interface CancellationInputs {
  id: number;
  subscriptionId: number;
  reason: string;
}
