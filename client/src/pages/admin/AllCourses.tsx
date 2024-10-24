import { Link } from "react-router-dom";
import useCourses from "../../hooks/useCourses";
import useDeleteRecord from "../../hooks/useDeleteRecord";
import useInvalidateCourses from "../../hooks/admin/useInvalidateCourses";

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
        {courses && courses.length ? (
          courses?.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg p-4">
              <div className="mb-4">
                {course.thumbnailUrl ? (
                  <img
                    src={course.thumbnailUrl}
                    alt={course.title}
                    className="w-full h-40 object-fill rounded"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded">
                    <span>No Thumbnail</span>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold">{course.title}</h3>
              <p className="text-gray-600">Price: ${course.price}</p>
              <p className="text-gray-600">Off Price: ${course.offPrice}</p>

              <div className="mt-4 flex space-x-4">
                <Link
                  to={`/admin/edit/course/${course.id}`}
                  // onClick={() => handleEdit(course)}
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDelete(course.id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  {status === "pending" ? "Please wait..." : "Delete"}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-lg">No course added</div>
        )}
      </div>
    </div>
  );
}

export default AllCourses;
