import { useEffect } from "react";
import useDeleteRecord from "../hooks/useDeleteRecord";

const PaymentFailure = () => {
  const subscriptionId = localStorage.getItem("subscriptionId") as string;

  const { mutate } = useDeleteRecord();

  useEffect(() => {
    if (subscriptionId) {
      mutate({ id: Number(subscriptionId), path: "/subscription" });
    }
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-[#0E1119] flex justify-center items-center">
        <div className="flex flex-col items-center justify-center bg-[#1F2937] text-white p-8 md:p-12 rounded-lg shadow-xl w-11/12 sm:w-3/4 md:w-2/4 lg:w-1/3">
          <div className="flex items-center justify-center w-16 h-16 rounded-full text-red-500 bg-red-500 bg-opacity-20 mb-4">
            ❌
          </div>
          <h2 className="text-3xl font-bold">Payment Failed</h2>
          {/* <h3 className="text-lg font-semibold mt-4">User: {username}</h3> */}
          <p className="text-center mt-2 text-gray-300">Please try again.</p>
          {/* <p className="text-gray-400 mt-2">Redirecting to payment page...</p> */}
        </div>
      </div>
    </>
  );
};

export default PaymentFailure;
