import { useMutation } from "@tanstack/react-query";
import { deleteRecord } from "../helpers/commonHelper";
import { ApiResponse } from "../types";
import toast from "react-hot-toast";

const useDeleteRecord = (invalidateRecord: () => void) => {
  return useMutation<
    ApiResponse<any> | null,
    Error,
    { id: number; path: string }
  >({
    mutationFn: ({ id, path }) => deleteRecord(id, path),
    onSuccess: (data) => {
      if (data && data.message) {
        toast.success(data.message);
        invalidateRecord();
      } else {
        toast.error("An error occurred. Please try again.");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
};

export default useDeleteRecord;
