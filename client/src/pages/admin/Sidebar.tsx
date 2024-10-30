import { FaUsers, FaUpload, FaBookOpen, FaShoppingCart,FaCalendarAlt } from "react-icons/fa";
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
                  pathname === "/admin/course" ? "bg-[#3e64de] text-white" : ""
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
                  pathname === "purchasedcourse"
                    ? "bg-[#3e64de] text-white"
                    : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("purchasedcourse")}
              >
                <span className="md:inline hidden">Purchased Subscription</span>
                <i className="md:hidden">
                  <FaShoppingCart />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/courses"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "admincourse" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">All Videos</span>
                <i className="md:hidden">
                  <FaBookOpen />
                </i>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/create/session"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "admincourse" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-red-600 hover:text-white`}
                //   onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">Add New Session</span>
                <i className="md:hidden">
                <FaCalendarAlt />
                </i>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

     {/* Divider */}
     <div className="w-[0.10rem] bg-red-500"></div>

      {/* Main Content */}
      <main className="flex-1 bg-[#171E30] text-white p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
