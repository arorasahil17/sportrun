import { FaUsers, FaUpload, FaBookOpen, FaShoppingCart } from "react-icons/fa";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-[#171E30] text-white transition-all duration-300 p-4`}
      >
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin" ? "bg-red-500 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("allusers")}
              >
                <span className="md:inline hidden">All Users</span>
                <i className="md:hidden">
                  <FaUsers />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/add/course"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin/add/course"
                    ? "bg-red-600 text-white"
                    : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("uploadcourse")}
              >
                <span className="md:inline hidden">Upload Video</span>
                <i className="md:hidden">
                  <FaUpload />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/subscriptions"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin/subscriptions"
                    ? "bg-red-600 text-white"
                    : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("purchasedcourse")}
              >
                <span className="md:inline hidden">
                  Purchased Subscriptions
                </span>
                <i className="md:hidden">
                  <FaShoppingCart />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/courses"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin/courses" ? "bg-red-600 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">Admin Subscriptions</span>
                <i className="md:hidden">
                  <FaBookOpen />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/create/session"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin/create/session"
                    ? "bg-red-600 text-white"
                    : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">Add New Session</span>
                <i className="md:hidden">
                  <FaBookOpen />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/session"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin/session" ? "bg-red-600 text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">View All Session</span>
                <i className="md:hidden">
                  <FaBookOpen />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/cancel/subcriptions"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin/cancel/subcriptions"
                    ? "bg-red-600 text-white"
                    : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">Cancel Subscriptions</span>
                <i className="md:hidden">
                  <FaBookOpen />
                </i>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="w-[0.10rem] bg-red-500"></div>
      {/* Main Content */}
      <main className="flex-1 bg-[#171E30] text-white p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
