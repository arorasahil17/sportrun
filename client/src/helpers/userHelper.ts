import { UserLoginSchemaType, UserSchemaType } from "../schemas/userSchema";
import { ApiResponse, User } from "../types";
import { apiClient, handleError } from "../utils";

export const signup = async (
  data: UserSchemaType
): Promise<ApiResponse<any> | null> => {
  try {
    const response = await apiClient.post<ApiResponse<any>>("/signup", data);
    if (response.data.success) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};

export const login = async (
  data: UserLoginSchemaType
): Promise<ApiResponse<any> | null> => {
  try {
    const response = await apiClient.post<ApiResponse<any>>("/login", data);
    if (response.data.success) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};

export const checkAuth = async (): Promise<User | null> => {
  try {
    const response = await apiClient.get<ApiResponse<any>>("/check/auth");
    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};
