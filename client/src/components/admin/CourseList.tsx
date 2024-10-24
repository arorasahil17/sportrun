import { Link } from "react-router-dom";
import { Course } from "../../types";

interface CourseListProps {
  courses: Course[] | undefined | null;
  onDelete: (id: number) => void;
  deleting: boolean;
}
const CourseList: React.FC<CourseListProps> = ({
  courses,
  onDelete,
  deleting,
}) => {
  return (
    <>
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
                {deleting ? "Please wait..." : "Delete"}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-lg">No course added</div>
      )}
    </>
  );
};

export default CourseList;
