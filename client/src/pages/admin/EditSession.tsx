import { useParams } from "react-router";
import useGetRecord from "../../hooks/useGetRecord";
import { Session } from "../../types";
import { fetchRecord, updateRecord } from "../../helpers/commonHelper";
import useUpdateRecord from "../../hooks/useUpdateRecord";
import { SessionFormData, sessionSchema } from "../../schemas/sessionSchema";
import useRefetchData from "../../hooks/useRefetchData";
import { useEffect } from "react";
import EditSessionForm from "../../components/admin/EditSessionForm";

const EditSession = () => {
  const params = useParams();
  const id = Number(params.id);

  const { refetchData } = useRefetchData("sessions");

  const { data: session } = useGetRecord<Session>({
    queryKey: [`session/${id}`],
    queryFn: fetchRecord,
    path: "/session",
    id,
  });

  const { register, onsubmit, handleSubmit, errors, status, reset, setValue } =
    useUpdateRecord<SessionFormData>({
      mutationFn: updateRecord,
      validationSchema: sessionSchema,
      path: "/session",
      refetchData,
    });

  useEffect(() => {
    if (session) {
      setValue("title", session.title);
      reset({
        id: session.id,
        title: session.title,
        description: session.description,
        sessionLink: session.sessionLink,
        sessionTime: session.sessionTime,
        courseId: session.course.id,
      });
    }
  }, [session]);

  return (
    <EditSessionForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      isPending={status === "pending"}
      onsubmit={onsubmit}
    />
  );
};

export default EditSession;
