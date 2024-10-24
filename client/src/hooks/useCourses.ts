import { useQuery } from "@tanstack/react-query";
import { fetchAllCourses } from "../helpers/courseHelper";
import { Course } from "../types";

const useCourses = () => {
  return useQuery<Course[] | null, Error>({
    queryKey: ["courses"],
    queryFn: fetchAllCourses,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export default useCourses;
