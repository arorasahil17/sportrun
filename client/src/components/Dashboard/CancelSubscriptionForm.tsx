import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { CancelSubscriptionFormData } from "../../schemas/subscriptionSchema";
import ErrorField from "../../common/ErrorField";

interface CancelSubscriptionFormProps {
  submitted: boolean;
  register: UseFormRegister<CancelSubscriptionFormData>;
  errors: FieldErrors<CancelSubscriptionFormData>;
  handleSubmit: UseFormHandleSubmit<CancelSubscriptionFormData>;
  onsubmit: SubmitHandler<CancelSubscriptionFormData>;
  isPending: boolean;
}

const CancelSubscriptionForm: React.FC<CancelSubscriptionFormProps> = ({
  submitted,
  register,
  errors,
  handleSubmit,
  onsubmit,
  isPending,
}) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200">
        <div className="w-full max-w-lg p-8 space-y-8 bg-black rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-red-500">
            Cancel Subscription
          </h2>
          {submitted ? (
            <p className="text-center text-green-500">
              Your cancellation request has been submitted.
            </p>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
              <div>
                <label className="block text-sm font-medium">Name</label>
              </div>
              <div>
                <label className="block text-sm font-medium">
                  Reason for Cancellation
                </label>
                <textarea
                  className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Briefly explain your reason for cancellation"
                  rows={4}
                  {...register("reason")}
                ></textarea>
                {errors.reason && errors.reason.message && (
                  <ErrorField message={errors.reason.message} />
                )}
              </div>
              <button
                type="submit"
                className={`w-full py-2 mt-4 font-semibold bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 ${
                  isPending && "animate-pulse"
                }`}
              >
                {isPending ? "Please wait..." : "Submit Cancellation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default CancelSubscriptionForm;
