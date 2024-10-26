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

const useCreateRecord = <T extends SubscriptionInputs>(
  args: CreateRecordFormData<T>
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<T>({ resolver: zodResolver(args.validationSchema) });

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
    register,
    handleSubmit,
    errors,
    status,
    isPending,
    onsubmit,
    reset,
    setValue,
    getValues,
  };
};

export default useCreateRecord;
