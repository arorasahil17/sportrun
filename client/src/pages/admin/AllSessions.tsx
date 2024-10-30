import { useEffect } from "react";
import Loader from "../../common/Loader";
import AllSessionList from "../../components/admin/AllSessionList";
import { fetchAllRecords } from "../../helpers/commonHelper";
import useDeleteRecord from "../../hooks/useDeleteRecord";
import useModal from "../../hooks/useModal";
import useRecords from "../../hooks/useRecords";
import useRefetchData from "../../hooks/useRefetchData";
import { Session } from "../../types";

const AllSessions = () => {
  const { data: sessions, status } = useRecords<Session>({
    queryKey: ["sessions"],
    queryFn: fetchAllRecords,
    staleTime: 5 * 60 * 1000,
    path: "/sessions",
  });
  const { open, handleClose, handleOpen } = useModal();

  const { refetchData } = useRefetchData("sessions");

  const {
    mutate,
    isPending,
    status: deleteStatus,
  } = useDeleteRecord(refetchData);

  useEffect(() => {
    if (deleteStatus === "success") {
      handleClose();
    }
  }, [deleteStatus]);

  if (status === "pending") {
    return <Loader />;
  }

  return (
    <AllSessionList
      sessions={sessions}
      open={open}
      handleClose={handleClose}
      handleOpen={handleOpen}
      isDeleting={isPending}
      mutate={mutate}
    />
  );
};

export default AllSessions;
