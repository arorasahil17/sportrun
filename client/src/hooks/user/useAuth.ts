import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "../../helpers/userHelper";
import { User } from "../../types";

const useAuth = () => {
  return useQuery<User | null>({
    queryKey: ["authenticate"],
    queryFn: checkAuth,
    retry: false,
    refetchOnWindowFocus: false,
    staleTime: 5 * 60 * 1000,
  });
};

export default useAuth;
