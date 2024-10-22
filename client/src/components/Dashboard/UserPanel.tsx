import { useState } from "react";
import { FaBookOpen, FaPlay, FaCheckCircle } from "react-icons/fa";
import ForgotPassword from "../ForgetPassword";
import { Course } from "../../types";
function UserAdminPanel() {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState("Dashboard");

  // Function to change active link and content
  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  // Conditional rendering of the main content
  const renderContent = () => {
    switch (activeLink) {
      case "Dashboard":
        return <Dashboard />;
      case "My Profile":
        return <UserProfile />;
      case "Enrolled Courses":
        return <Courses />;
      case "Settings":
        return <ForgotPassword />;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen border rounded-xl">
      {/* Sidebar */}
      <aside className="bg-gray-200 md:w-64 w-20 transition-all duration-300">
        {/* Profile Section (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center p-6">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h3 className="text-xl font-semibold">John Doe</h3>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-10">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeLink === "Dashboard" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("Dashboard")}
              >
                <span className="md:inline hidden">Dashboard</span>
                <i className="fas fa-home md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeLink === "My Profile" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("My Profile")}
              >
                <span className="md:inline hidden">My Profile</span>
                <i className="fas fa-user md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeLink === "Enrolled Courses"
                    ? "bg-[#3e64de] text-white"
                    : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("Enrolled Courses")}
              >
                <span className="md:inline hidden">Enrolled Courses</span>
                <i className="fas fa-book md:hidden"></i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  activeLink === "Settings" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                onClick={() => handleLinkClick("Settings")}
              >
                <span className="md:inline hidden">Settings</span>
                <i className="fas fa-cog md:hidden"></i>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">{renderContent()}</main>
    </div>
  );
}

export default UserAdminPanel;

// Dashboard section for user Admin Panel
const Dashboard = () => {
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

// Profile Section for User Admin Panel
const UserProfile = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#3e64de]">
          My Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registration Date */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">Registration Date</p>
            <p className="text-lg font-semibold">03/08/2023 10:58 PM</p>
          </div>

          {/* First Name */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">First Name</p>
            <p className="text-lg font-semibold">Test</p>
          </div>

          {/* Last Name */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">Last Name</p>
            <p className="text-lg font-semibold">Test</p>
          </div>

          {/* Username */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">Username</p>
            <p className="text-lg font-semibold">test</p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm md:col-span-2">
            <p className="text-gray-500 font-medium">Email</p>
            <p className="text-lg font-semibold">test@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

// enrolled course for User Admin Panel
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
