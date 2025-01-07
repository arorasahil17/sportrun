import { useMemo } from "react";
import { fetchAllRecords } from "../../helpers/commonHelper";
import useRecords from "../../hooks/useRecords";
import { Subscription } from "../../types";

function PurchasedSubscriptions() {
  const { data: subscriptions } = useRecords<Subscription>({
    queryKey: ["subscriptions"],
    queryFn: fetchAllRecords,
    path: "/subscriptions",
  });

  const paidSubscriptions = useMemo(() => {
    const paidSubscriptions = subscriptions?.filter(
      (subscription) => subscription.paymentStatus === "COMPLETED"
    );
    return paidSubscriptions;
  }, [subscriptions]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        Purchased Subscription
      </h2>
      <div className="relative overflow-x-auto">
        <table className="min-w-full  text-sm text-left text-gray-500">
          <thead className="text-xs bg-gray-700 text-red-500 uppercase">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Subscription Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Buyer</th>
            </tr>
          </thead>
          <tbody>
            {paidSubscriptions &&
              paidSubscriptions.map((subscription) => (
                <tr
                  key={subscription.id}
                  className="bg-gray-700 text-white border-b hover:bg-gray-500"
                >
                  <td className="px-6 py-4">{subscription.id}</td>
                  <td className="px-6 py-4">{subscription.course.title}</td>
                  <td className="px-6 py-4">{subscription.price}</td>
                  <td className="px-6 py-4">{subscription.user.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PurchasedSubscriptions;
