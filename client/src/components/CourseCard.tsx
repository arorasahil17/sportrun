import { Course } from "../types";

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="w-full bg-[#171E30] shadow-md rounded-lg overflow-hidden max-w-xs mx-auto my-4">
      <img
        className="w-full h-48 object-cover"
        src={course.thumbnailUrl}
        alt={course.title}
      />
      <div className="p-4">
        <h2 className="text-lg font-medium text-red-500 mb-2">
          {course.title}
        </h2>
        {/* <div className="flex items-center mb-2">
            <img
              className="w-8 h-8 rounded-full mr-2"
              src={course.tutorProfile}
              alt={course.tutorName}
            />
            <p className="text-gray-700">{course.tutorName}</p>
          </div> */}

        <div className="mb-4">
          {course.offPrice ? (
            <>
              <p className="text-green-500 font-bold text-lg">
                ${course.offPrice}
              </p>
              <p className="text-white line-through">${course.price}</p>
            </>
          ) : (
            <p className="text-white font-bold text-lg">${course.price}</p>
          )}
        </div>
        <div>
          <button className=" text-white py-2 px-4 rounded bg-red-500 hover:bg-red-600 w-full">
            Enroll Now
          </button>
        </div>

        {/* <div>
            {course.available ? (
              <button 
                onClick={handleEnroll} // Update to handleEnroll function
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
              >
                Enroll Now
              </button>
            ) : (
              <button className="bg-gray-400 text-white py-2 px-4 rounded w-full cursor-not-allowed">
                Coming Soon
              </button>
            )}
          </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
