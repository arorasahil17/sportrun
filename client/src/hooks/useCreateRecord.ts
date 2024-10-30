import { SubmitHandler, useForm } from "react-hook-form";
import { ApiResponse } from "../types";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubscriptionInputs } from "../schemas/subscriptionSchema";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import toast from "react-hot-toast";

type CreateRecordFormData<T> = {
  mutationFn: (path: string, data: T) => Promise<ApiResponse<T> | null>;
  validationSchema: ZodType<any>;
  path: string;
};

/**
 * A custom hook for creating records with form validation and mutation handling.
 *
 * @template T - The type of the form data, extending SubscriptionInputs.
 * @param {CreateRecordFormData<T>} args - An object containing the mutation function, validation schema, and API path.
 *   - mutationFn: A function to handle the API call for creating a record.
 *   - validationSchema: A Zod schema for validating the form data.
 *   - path: The API path for the record creation.
 *
 * @returns {object} An object containing the following properties:
 * - {function} register - A function to register input fields in the form.
 * - {function} handleSubmit - A function to handle form submission.
 * - {object} errors - An object containing any validation errors.
 * - {function} onsubmit - A function to be called when the form is submitted.
 * - {string} status - The current status of the mutation (e.g., "idle", "loading", "error", "success").
 * - {function} mutate - A function to call the mutation with form data.
 * - {function} reset - A function to reset the form fields.
 */
const useCreateRecord = <T extends SubscriptionInputs>(
  args: CreateRecordFormData<T>
) => {
  const form = useForm<T>({ resolver: zodResolver(args.validationSchema) });

  const { mutate, status, isPending } = useMutation<
    ApiResponse<T> | null,
    Error,
    T
  >({
    mutationFn: (data) => args.mutationFn(args.path, data),

    onSuccess: (data) => {
      if (data && data.message) {
        toast.success(data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const onsubmit: SubmitHandler<T> = useCallback(
    (data) => mutate(data),
    [mutate]
  );

  return {
    ...form,
    errors: form.formState.errors,
    status,
    isPending,
    onsubmit,
  };
};

export default useCreateRecord;
