import { z } from "zod";
import { createNumberUnionValidator, validateRequiredString } from "../utils";

const baseCourseSchema = z.object({
  title: validateRequiredString("Title is required"),
  description: validateRequiredString("Description is required"),
  price: createNumberUnionValidator("Price is required"),
  offPrice: createNumberUnionValidator("Off price is required"),
});

export const addCourseSchema = baseCourseSchema.extend({
  demoVideo: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Demo video is required"),
  courseVideo: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Course video is required"),
  thumbnail: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Thumbnail is required"),
});

export const updateCourseSchema = baseCourseSchema.extend({
  demoVideo: z.instanceof(FileList).optional(),
  courseVideo: z.instanceof(FileList).optional(),
  thumbnail: z.instanceof(FileList).optional(),
});

export type CourseFormData = z.infer<typeof addCourseSchema>;

export type CourseUpdateFormData = z.infer<typeof updateCourseSchema>;
