const Profile = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#3e64de]">
          My Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registration Date */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">Registration Date</p>
            <p className="text-lg font-semibold">03/08/2023 10:58 PM</p>
          </div>

          {/* First Name */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">First Name</p>
            <p className="text-lg font-semibold">Test</p>
          </div>

          {/* Last Name */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">Last Name</p>
            <p className="text-lg font-semibold">Test</p>
          </div>

          {/* Username */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-gray-500 font-medium">Username</p>
            <p className="text-lg font-semibold">test</p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm md:col-span-2">
            <p className="text-gray-500 font-medium">Email</p>
            <p className="text-lg font-semibold">test@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
