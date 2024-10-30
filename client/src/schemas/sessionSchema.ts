import { z } from "zod";
import {
  createNumberUnionValidator,
  validateDateTime,
  validateRequiredString,
} from "../utils";

export const sessionSchema = z.object({
  id: z.number().optional(),
  title: validateRequiredString("Title is required"),
  description: validateRequiredString("Description is required"),
  sessionLink: validateRequiredString("Session link is required"),
  sessionTime: validateDateTime("Session time is required"),
  courseId: createNumberUnionValidator("Course is required"),
});

export type SessionFormData = z.infer<typeof sessionSchema>;
