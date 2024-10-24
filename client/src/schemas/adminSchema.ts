import { z } from "zod";
import { createNumberUnionValidator, validateRequiredString } from "../utils";

export const courseSchema = z.object({
  id: z.number().optional(),
  title: validateRequiredString("Title is required"),
  description: validateRequiredString("Description is required"),
  price: createNumberUnionValidator("Price is required"),
  offPrice: createNumberUnionValidator("Off price is required"),
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

export type CourseFormData = z.infer<typeof courseSchema>;
