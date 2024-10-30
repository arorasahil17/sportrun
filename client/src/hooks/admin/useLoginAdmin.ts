import { SubmitHandler, useForm } from "react-hook-form";
import { AdminFormData, adminSchema } from "../../schemas/adminSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils";
import { ApiResponse } from "../../types";
import toast from "react-hot-toast";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setAdmin } from "../../lib/redux/slices/adminSlice";

const useLoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminFormData>({ resolver: zodResolver(adminSchema) });

  const { mutate, status } = useMutation<
    ApiResponse<any> | null,
    Error,
    AdminFormData
  >({
    mutationFn: async (data) => {
      const response = await apiClient.post<ApiResponse<any>>(
        "/login/admin",
        data
      );
      if (response.data.success) {
        dispatch(setAdmin(response.data.data));
        navigate("/admin");
        return response.data;
      }
      return null;
    },
    onSuccess: (data) => {
      if (data && data.success) {
        toast.success(data.message);
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onsubmit: SubmitHandler<AdminFormData> = useCallback(
    (data) => mutate(data),
    [mutate]
  );

  return { register, handleSubmit, onsubmit, errors, status };
};

export default useLoginAdmin;
