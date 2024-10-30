import { useQuery } from "@tanstack/react-query";
import { Course, Session } from "../types";

type FetchRecordArgs<T> = {
  queryKey: string[];
  queryFn: (path: string) => Promise<T[] | null>;
  path: string;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
};

const useRecords = <T extends Course | Session>(args: FetchRecordArgs<T>) => {
  return useQuery<T[] | null, Error>({
    queryKey: args.queryKey,
    queryFn: () => args.queryFn(args.path),
    staleTime: args.staleTime || 5 * 60 * 1000,
    refetchOnWindowFocus: args.refetchOnWindowFocus || false,
    retry: false,
  });
};

export default useRecords;
