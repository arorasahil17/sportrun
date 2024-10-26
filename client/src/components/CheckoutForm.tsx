import {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
} from "react-hook-form";
import { SubscriptionInputs } from "../schemas/subscriptionSchema";
import { Course } from "../types";
import ErrorField from "../common/ErrorField";

interface CheckoutFormProps {
  course: Course | null | undefined;
  days: number;
  handleDaysChange: (days: number) => void;
  errors: FieldErrors<SubscriptionInputs>;
  onsubmit: SubmitHandler<SubscriptionInputs>;
  handleSubmit: UseFormHandleSubmit<SubscriptionInputs>;
  getValue: UseFormGetValues<SubscriptionInputs>;
  isPending: boolean;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  course,
  days,
  handleDaysChange,
  handleSubmit,
  onsubmit,
  isPending,
  errors,
  getValue,
}) => {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
            <div>
              <label className="block mb-2">Number of days: {days}</label>
              <input
                type="range"
                min={1}
                max={365}
                value={days}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleDaysChange(parseInt(e.target.value))
                }
                className="w-full p-2 border border-gray-300 rounded"
              />
              {errors.numberOfDays && errors.numberOfDays.message && (
                <ErrorField message={errors.numberOfDays.message} />
              )}
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-4">Course Summary</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="font-bold">{course?.title}</p>
              <p>Price: ${getValue("price")}</p>
              {/* <p>Tutor: {course.tutorName}</p> */}
            </div>

            <div className="mt-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
              >
                {isPending ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
