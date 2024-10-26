import { useQuery } from "@tanstack/react-query";
import { Course } from "../types";

type FetchRecordArgs<T> = {
  queryKey: string[];
  queryFn: (id: number, path: string) => Promise<T | null>;
  id: number;
  path: string;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
};

const useFetchRecord = <T extends Course>(args: FetchRecordArgs<T>) => {
  return useQuery<T | null, Error>({
    queryKey: args.queryKey,
    queryFn: () => args.queryFn(args.id, args.path),
    staleTime: args.staleTime || 5 * 60 * 1000,
    refetchOnWindowFocus: args.refetchOnWindowFocus || false,
    retry: false,
  });
};

export default useFetchRecord;
