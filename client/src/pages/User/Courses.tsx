import { useState } from "react";
import { Course } from "../../types";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("enrolled"); // Default tab

  const courses = [
    {
      title: "Secrets of Profitable Trading Strategy",
      totalLessons: 32,
      completedLessons: 1,
      progress: 3,
      status: "active",
      thumbnail: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      title: "Risk Management Strategy",
      totalLessons: 6,
      completedLessons: 0,
      progress: 0,
      status: "active",
      thumbnail: "https://via.placeholder.com/150", // Placeholder image
    },
    {
      title: "Forex Elite Training Strategy",
      totalLessons: 44,
      completedLessons: 5,
      progress: 11,
      status: "active",
      thumbnail: "https://via.placeholder.com/150", // Placeholder image
    },
  ];

  const completedCourses = [
    {
      title: "Advanced Forex Techniques",
      totalLessons: 12,
      completedLessons: 12,
      progress: 100,
      status: "completed",
      thumbnail: "https://via.placeholder.com/150", // Placeholder image
    },
  ];

  const renderButton = (progress: number) => {
    return progress === 0 ? (
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
        Start Learning
      </button>
    ) : (
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Continue Learning
      </button>
    );
  };

  const renderCancelButton = (status: string) => {
    return (
      status === "active" && (
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
          Cancel Subscription
        </button>
      )
    );
  };

  const renderCourses = (coursesList: Course[]) => {
    return coursesList.map((course, index) => (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 mb-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
      >
        {/* Thumbnail */}
        <img
          src={course.thumbnail}
          alt={`${course.title} Thumbnail`}
          className="lg:w-32 lg:h-32 w-full rounded-lg object-cover"
        />

        {/* Course Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold">{course.title}</h3>
          <p className="text-gray-500">
            {course.completedLessons}/{course.totalLessons} Lessons Completed
          </p>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-500">{course.progress}% Complete</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2 ">
          {renderButton(course.progress)}
          {renderCancelButton(course.status)}
        </div>
      </div>
    ));
  };

  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 lg:p-6">
        {/* Nav Links */}
        <div className="flex flex-col lg:flex-row gap-5 justify-center lg:space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("enrolled")}
            className={`px-4 py-2 ${
              activeTab === "enrolled"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } rounded-lg hover:bg-blue-600`}
          >
            Enrolled Courses (3)
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 ${
              activeTab === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-lg hover:bg-blue-600`}
          >
            Active Courses (3)
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-4 py-2 ${
              activeTab === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } rounded-lg hover:bg-blue-600`}
          >
            Completed Courses
          </button>
        </div>

        {/* Course Cards */}
        <div>
          {activeTab === "enrolled" && renderCourses(courses)}
          {activeTab === "active" && renderCourses(courses)}
          {activeTab === "completed" && renderCourses(completedCourses)}
        </div>
      </div>
    </div>
  );
};

export default Courses;
