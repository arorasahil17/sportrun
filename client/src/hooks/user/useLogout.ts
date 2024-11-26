import { useMutation } from "@tanstack/react-query";
import { apiClient } from "../../utils";
import { ApiResponse } from "../../types";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearUser } from "../../lib/redux/slices/userSlice";
import { useNavigate } from "react-router";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient.post<ApiResponse<any>>("/logout");
      if (response.data.success) {
        toast.success(response.data.message ?? "Logout successfully");
        dispatch(clearUser());
        navigate("/login");
        localStorage.removeItem("isAuthenticated");
      }
    },
    retry: false,
  });
};

export default useLogout;
