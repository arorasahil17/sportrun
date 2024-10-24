import useCourses from "../../hooks/useCourses";
import useDeleteRecord from "../../hooks/useDeleteRecord";
import useInvalidateCourses from "../../hooks/admin/useInvalidateCourses";
import CourseList from "../../components/admin/CourseList";

function AllCourses() {
  const { data: courses } = useCourses();
  const { invalidateCourses } = useInvalidateCourses();
  const { mutate, status } = useDeleteRecord(invalidateCourses);

  const onDelete = (id: number) => {
    mutate({ id, path: "/course" });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">All Courses</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CourseList
          courses={courses}
          onDelete={onDelete}
          deleting={status === "pending"}
        />
      </div>
    </div>
  );
}

export default AllCourses;
