import { useMutation } from "@tanstack/react-query";
import Loader from "../../common/Loader";
import CancelSubscriptionsList from "../../components/admin/CancelSubscriptionsList";
import { fetchAllRecords } from "../../helpers/commonHelper";
import useRecords from "../../hooks/useRecords";
import { ApiResponse, Cancellation } from "../../types";
import { apiClient } from "../../utils";
import toast from "react-hot-toast";
import useRefetchData from "../../hooks/useRefetchData";

const CancelSubscriptions = () => {
  const { data: cancelledSubscriptions, isPending } = useRecords<Cancellation>({
    queryKey: ["cancellations"],
    queryFn: fetchAllRecords,
    path: "/cancellations",
  });

  const { refetchData } = useRefetchData("cancellations");

  const { mutate } = useMutation<string | null, Error, number>({
    mutationFn: async (cancellationId) => {
      const response = await apiClient.put<ApiResponse<any>>(
        "/update-cancellation",
        { cancellationId }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        refetchData();
      }
      return null;
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  if (isPending) {
    return <Loader />;
  }

  return (
    <CancelSubscriptionsList
      cancelledSubscriptions={cancelledSubscriptions}
      mutate={mutate}
    />
  );
};

export default CancelSubscriptions;
