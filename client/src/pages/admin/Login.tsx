import ErrorField from "../../common/ErrorField";
import useLoginAdmin from "../../hooks/admin/useLoginAdmin";

const Login = () => {
  const { register, handleSubmit, onsubmit, errors, status } = useLoginAdmin();
  return (
    <>
      <main
        style={{
          backgroundImage: `url('/Background.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="main w-full px-6 md:px-20 m-6">
          <div className="w-full max-w-2xl border border-gray-200 shadow-2xl rounded-lg p-10 mx-auto bg-white lg:my-16">
            <form
              method="post"
              className="py-3"
              onSubmit={handleSubmit(onsubmit)}
            >
              <h1 className="text-3xl font-semibold mb-8 text-center text-gray-800">
                Welcome Back!
              </h1>

              <div className=" gap-6">
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-red-500"
                    type="username"
                    id="username"
                    {...register("username")}
                  />
                  {errors.username && errors.username.message && (
                    <ErrorField message={errors.username.message} />
                  )}
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-red-500"
                    type="password"
                    id="password"
                    {...register("password")}
                  />
                  {errors.password && errors.password.message && (
                    <ErrorField message={errors.password.message} />
                  )}
                </div>
              </div>

              <div className="mb-4 flex items-center">
                <input
                  className="mr-2 leading-tight accent-red-500"
                  type="checkbox"
                  id="remember"
                />
                <label className="text-gray-600 text-sm" htmlFor="remember">
                  Remember me
                </label>
              </div>

              <div>
                <button
                  className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                  type="submit"
                >
                  {status === "pending" ? "Please wait..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
