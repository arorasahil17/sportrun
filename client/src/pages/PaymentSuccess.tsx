import { useEffect, useState } from "react";
import { apiClient } from "../utils";
import { useSelector } from "react-redux";
import { StoreState } from "../lib/redux/store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const PaymentSuccess = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const [subscriptionDays, setSubscriptionDays] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const orderId = params.get("token");
    const subscriptionId = localStorage.getItem("subscriptionId");

    if (orderId && subscriptionId) {
      capturePayment(orderId, subscriptionId);
    }
  }, []);

  const capturePayment = async (orderId: string, subscriptionId: string) => {
    try {
      const response = await apiClient.post("/capture-payment", {
        orderId,
        subscriptionId: Number(subscriptionId),
      });

      if (response.data.success) {
        setSubscriptionDays(response.data.data.numberOfDays);
        toast.success("Subscription activated successfully");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      toast.error("Payment failed");
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-[#0E1119] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center bg-[#1F2937] text-white p-8 md:p-12 rounded-lg shadow-xl w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/3">
          <div className="flex items-center justify-center w-20 h-20 rounded-full text-white bg-green-600 bg-opacity-90 mb-4 shadow-lg">
            <div className="text-5xl font-bold animate-pulse">✔️</div>
          </div>

          <h2 className="text-3xl font-bold">Payment Successful!</h2>
          <h3 className="text-lg font-semibold mt-4">User: {user?.name}</h3>
          <p className="text-center mt-2 text-gray-300">
            Thank you for your payment, {user?.name}. Your subscription is
            active for {subscriptionDays} days.
          </p>
          <p className="text-gray-400 mt-2">Redirecting to homepage...</p>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
