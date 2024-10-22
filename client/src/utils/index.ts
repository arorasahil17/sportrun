import { z } from "zod";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const validateRequiredString = (message: string): z.ZodString =>
  z.string().min(1, { message });

export const createNumberUnionValidator = (
  message: string
): z.ZodEffects<
  z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, number, string | number>,
  number,
  string | number
> =>
  z
    .union([z.string(), z.number()])
    .transform((value) => Number(value))
    .refine((value) => !!value, { message });

export const validateEmail = (message: string) =>
  z.string().email({ message }).min(1, { message: "Email can't be empty" });

export const handleError = (error: any) => {
  const errorMessage =
    error.response?.data?.message ??
    "An unexpected error occurred. Please try again.";

  throw errorMessage;
};
