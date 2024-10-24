import { useMutation } from "@tanstack/react-query";
import { deleteRecord } from "../helpers/commonHelper";
import { ApiResponse } from "../types";
import toast from "react-hot-toast";

/**
 * A hook to handle deleting a record in the database. The hook accepts a callback
 * function `invalidateRecord` that is called when the record is successfully deleted.
 * The callback should invalidate the record in the cache.
 *
 * @example
 * const invalidateCourses = () => {
 *   queryClient.invalidateQueries('courses')
 * }
 * const { mutate, status } = useDeleteRecord(invalidateCourses)
 *
 * @param {() => void} invalidateRecord - A callback function that invalidates the record in the cache
 * @returns An object with the following properties:
 * - `mutate`: A function to call the mutation with an object containing the `id` and `path` for the record to delete
 * - `status`: The current status of the mutation (e.g., "idle", "loading", "error", "success")
 */
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
