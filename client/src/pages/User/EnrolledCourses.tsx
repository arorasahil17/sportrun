import { useMemo, useState } from "react";
import { Subscription } from "../../types";
import { useSelector } from "react-redux";
import { StoreState } from "../../lib/redux/store";
import { Link } from "react-router-dom";

// interface EnrolledCoursesProps {
//   courses: Course[];
// }

const EnrolledCourses = () => {
  const [activeTab, setActiveTab] = useState("enrolled");
  const user = useSelector((state: StoreState) => state.userReducer.user);

  const courses = useMemo(() => {
    const activeSubscriptions = user?.subscriptions.filter(
      (subscription) =>
        subscription.paymentStatus &&
        subscription.paymentStatus.toLocaleLowerCase() === "completed"
    );
    return activeSubscriptions;
  }, [user]);

  // const handleDownload = async (videoUrl: string) => {
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_API_URL}/${videoUrl}`
  //     );
  //     console.log(response);
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const blob = await response.blob();
  //     const link = document.createElement("a");
  //     link.href = URL.createObjectURL(blob);
  //     link.setAttribute("download", videoUrl.split("/").pop() || "video.mp4");
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   } catch (error) {
  //     console.error("Download failed:", error);
  //   }
  // };

  const renderCourses = (subscriptionList: Subscription[] | undefined) => {
    return subscriptionList?.map((subscription, index) => (
      <div
        key={index}
        className="bg-gray-500 shadow-md rounded-lg p-4 mb-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6"
      >
        {/* Thumbnail */}
        <img
          src={`${import.meta.env.VITE_API_URL}/${
            subscription.course.thumbnailUrl
          }`}
          alt={`${subscription.course.title} Thumbnail`}
          className="lg:w-32 lg:h-32 w-full rounded-lg object-cover"
        />

        {/* Course Details */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white">
            {subscription.course.title}
          </h3>
          <p className="text-white">{subscription.course.description}</p>
          {/* <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-gray-500">{course.progress}% Complete</p> */}
        </div>

        {/* Action Buttons */}
        {subscription.Cancellation &&
        subscription.Cancellation.subscriptionId === subscription.id ? (
          <div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg disabled:bg-red-400"
              disabled
            >
              Cancelled
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-2 ">
            {/* <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={() => handleDownload(subscription.course.courseVideoUrl)}
            >
              Download Subscription Video
            </button> */}
            <Link
              to={`/dashboard/cancel-subscription/${subscription.id}`}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Cancel Subscription
            </Link>
          </div>
        )}
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
            Enrolled Subscriptions {courses?.length}
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`px-4 py-2 ${
              activeTab === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
            } rounded-lg hover:bg-blue-600`}
          >
            Active Subscriptions (3)
          </button>
          <button
            onClick={() => setActiveTab("completed")}
            className={`px-4 py-2 ${
              activeTab === "completed"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            } rounded-lg hover:bg-blue-600`}
          >
            Completed Subscriptions
          </button>
        </div>

        {/* Course Cards */}
        <div>
          {activeTab === "enrolled" && renderCourses(courses)}
          {activeTab === "active" && renderCourses(courses)}
          {/* {activeTab === "completed" && renderCourses(completedCourses)} */}
        </div>
      </div>
    </div>
  );
};

export default EnrolledCourses;
