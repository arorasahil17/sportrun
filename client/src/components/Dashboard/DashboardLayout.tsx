import { FaBookOpen, FaCheckCircle, FaPlay } from "react-icons/fa";
import { useSelector } from "react-redux";
import { StoreState } from "../../lib/redux/store";
import { useMemo } from "react";

const DashboardLayout = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  console.log("user", user);
  const activeSubscriptions = useMemo(() => {
    const activeSubscriptions = user?.subscriptions.filter(
      (subscription) =>
        subscription.paymentStatus &&
        subscription.paymentStatus.toLocaleLowerCase() === "completed"
    );
    return activeSubscriptions;
  }, [user]);

  const enrolledSubscriptionCount = activeSubscriptions?.length;
  const activeSubscriptionCount = 3;
  const completedSubscriptionCount = 1;

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 p-6">
      {/* Enrolled Subscription */}
      <div className="bg-blue-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg">
        <FaBookOpen className="text-4xl mb-4" />
        <h2 className="text-xl font-bold">{enrolledSubscriptionCount}</h2>
        <p className="text-lg">Enrolled Subscription</p>
      </div>

      {/* Active Subscription */}
      <div className="bg-green-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg">
        <FaPlay className="text-4xl mb-4" />
        <h2 className="text-xl font-bold">{activeSubscriptionCount}</h2>
        <p className="text-lg">Active Subscription</p>
      </div>

      {/* Completed Subscription */}
      <div className="bg-purple-500 text-white flex flex-col items-center justify-center w-full md:w-1/3 p-6 rounded-lg shadow-lg">
        <FaCheckCircle className="text-4xl mb-4" />
        <h2 className="text-xl font-bold">{completedSubscriptionCount}</h2>
        <p className="text-lg">Completed Subscription</p>
      </div>
    </div>
  );
};

export default DashboardLayout;
