import { ApiResponse } from "../types";
import { apiClient, handleError } from "../utils";

/**
 * Delete a record from the database.
 *
 * @param {number} id - The ID of the record to delete.
 * @param {string} path - The API path for the record, e.g. 'courses' or 'users'.
 *
 * @returns A promise that resolves to the response data if the request was successful, else null.
 */
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
