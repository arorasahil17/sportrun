import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { SessionFormData } from "../../schemas/sessionSchema";
import ErrorField from "../../common/ErrorField";
import { Course } from "../../types";

interface CreateSessionFormProps {
  register: UseFormRegister<SessionFormData>;
  errors: FieldErrors<SessionFormData>;
  onsubmit: SubmitHandler<SessionFormData>;
  handleSubmit: UseFormHandleSubmit<SessionFormData>;
  isPending: boolean;
  courses: Course[] | null | undefined;
}

const CreateSessionForm: React.FC<CreateSessionFormProps> = ({
  register,
  errors,
  handleSubmit,
  onsubmit,
  courses,
  isPending,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center text-gray-200">
      <div className="w-full max-w-xl p-8 space-y-10 bg-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-red-500">
          Create New Session
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              type="text"
              className="block w-full px-4 py-2 my-2 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 outline-none"
              placeholder="Enter session title"
              {...register("title")}
            />
            {errors.title && errors.title.message && (
              <ErrorField message={errors.title.message} />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              className="w-full px-4 py-2 mt-1 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 outline-none"
              placeholder="Enter session description"
              rows={4}
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
              className="block w-full px-4 py-2 my-2 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 outline-none"
              placeholder="Enter session link"
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
              className="block w-full px-4 py-2 my-2 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 outline-none"
              {...register("sessionTime")}
            />
            {errors.sessionTime && errors.sessionTime.message && (
              <ErrorField message={errors.sessionTime.message} />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Course</label>
            <select
              className="block w-full px-4 py-2 my-2 bg-gray-700 text-gray-200 border border-red-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 outline-none"
              {...register("courseId")}
            >
              <option value="">Select course</option>
              {courses && courses.length ? (
                courses.map((course) => {
                  return (
                    <option key={course.id} value={course.id}>
                      {course.title}
                    </option>
                  );
                })
              ) : (
                <option value="">
                  No course available, please add before creating session
                </option>
              )}
            </select>
            {errors.courseId && errors.courseId.message && (
              <ErrorField message={errors.courseId.message} />
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-2 mt-4 font-semibold bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 ${
              isPending && "animate-pulse"
            }`}
          >
            {isPending ? "Please wait..." : "Create Session"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSessionForm;
