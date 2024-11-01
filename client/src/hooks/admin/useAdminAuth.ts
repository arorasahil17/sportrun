import { useQuery } from "@tanstack/react-query";
import { Admin, ApiResponse } from "../../types";
import { apiClient, handleError } from "../../utils";

const useAdminAuth = () => {
  return useQuery<Admin | null>({
    queryKey: ["authenticate/admin"],
    queryFn: async () => {
      try {
        const response = await apiClient.get<ApiResponse<any>>("/admin/auth");
        console.log("res", response);
        if (response.data.success) {
          return response.data.data;
        }
        return null;
      } catch (error) {
        console.log("error", error);
        handleError(error);
        return null;
      }
    },
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useAdminAuth;
