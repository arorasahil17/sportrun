import { ApiResponse, Course } from "../types";
import { apiClient, handleError } from "../utils";

export const fetchAllCourses = async (): Promise<Course[] | null> => {
  try {
    const response = await apiClient.get<ApiResponse<any>>("/courses");
    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};

export const fetchCourse = async (id: number): Promise<Course | null> => {
  try {
    const response = await apiClient.get<ApiResponse<any>>(`/course/${id}`);
    if (response.data.success) {
      return response.data.data;
    }
    return null;
  } catch (error) {
    handleError(error);
    return null;
  }
};
