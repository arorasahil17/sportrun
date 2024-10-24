import { ApiResponse } from "../types";
import { apiClient, handleError } from "../utils";

export const createCourse = async (
  data: FormData
): Promise<ApiResponse<any> | null> => {
  try {
    const response = await apiClient.post<ApiResponse<any>>("/course", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success) return response.data;
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};

export const updateCourse = async (
  id: number,
  data: FormData
): Promise<ApiResponse<any> | null> => {
  try {
    const response = await apiClient.put<ApiResponse<any>>(
      `/course/${id}`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    if (response.data.success) return response.data;
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};
