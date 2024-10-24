import { useParams } from "react-router";
import useGetCourse from "../../hooks/useGetCourse";
import useUpdateCourse from "../../hooks/admin/useUpdateCourse";
import { useEffect } from "react";
import EditCourseForm from "../../components/admin/EditCourseForm";

const EditCourse = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data: course } = useGetCourse();

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
