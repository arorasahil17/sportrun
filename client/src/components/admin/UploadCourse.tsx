import ErrorField from "../../common/ErrorField";
import useCreateCourse from "../../hooks/admin/useCreateCourse";

function UploadCourse() {
  const { register, errors, handleSubmit, onsubmit, status } =
    useCreateCourse();

  return (
    <div className="bg-black border border-gray-200 p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        Upload Course Details
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label className="block mb-2 text-white">Course Title</label>
          <input
            type="text"
            className="block w-full mb-2 p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-red-500"
            {...register("title")}
          />
          {errors.title?.message && (
            <ErrorField message={errors.title.message} />
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">Price</label>
          <input
            type="number"
            className="block w-full p-2 mb-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-red-500"
            {...register("price")}
          />
          {errors.price?.message && (
            <ErrorField message={errors.price.message} />
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">Off Price</label>
          <input
            type="number"
            className="block w-full mb-2 p-2 border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-red-500"
            {...register("offPrice")}
          />
          {errors.offPrice?.message && (
            <ErrorField message={errors.offPrice.message} />
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">Description</label>
          <input
            type="text"
            className="block w-full mb-2 p-2 border border-gray-300 rounded text-gray-800 bg-gray-50 focus:outline-none focus:border-red-500"
            {...register("description")}
          />
          {errors.description?.message && (
            <ErrorField message={errors.description.message} />
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">Thumbnail</label>
          <input
            type="file"
            className="block w-full mb-2 p-2 border border-gray-300 rounded text-gray-800 bg-gray-50 focus:outline-none focus:border-red-500"
            {...register("thumbnail")}
            accept="image/*"
          />
          {errors.thumbnail?.message && (
            <ErrorField message={errors.thumbnail.message} />
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">Course Video</label>
          <input
            type="file"
            className="block w-full mb-2 p-2 border border-gray-300 rounded text-gray-800 bg-gray-50 focus:outline-none focus:border-red-500"
            {...register("courseVideo")}
            accept="video/*"
          />
          {errors.courseVideo?.message && (
            <ErrorField message={errors.courseVideo.message} />
          )}
        </div>

        <div>
          <label className="block mb-2 text-white">Demo Video</label>
          <input
            type="file"
            className="block w-full mb-2 p-2 border border-gray-300 rounded text-gray-800 bg-gray-50 focus:outline-none focus:border-red-500"
            {...register("demoVideo")}
            accept="video/*"
          />
          {errors.demoVideo?.message && (
            <ErrorField message={errors.demoVideo.message} />
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700"
        >
          {status === "pending" ? "Uploading..." : "Upload Course"}
        </button>
      </form>
    </div>
  );
}

export default UploadCourse;
