import { ApiResponse } from "../types";
import { apiClient, handleError } from "../utils";

export const deleteRecord = async (
  id: number,
  path: string
): Promise<ApiResponse<any> | null> => {
  try {
    const response = await apiClient.delete<ApiResponse<any>>(`${path}/${id}`);
    if (response.data.success) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};
