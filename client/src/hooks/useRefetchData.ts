import { useQueryClient } from "@tanstack/react-query";

const useRefetchData = (queryKey: string) => {
  const queryClient = useQueryClient();

  const refetchData = () =>
    queryClient.invalidateQueries({ queryKey: [queryKey] });

  return { refetchData };
};

export default useRefetchData;
