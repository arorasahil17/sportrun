import { SubmitHandler, useForm } from "react-hook-form";
import { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { SessionFormData } from "../schemas/sessionSchema";
import { CourseFormData } from "../schemas/adminSchema";

type UpdateRecordFormData<T> = {
  mutationFn: (path: string, data: T) => Promise<string | null>;
  validationSchema: ZodType<any>;
  path: string;
  refetchData?: () => void;
};

/**
 * A custom hook for updating records with form validation and mutation handling.
 *
 * @template T - The type of the form data, extending SessionFormData.
 * @param {UpdateRecordFormData<T>} args - An object containing the mutation function, validation schema, and API path.
 *   - mutationFn: A function to handle the API call for updating a record.
 *   - validationSchema: A Zod schema for validating the form data.
 *   - path: The API path for the record update.
 *   - refetchData?: An optional function to refetch data after a successful mutation.
 *
 * @returns {object} An object containing the following properties:
 * - {object} errors - An object containing any validation errors.
 * - {string} status - The current status of the mutation (e.g., "idle", "loading", "error", "success").
 * - {boolean} isPending - A boolean indicating if the mutation is pending.
 * - {function} onsubmit - A function to be called when the form is submitted.
 */
const useUpdateRecord = <T extends SessionFormData | CourseFormData>(
  args: UpdateRecordFormData<T>
) => {
  const form = useForm<T>({ resolver: zodResolver(args.validationSchema) });

  const { mutate, status, isPending } = useMutation<string | null, Error, T>({
    mutationFn: (data) => args.mutationFn(args.path, data),
    onSuccess: (message) => {
      if (message) {
        toast.success(message);
        args.refetchData?.();
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

export default useUpdateRecord;
