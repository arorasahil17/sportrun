import { FaBookOpen, FaCheckCircle, FaPlay } from "react-icons/fa";

const DashboardLayout = () => {
  const enrolledCoursesCount = 3;
  const activeCoursesCount = 3;
  const completedCoursesCount = 1;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 p-6">
      {/* Enrolled Courses */}
      <div className="bg-blue-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg">
        <FaBookOpen className="text-4xl mb-4" />
        <h2 className="text-xl font-bold">{enrolledCoursesCount}</h2>
        <p className="text-lg">Enrolled Courses</p>
      </div>

      {/* Active Courses */}
      <div className="bg-green-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg">
        <FaPlay className="text-4xl mb-4" />
        <h2 className="text-xl font-bold">{activeCoursesCount}</h2>
        <p className="text-lg">Active Courses</p>
      </div>

      {/* Completed Courses */}
      <div className="bg-purple-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg">
        <FaCheckCircle className="text-4xl mb-4" />
        <h2 className="text-xl font-bold">{completedCoursesCount}</h2>
        <p className="text-lg">Completed Courses</p>
      </div>
    </div>
  );
};

export default DashboardLayout;
