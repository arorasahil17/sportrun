import CourseCard from "../components/CourseCard";
import useCourses from "../hooks/useCourses";

const Courses = () => {
  const { data: courses } = useCourses();
  return (
    <>
      <div className="bg-[#0E1119]">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl text-red-500 font-medium text-center mb-6">
            Available Courses
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses && courses.length > 0 ? (
              courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <h1 className="text-white">Courses not available</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
