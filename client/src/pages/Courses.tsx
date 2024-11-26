import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard";
import { StoreState } from "../lib/redux/store";
import { useNavigate } from "react-router";
import useRecords from "../hooks/useRecords";
import { Course } from "../types";
import { fetchAllRecords } from "../helpers/commonHelper";

const Courses = () => {
  const { data: courses } = useRecords<Course>({
    queryKey: ["courses"],
    queryFn: fetchAllRecords,
    path: "/courses",
  });
  const navigate = useNavigate();
  const user = useSelector((state: StoreState) => state.userReducer.user);

  const subscribeCourse = (courseId: number) => {
    if (user) {
      navigate(`/checkout/${courseId}`);
    } else {
      const intendedUrl = `/checkout/${courseId}`;
      localStorage.setItem("redirectUrl", intendedUrl);
      navigate("/login");
    }
  };

  return (
    <div className="bg-[#0E1119]">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl text-red-500 font-medium text-center mb-6">
          Available Subscriptions
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
            <h1 className="text-white">Subscription not available</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
