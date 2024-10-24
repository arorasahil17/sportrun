import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";

const useInvalidateCourses = () => {
  const queryClient = useQueryClient();

  const invalidateCourses = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ["courses"] });
  }, [queryClient]);

  return { invalidateCourses };
};

export default useInvalidateCourses;
