import { useSelector } from "react-redux";
import SessionList from "../../components/Dashboard/SessionsList";
import { fetchAllRecords } from "../../helpers/commonHelper";
import useRecords from "../../hooks/useRecords";
import { Session } from "../../types";
import { StoreState } from "../../lib/redux/store";
import { useState } from "react";

const Sessions = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const userId = useSelector((state: StoreState) => state.userReducer.user?.id);

  const { data: sessions } = useRecords<Session>({
    queryKey: ["sessions"],
    queryFn: fetchAllRecords,
    staleTime: 5 * 60 * 1000,
    path: `/upcoming/sessions/${userId}`,
  });

  const copyToClipboard = (link: string, index: number) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <SessionList
      sessions={sessions}
      copyToClipboard={copyToClipboard}
      copiedIndex={copiedIndex}
    />
  );
};
export default Sessions;
