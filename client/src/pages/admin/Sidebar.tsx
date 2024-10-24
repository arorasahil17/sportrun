import { FaUsers, FaUpload, FaBookOpen, FaShoppingCart } from "react-icons/fa";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className={`bg-gray-200 transition-all duration-300 p-4`}>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/admin"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
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
                to="/admin/course"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "/admin/course" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                //   onClick={() => handleLinkClick("uploadcourse")}
              >
                <span className="md:inline hidden">Upload Course</span>
                <i className="md:hidden">
                  <FaUpload />
                </i>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "purchasedcourse"
                    ? "bg-[#3e64de] text-white"
                    : ""
                } hover:bg-[#3e64de] hover:text-white`}
                //   onClick={() => handleLinkClick("purchasedcourse")}
              >
                <span className="md:inline hidden">Purchased Course</span>
                <i className="md:hidden">
                  <FaShoppingCart />
                </i>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`block py-2 px-4 text-center md:text-left ${
                  pathname === "admincourse" ? "bg-[#3e64de] text-white" : ""
                } hover:bg-[#3e64de] hover:text-white`}
                //   onClick={() => handleLinkClick("admincourse")}
              >
                <span className="md:inline hidden">Admin Course</span>
                <i className="md:hidden">
                  <FaBookOpen />
                </i>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
