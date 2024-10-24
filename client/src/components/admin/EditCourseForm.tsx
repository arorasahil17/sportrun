import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { CourseUpdateFormData } from "../../schemas/adminSchema";

interface EditCourseFormProps {
  register: UseFormRegister<CourseUpdateFormData>;
  errors: FieldErrors<CourseUpdateFormData>;
  onsubmit: SubmitHandler<CourseUpdateFormData>;
  handleSubmit: UseFormHandleSubmit<CourseUpdateFormData>;
  isUpdating: boolean;
}

const EditCourseForm: React.FC<EditCourseFormProps> = ({
  register,
  errors,
  handleSubmit,
  isUpdating,
  onsubmit,
}) => {
  console.log("errors", errors);
  return (
    <>
      <div className="p-6 bg-white shadow-lg rounded-lg max-w-lg mx-auto mt-6">
        <h2 className="text-2xl font-semibold mb-4">Edit Course</h2>
        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className="block mb-2">Course Title</label>
            <input
              type="text"
              className={`${
                errors.title && "border-red-500"
              } w-full p-2 border border-gray-300 rounded outline-none`}
              {...register("title")}
            />
          </div>

          <div>
            <label className="block mb-2">Price</label>
            <input
              type="number"
              className={`${
                errors.price && "border-red-500"
              } w-full p-2 border border-gray-300 rounded outline-none`}
              {...register("price")}
            />
          </div>

          <div>
            <label className="block mb-2">Off Price</label>
            <input
              type="number"
              className={`${
                errors.offPrice && "border-red-500"
              } w-full p-2 border border-gray-300 rounded outline-none`}
              {...register("offPrice")}
            />
          </div>

          <div>
            <label className="block mb-2">Thumbnail</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("thumbnail")}
              accept="image/*"
            />
          </div>

          <div>
            <label className="block mb-2">Course Video</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("courseVideo")}
            />
          </div>

          <div>
            <label className="block mb-2">Demo Video</label>
            <input
              type="file"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("demoVideo")}
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
            >
              {isUpdating ? "Saving..." : "Save Changes"}
            </button>
            <button
              type="button"
              // onClick={handleBack}
              className="w-full py-2 px-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditCourseForm;
