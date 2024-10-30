import { UseMutateFunction } from "@tanstack/react-query";
import { Cancellation } from "../../types";

interface CancelSubscriptionsListProps {
  cancelledSubscriptions: Cancellation[] | null | undefined;
  mutate: UseMutateFunction<string | null, Error, number, unknown>;
}

const CancelSubscriptionsList: React.FC<CancelSubscriptionsListProps> = ({
  cancelledSubscriptions,
  mutate,
}) => {
  return (
    <>
      <div className="min-h-screen  text-gray-200 p-6">
        <h1 className="text-2xl font-semibold text-red-500 mb-4">
          Cancelled Subscriptions
        </h1>
        <div className="w-full overflow-x-auto bg-gray-800 rounded-lg shadow-md">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-700 text-red-500">
                <th className="p-4">Name</th>
                <th className="p-4">Cancellation Reason</th>
                <th className="p-4">Cancellation Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cancelledSubscriptions &&
                cancelledSubscriptions.map((subscription) => (
                  <tr
                    key={subscription.id}
                    className="border-b border-gray-700 hover:bg-gray-700"
                  >
                    <td className="p-4 text-gray-300">
                      {subscription.subscription?.user.name}
                    </td>
                    <td className="p-4 text-gray-300">{subscription.reason}</td>
                    <td className="p-4 text-gray-300">
                      {new Date(
                        subscription.cancellationDate
                      ).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          subscription.status === "PENDING"
                            ? "bg-red-500"
                            : "bg-green-500"
                        }`}
                      >
                        {subscription.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <button
                        onClick={() => mutate(subscription.id)}
                        disabled={subscription.status === "APPROVED"}
                        className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-4 rounded disabled:opacity-75"
                      >
                        {subscription.status === "PENDING"
                          ? "Mark as Resolved"
                          : "Resolved"}
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {!cancelledSubscriptions ||
          (cancelledSubscriptions.length === 0 && (
            <p className="text-center text-lg text-gray-300 mt-8">
              No canceled subscriptions found.
            </p>
          ))}
      </div>
    </>
  );
};

export default CancelSubscriptionsList;
