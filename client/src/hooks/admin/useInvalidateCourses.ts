import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

/**
 * Returns a function that invalidates the cache for the "courses" query key.
 *
 * This is used to invalidate the cache when a course is deleted or updated.
 *
 * @returns {{ invalidateCourses: () => void }}
 */
const useInvalidateCourses = () => {
  const queryClient = useQueryClient();

  const invalidateCourses = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ["courses"] });
  }, [queryClient]);

  return { invalidateCourses };
};

export default useInvalidateCourses;
