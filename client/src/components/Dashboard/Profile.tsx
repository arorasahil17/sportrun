import { useSelector } from "react-redux";
import { StoreState } from "../../lib/redux/store";

const Profile = () => {
  const user = useSelector((state: StoreState) => state.userReducer.user);

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-red-600">
          My Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Registration Date */}
          {/* <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-red-500 font-medium">Registration Date</p>
            <p className="text-lg font-semibold">03/08/2023 10:58 PM</p>
          </div> */}

          {/* First Name */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-red-500 font-medium">Name</p>
            <p className="text-lg font-semibold">{user?.name}</p>
          </div>

          {/* Last Name */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-red-500 font-medium">Enrolled Courses</p>
            <p className="text-lg font-semibold">
              {user?.enrolledCourses.length}
            </p>
          </div>

          {/* Username */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <p className="text-red-500 font-medium">Username</p>
            <p className="text-lg font-semibold">{user?.username}</p>
          </div>

          {/* Email */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm md:col-span-2">
            <p className="text-red-500 font-medium">Email</p>
            <p className="text-lg font-semibold">{user?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
