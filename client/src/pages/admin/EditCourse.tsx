import { useParams } from "react-router";
import useUpdateCourse from "../../hooks/admin/useUpdateCourse";
import { useEffect } from "react";
import EditCourseForm from "../../components/admin/EditCourseForm";
import useGetRecord from "../../hooks/useGetRecord";
import { Course } from "../../types";
import { fetchRecord } from "../../helpers/commonHelper";

const EditCourse = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data: course } = useGetRecord<Course>({
    queryKey: [`course/${id}`],
    queryFn: fetchRecord,
    path: `/course`,
    id,
  });

  const { register, errors, handleSubmit, onsubmit, reset, status } =
    useUpdateCourse(id);

  useEffect(() => {
    if (course) {
      reset({
        title: course.title,
        price: course.price,
        offPrice: course.offPrice,
        description: course.description,
      });
    }
  }, [course]);

  return (
    <>
      <EditCourseForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onsubmit={onsubmit}
        isUpdating={status === "pending"}
      />
    </>
  );
};

export default EditCourse;
