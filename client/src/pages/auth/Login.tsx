import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/user/useLogin";
import { useEffect } from "react";
import ErrorField from "../../common/ErrorField";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../lib/redux/store";
import { setUser } from "../../lib/redux/slices/userSlice";

const Login = () => {
  const { register, errors, handleSubmit, status, onsubmit, data } = useLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: StoreState) => state.userReducer.user);
  const isAutheticated = localStorage.getItem("isAuthenticated");

  useEffect(() => {
    if (isAutheticated || user) {
      console.log("running auth effect");
      navigate("/dashboard");
    }
  }, [isAutheticated, user, navigate]);

  useEffect(() => {
    if (status === "success") {
      console.log("running success effect");
      dispatch(setUser(data?.data));
      localStorage.setItem("isAuthenticated", "true");
      const redirectUrl = localStorage.getItem("redirectUrl") || "/dashboard";
      navigate(redirectUrl);
      localStorage.removeItem("redirectUrl");
    }
  }, [status, data, dispatch, navigate]);

  return (
    <main
      style={{
        backgroundImage: `url('./Background.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="main w-full px-6 md:px-20 m-6">
        <div className="w-full max-w-2xl border border-gray-200 shadow-2xl rounded-lg p-10 mx-auto bg-black lg:my-16">
          <form
            method="post"
            className="py-3"
            onSubmit={handleSubmit(onsubmit)}
          >
            <h1 className="text-3xl font-semibold mb-8 text-center text-red-500">
              Welcome Back!
            </h1>

            <div className=" gap-6">
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:border-red-500"
                  type="email"
                  id="email"
                  {...register("email")}
                />
                {errors.email && errors.email.message && (
                  <ErrorField message={errors.email.message} className="mt-2" />
                )}
              </div>

              <div className="mb-6">
                <label
                  className="block text-white  text-sm font-medium mb-2"
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
                  <ErrorField
                    message={errors.password.message}
                    className="mt-2"
                  />
                )}
              </div>
            </div>

            <div className="mb-4 flex items-center">
              <input
                className="mr-2 leading-tight accent-red-500"
                type="checkbox"
                id="remember"
              />
              <label className="text-white  text-sm" htmlFor="remember">
                Remember me
              </label>
            </div>

            <div>
              <button
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/signup"
              className="text-sm text-red-500 hover:text-red-600 hover:underline"
            >
              Sign up
            </Link>
            <br />
            <Link
              to="/forget-password"
              className="text-sm text-red-500 hover:text-red-600 hover:underline mt-3 block"
            >
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
