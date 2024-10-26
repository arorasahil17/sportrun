import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";
import useCourses from "../hooks/useCourses";
import { StoreState } from "../lib/redux/store";
import { useNavigate } from "react-router";

const Courses = () => {
  const { data: courses } = useCourses();
  const navigate = useNavigate();
  const user = useSelector((state: StoreState) => state.userReducer.user);

  const subscribeCourse = (courseId: number) => {
    if (user) {
      navigate(`/checkout/${courseId}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Available Courses
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses && courses.length > 0 ? (
          courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              subscribeCourse={subscribeCourse}
            />
          ))
        ) : (
          <h1 className="">Courses not available</h1>
        )}
      </div>
    </div>
  );
};

export default Courses;
