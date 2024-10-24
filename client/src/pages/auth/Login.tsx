import { Link, useNavigate } from "react-router-dom";
import useLogin from "../../hooks/user/useLogin";
import { useEffect } from "react";
import ErrorField from "../../common/ErrorField";

const Login = () => {
  const { register, errors, handleSubmit, status, onsubmit } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "success") {
      navigate("/");
    }
  }, [status]);

  return (
    <main className="main bg-white px-6 md:px-16 m-6">
      <div className="w-full border border-black-100 shadow-xl border-xl max-w-xl p-10 mx-auto lg:my-16">
        <form
          method="post"
          className="border-b-2 py-3"
          onSubmit={handleSubmit(onsubmit)}
        >
          <h1 className="text-xl mb-2">Hi, Welcome Back!</h1>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              type="email"
              id="email"
              {...register("email")}
            />
            {errors.email && errors.email.message && (
              <ErrorField message={errors.email.message} />
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              type="password"
              id="password"
              {...register("password")}
            />
            {errors.password && errors.password.message && (
              <ErrorField message={errors.password.message} />
            )}
          </div>
          <div className="mb-4">
            <label
              className="text-gray-600 flex items-center"
              htmlFor="remember"
            >
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                id="remember"
              />
              <span className="text-sm">Remember me</span>
            </label>
          </div>
          <div>
            <button
              className="w-full bg-[#3e64de]  text-white py-2 px-3 rounded"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-2 mb-3">
          <Link
            to="/signup"
            className="text-sm text-[#3e64de]  hover:underline"
          >
            Sign up
          </Link>
          <br />
          <a
            href="/forgetpassword"
            className="text-sm text-[#3e64de]  hover:underline"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </main>
  );
};

export default Login;
