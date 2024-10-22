import { useState } from "react";

const ForgotPassword = () => {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add your logic to handle the password reset process
    // For example, you could call an API to send a reset link to the email
    // For demonstration, we're just setting a message
    setMessage(`Password reset link has been sent to ${inputValue}`);
    setInputValue(""); // Clear the input field
  };

  return (
    <div className="p-10 bg-gray-100 flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
        <p className="py-4">
          Lost your password? Please enter your username or email address. You
          will receive a link to create a new password via email.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2">Email or Name</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
              placeholder="Enter your email or name"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Forget Password
          </button>
        </form>
        {message && <div className="mt-4 text-green-600">{message}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;
