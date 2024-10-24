import { SubmitHandler, useForm } from "react-hook-form";
import {
  CourseUpdateFormData,
  updateCourseSchema,
} from "../../schemas/adminSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { updateCourse } from "../../helpers/adminHelper";
import { ApiResponse } from "../../types";
import toast from "react-hot-toast";
import { useCallback } from "react";

/**
 * A custom hook for handling the course update form with validation and state management.
 * @param id The id of the course to update.
 * @returns An object containing the following properties:
 * - {function} register - A function to register input fields in the form.
 * - {object} errors - An object containing any validation errors.
 * - {function} handleSubmit - A function to handle form submission.
 * - {function} onsubmit - A function to be called when the form is submitted.
 * - {function} reset - A function to reset the form fields.
 * - {string} status - The current status of the mutation (e.g., "idle", "loading", "error", "success").
 */
const useUpdateCourse = (id: number) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CourseUpdateFormData>({
    resolver: zodResolver(updateCourseSchema),
  });

  const { mutate, status } = useMutation<
    ApiResponse<any> | null,
    Error,
    FormData
  >({
    mutationFn: (data) => updateCourse(id, data),
    onSuccess: (data) => {
      if (data && data.message) {
        toast.success(data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onsubmit: SubmitHandler<CourseUpdateFormData> = useCallback(
    (data) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("offPrice", data.offPrice.toString());

      if (data.demoVideo && data.demoVideo.length > 0) {
        formData.append("demoVideo", data.demoVideo[0]);
      }
      if (data.courseVideo && data.courseVideo.length > 0) {
        formData.append("courseVideo", data.courseVideo[0]);
      }
      if (data.thumbnail && data.thumbnail.length > 0) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      mutate(formData);
    },
    [mutate]
  );

  return { register, errors, handleSubmit, onsubmit, reset, status };
};

export default useUpdateCourse;
