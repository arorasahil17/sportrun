import ErrorField from "../common/ErrorField";
import useResetPassword from "../hooks/user/useResetPassword";

const ResetPassword = () => {
  const { register, errors, handleSubmit, onsubmit, status } =
    useResetPassword();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 text-gray-200">
      <div className="w-full max-w-lg p-8 space-y-8 bg-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-red-500">
          Change Password
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
          <div>
            <label className="block text-sm font-medium">New Password</label>
            <input
              type="password"
              className="block w-full px-4 py-2 my-2 bg-gray-700 rounded-lg focus:ring focus:ring-red-500 outline-none"
              placeholder="Enter new password"
              {...register("newPassword")}
            />
            {errors.newPassword && errors.newPassword.message && (
              <ErrorField message={errors.newPassword.message} />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">
              Confirm New Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 my-2 bg-gray-700 rounded-lg focus:ring focus:ring-red-500 outline-none"
              placeholder="Confirm new password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && errors.confirmPassword.message && (
              <ErrorField message={errors.confirmPassword.message} />
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 mt-4 font-semibold bg-red-500 hover:bg-red-600 rounded-lg  focus:outline-none focus:ring-2 focus:ring-red-500 ${
              status === "pending" && "animate-pulse"
            }`}
          >
            {status === "pending" ? "Please wait..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
