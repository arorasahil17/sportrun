import { useState } from "react";
import useForgetPassword from "../hooks/user/useForgetPassword";

const ForgotPassword = () => {
  const [inputValue, setInputValue] = useState("");
  const { mutate, status } = useForgetPassword();

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
      <div className="p-10 h-screen flex items-center justify-center ">
        <div className="bg-black border border-gray-200 text-white p-8 rounded-lg shadow-md w-full max-w-xl">
          <p className="py-4">
            Lost your password? Please enter your username or email address. You
            will receive a link to create a new password via email.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              mutate(inputValue);
            }}
          >
            <div>
              <label className="block mb-2">Email or Name</label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                required
                placeholder="Enter your email or name"
              />
            </div>
            <button
              type="submit"
              className={`w-full py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 ${
                status === "pending" && "animate-pulse"
              }`}
            >
              {status === "pending" ? "Please wait..." : "Forget Password"}
            </button>
          </form>
          {/* {message && <div className="mt-4 text-green-600">{message}</div>} */}
        </div>
      </div>
    </main>
  );
};

export default ForgotPassword;
