import { ApiResponse } from "../types";
import { apiClient, handleError } from "../utils";

/**
 * Makes a POST request to the given path with the given data.
 *
 * @param {string} path - The API path to make the request to.
 * @param {T} data - The data to send in the request.
 *
 * @returns A promise that resolves to the response data if the request
 * was successful, else null.
 */
export const createRecord = async <T>(
  path: string,
  data: T
): Promise<ApiResponse<T> | null> => {
  try {
    const response = await apiClient.post<ApiResponse<T>>(path, data);

    if (response.data.success) {
      return response.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};

export const fetchRecord = async <T>(
  id: number,
  path: string
): Promise<T | null> => {
  try {
    const response = await apiClient.get<ApiResponse<T>>(`${path}/${id}`);
    if (response.data.success) {
      return response.data.data ?? null;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};

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
