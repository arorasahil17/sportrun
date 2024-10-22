import { z } from "zod";
import { validateEmail, validateRequiredString } from "../utils";

export const UserValidationSchema = z
  .object({
    firstName: validateRequiredString("First name is required"),
    lastName: validateRequiredString("Last name is required"),
    email: validateEmail("Please enter a valid email address"),
    username: validateRequiredString("Username is required"),
    password: validateRequiredString("Password is required"),
    confirmPassword: validateRequiredString("Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const UserLoginSchema = z.object({
  email: validateEmail("Please enter a valid email address"),
  password: validateRequiredString("Password is required"),
});

export type UserSchemaType = z.infer<typeof UserValidationSchema>;

export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
