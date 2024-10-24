import ErrorField from "../../common/ErrorField";
import useCreateCourse from "../../hooks/admin/useCreateCourse";

function UploadCourse() {
  const { register, errors, handleSubmit, onsubmit, status } =
    useCreateCourse();

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload Course Details</h2>
      <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label className="block mb-2">Course Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("title")}
          />
          {errors.title?.message && (
            <ErrorField message={errors.title.message} />
          )}
        </div>

        <div>
          <label className="block mb-2">Price</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("price")}
          />
          {errors.price?.message && (
            <ErrorField message={errors.price.message} />
          )}
        </div>

        <div>
          <label className="block mb-2">Off Price</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("offPrice")}
          />
          {errors.offPrice?.message && (
            <ErrorField message={errors.offPrice.message} />
          )}
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("description")}
          />
          {errors.description?.message && (
            <ErrorField message={errors.description.message} />
          )}
        </div>

        <div>
          <label className="block mb-2">Thumbnail</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("thumbnail")}
            accept="image/*"
          />
          {errors.thumbnail?.message && (
            <ErrorField message={errors.thumbnail.message} />
          )}
        </div>

        <div>
          <label className="block mb-2">Course Video</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("courseVideo")}
            accept="video/*"
          />
          {errors.courseVideo?.message && (
            <ErrorField message={errors.courseVideo.message} />
          )}
        </div>

        <div>
          <label className="block mb-2">Demo Video</label>
          <input
            type="file"
            className="w-full p-2 border border-gray-300 rounded"
            {...register("demoVideo")}
            accept="video/*"
          />
          {errors.demoVideo?.message && (
            <ErrorField message={errors.demoVideo.message} />
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
        >
          {status === "pending" ? "Uploading..." : "Upload Course"}
        </button>
      </form>
    </div>
  );
}

export default UploadCourse;
