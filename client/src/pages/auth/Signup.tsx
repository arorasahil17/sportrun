import { Link, useNavigate } from "react-router-dom";
import ErrorField from "../../common/ErrorField";
import useSignup from "../../hooks/user/useSignup";
import { useEffect } from "react";

const Signup = () => {
  const { register, errors, handleSubmit, status, onsubmit } = useSignup();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "success") {
      navigate("/");
    }
  }, [status]);

  return (
    <main className="main bg-white px-6 md:px-16 m-6">
      <div className="w-full border border-black-100 shadow-xl border-xl max-w-xl p-10 mx-auto lg:my-16">
        <form className="border-b-2 py-3" onSubmit={handleSubmit(onsubmit)}>
          <h1 className="text-xl mb-2">Create Your Account</h1>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              type="text"
              id="firstName"
              {...register("firstName")}
            />
            {errors.firstName && errors.firstName.message && (
              <ErrorField message={errors.firstName.message} />
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              type="text"
              id="lastName"
              {...register("lastName")}
            />
            {errors.lastName && errors.lastName.message && (
              <ErrorField message={errors.lastName.message} />
            )}
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              type="text"
              id="username"
              {...register("username")}
            />
            {errors.username && errors.username.message && (
              <ErrorField message={errors.username.message} />
            )}
          </div>

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
              className="block text-gray-700 text-sm mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && errors.confirmPassword.message && (
              <ErrorField message={errors.confirmPassword.message} />
            )}
          </div>

          <div>
            <button
              className="w-full bg-[#3e64de]  text-white py-2 px-3 rounded"
              type="submit"
            >
              {status === "pending" ? "Signing up..." : "Sign up"}
            </button>
          </div>
        </form>

        <div className="mt-2 mb-3">
          <Link to="/login" className="text-sm text-[#3e64de]  hover:underline">
            Already have an account? Log in
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
