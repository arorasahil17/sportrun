import { fetchAllRecords } from "../../helpers/commonHelper";
import useRecords from "../../hooks/useRecords";
import { Subscription } from "../../types";

function PurchasedSubscriptions() {
  const { data: subscriptions } = useRecords<Subscription>({
    queryKey: ["subscriptions"],
    queryFn: fetchAllRecords,
    path: "/subscriptions",
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        Purchased Subscription
      </h2>
      <div className="relative overflow-x-auto">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-red-500 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Subscription Name</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Buyer</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions &&
              subscriptions.map((subscription) => (
                <tr
                  key={subscription.id}
                  className="bg-white border-b text-black hover:bg-gray-100"
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
