import { SubmitHandler, useForm } from "react-hook-form";
import { UserLoginSchemaType, UserSchemaType } from "../../schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiResponse } from "../../types";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../lib/redux/slices/userSlice";
import { ZodType } from "zod";

/**
 * A custom hook for handling authentication forms (login/signup) with validation and state management.
 *
 * @template T - The type of the form data, extending either UserSchemaType or UserLoginSchemaType.
 * @param {function(T): Promise<ApiResponse<any> | null>} mutationFn - The mutation function to handle the API call (signup or login).
 * @param {ZodType<T>} validationSchema - The Zod validation schema used for validating the form data.
 * @param {string} successMessage - The message to display on successful API call.
 * @param {string} errorMessage - The message to display on failed API call.
 *
 * @returns {object} An object containing the following properties:
 * - {function} register - A function to register input fields in the form.
 * - {function} handleSubmit - A function to handle form submission.
 * - {function} onsubmit - A function to be called when the form is submitted.
 * - {object} errors - An object containing any validation errors.
 * - {string} status - The current status of the mutation (e.g., "idle", "loading", "error", "success").
 *
 * @example
 * const { register, handleSubmit, onsubmit, errors, status } = useAuthForm<UserSchemaType>(
 *   signup,
 *   UserSignupSchema,
 *   "Sign up successful!",
 *   "Sign up failed. Please try again."
 * );
 */

type UseAuthFormArgs<T extends UserSchemaType | UserLoginSchemaType> = {
  mutationFn: (data: T) => Promise<ApiResponse<any> | null>;
  validationSchema: ZodType<T>;
  successMessage: string;
  errorMessage: string;
};

type UseAuthFormReturn<T extends UserSchemaType | UserLoginSchemaType> = {
  register: (...args: any[]) => any;
  handleSubmit: (...args: any[]) => any;
  onsubmit: SubmitHandler<T>;
  errors: any;
  status: string;
};

const useAuthForm = <T extends UserSchemaType | UserLoginSchemaType>(
  args: UseAuthFormArgs<T>
): UseAuthFormReturn<T> => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(args.validationSchema),
  });

  const { mutate, status } = useMutation<ApiResponse<any> | null, Error, T>({
    mutationFn: args.mutationFn,

    onSuccess: (data) => {
      if (data && data.message) {
        toast.success(data.message || args.successMessage);
        dispatch(setUser(data.data));
      } else {
        toast.error(args.errorMessage);
      }
    },
    onError: (error: any) => {
      toast.error(error || "An error occurred. Please try again.");
    },
  });

  const onsubmit: SubmitHandler<T> = useCallback(
    (data) => mutate(data),
    [mutate]
  );

  return {
    register,
    handleSubmit,
    onsubmit,
    errors,
    status,
  };
};

export default useAuthForm;
