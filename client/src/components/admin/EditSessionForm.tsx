import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { SessionFormData } from "../../schemas/sessionSchema";
import ErrorField from "../../common/ErrorField";

interface EditSessionFormProps {
  register: UseFormRegister<SessionFormData>;
  errors: FieldErrors<SessionFormData>;
  handleSubmit: UseFormHandleSubmit<SessionFormData>;
  onsubmit: SubmitHandler<SessionFormData>;
  isPending: boolean;
}

const EditSessionForm: React.FC<EditSessionFormProps> = ({
  register,
  errors,
  handleSubmit,
  onsubmit,
  isPending,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg p-4 sm:p-8 space-y-6 bg-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-500 mb-4 text-center">
          Edit Session
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
              {...register("title")}
            />
            {errors.title && errors.title.message && (
              <ErrorField message={errors.title.message} />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
              rows={3}
              {...register("description")}
            ></textarea>
            {errors.description && errors.description.message && (
              <ErrorField message={errors.description.message} />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Meeting Link</label>
            <input
              type="url"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
              {...register("sessionLink")}
            />
            {errors.sessionLink && errors.sessionLink.message && (
              <ErrorField message={errors.sessionLink.message} />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Time</label>
            <input
              type="datetime-local"
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg"
              {...register("sessionTime")}
            />
            {errors.sessionTime && errors.sessionTime.message && (
              <ErrorField message={errors.sessionTime.message} />
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-2 mt-4 font-semibold bg-red-600 rounded-lg hover:bg-red-700 ${
              isPending && "animate-pulse"
            }`}
          >
            {isPending ? "Please wait..." : "Update Session"}
          </button>
          <button
            type="button"
            className="w-full py-2 mt-2 font-semibold bg-gray-600 rounded-lg hover:bg-gray-700"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditSessionForm;
