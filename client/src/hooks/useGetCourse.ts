import { useQuery } from "@tanstack/react-query";
import { Course } from "../types";
import { useParams } from "react-router";
import { fetchCourse } from "../helpers/courseHelper";

const useGetCourse = () => {
  const params = useParams();
  const id = Number(params.id);
  return useQuery<Course | null, Error>({
    queryKey: [`course/${id}`],
    queryFn: () => fetchCourse(id),
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useGetCourse;
