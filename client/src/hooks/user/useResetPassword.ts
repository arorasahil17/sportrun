import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../helpers/userHelper";
import toast from "react-hot-toast";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  resetPasswordSchema,
  ResetPasswordSchemaType,
} from "../../schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";

interface RequestBody {
  newPassword: string;
  confirmPassword: string;
}

const useResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate, status } = useMutation<string | null, Error, RequestBody>({
    mutationFn: ({ newPassword, confirmPassword }) =>
      resetPassword(newPassword, confirmPassword),
    onSuccess: (message) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onsubmit: SubmitHandler<ResetPasswordSchemaType> = useCallback(
    (data) => mutate(data),
    [mutate]
  );

  return { register, handleSubmit, errors, status, onsubmit };
};

export default useResetPassword;
