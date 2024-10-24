import { SubmitHandler, useForm } from "react-hook-form";
import { CourseFormData, addCourseSchema } from "../../schemas/adminSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ApiResponse } from "../../types";
import { createCourse } from "../../helpers/adminHelper";
import toast from "react-hot-toast";
import { useCallback } from "react";

/**
 * A custom hook for handling the course creation form with validation and state management.
 * @returns An object containing the following properties:
 * - {function} register - A function to register input fields in the form.
 * - {function} handleSubmit - A function to handle form submission.
 * - {object} errors - An object containing any validation errors.
 * - {string} status - The current status of the mutation (e.g., "idle", "loading", "error", "success").
 * - {function} onsubmit - A function to be called when the form is submitted.
 */
const useCreateCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseFormData>({ resolver: zodResolver(addCourseSchema) });

  const { mutate, status } = useMutation<
    ApiResponse<any> | null,
    Error,
    FormData
  >({
    // The mutation function to handle the API call
    mutationFn: (data) => createCourse(data),
    // Success message to display when the API call is successful
    onSuccess: (data) => {
      if (data && data.message) {
        toast.success(data.message);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
    // Error message to display when the API call fails
    onError: (error) => {
      toast.error(error.message || "An error occurred. Please try again.");
    },
  });

  // A callback function to call the mutation function when the form is submitted
  const onsubmit: SubmitHandler<CourseFormData> = useCallback(
    (data) => {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("offPrice", data.offPrice.toString());

      if (data.demoVideo.length > 0) {
        formData.append("demoVideo", data.demoVideo[0]);
      }
      if (data.courseVideo.length > 0) {
        formData.append("courseVideo", data.courseVideo[0]);
      }
      if (data.thumbnail.length > 0) {
        formData.append("thumbnail", data.thumbnail[0]);
      }

      mutate(formData);
    },
    [mutate]
  );

  return { register, handleSubmit, errors, status, onsubmit };
};

export default useCreateCourse;
