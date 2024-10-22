import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { StoreState } from "../../lib/redux/store";

const Sidebar = () => {
  const { pathname } = useLocation();
  const user = useSelector((state: StoreState) => state.userReducer.user);

  return (
    <div className="flex min-h-screen border rounded-xl">
      {/* Sidebar */}
      <aside className="bg-gray-200 md:w-64 w-20 transition-all duration-300">
        {/* Profile Section (hidden on mobile) */}
        <div className="hidden md:flex flex-col items-center p-6">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h3 className="text-xl font-semibold">{user?.name}</h3>
        </div>

        {/* Sidebar Menu */}
        <nav className="mt-10">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/dashboard" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                //   onClick={() => handleLinkClick("Dashboard")}
              >
                <span className="md:inline hidden">Dashboard</span>
                <i className="fas fa-home md:hidden"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/dashboard/profile"
                    ? "bg-[#3e64de] text-white"
                    : ""
                } hover:bg-[#3e64de] hover:text-white`}
                //   onClick={() => handleLinkClick("My Profile")}
              >
                <span className="md:inline hidden">My Profile</span>
                <i className="fas fa-user md:hidden"></i>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/courses"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/dashboard/courses"
                    ? "bg-[#3e64de] text-white"
                    : ""
                } hover:bg-[#3e64de] hover:text-white`}
                //   onClick={() => handleLinkClick("Enrolled Courses")}
              >
                <span className="md:inline hidden">Enrolled Courses</span>
                <i className="fas fa-book md:hidden"></i>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "Settings" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                //   onClick={() => handleLinkClick("Settings")}
              >
                <span className="md:inline hidden">Settings</span>
                <i className="fas fa-cog md:hidden"></i>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
