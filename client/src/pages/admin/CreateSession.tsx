import CreateSessionForm from "../../components/admin/CreateSessionForm";
import { createRecord, fetchAllRecords } from "../../helpers/commonHelper";
import useCreateRecord from "../../hooks/useCreateRecord";
import useRecords from "../../hooks/useRecords";
import useRefetchData from "../../hooks/useRefetchData";
import { SessionFormData, sessionSchema } from "../../schemas/sessionSchema";
import { Course } from "../../types";

const CreateSession = () => {
  const { refetchData } = useRefetchData("sessions");

  const { register, errors, handleSubmit, onsubmit, status } =
    useCreateRecord<SessionFormData>({
      mutationFn: createRecord,
      path: "/session",
      validationSchema: sessionSchema,
      refetchData,
    });

  const { data: courses } = useRecords<Course>({
    queryKey: ["courses"],
    queryFn: fetchAllRecords,
    staleTime: 5 * 60 * 1000,
    path: "/course",
  });

  return (
    <CreateSessionForm
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      onsubmit={onsubmit}
      courses={courses}
      isPending={status === "pending"}
    />
  );
};

export default CreateSession;
