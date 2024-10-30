import useDeleteRecord from "../../hooks/useDeleteRecord";
import CourseList from "../../components/admin/CourseList";
import useRecords from "../../hooks/useRecords";
import { Course } from "../../types";
import { fetchAllRecords } from "../../helpers/commonHelper";
import useRefetchData from "../../hooks/useRefetchData";

function AllCourses() {
  const { data: courses } = useRecords<Course>({
    queryKey: ["courses"],
    queryFn: fetchAllRecords,
    path: "/courses",
  });
  const { refetchData } = useRefetchData("courses");
  const { mutate, status } = useDeleteRecord(refetchData);

  const onDelete = (id: number) => {
    mutate({ id, path: "/course" });
  };

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4 text-red-500">
        All Subscriptions
      </h2>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
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
