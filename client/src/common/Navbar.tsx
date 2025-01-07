import { useState } from "react";
import { navLinks } from "../routes";
import { menu, close } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "../lib/redux/store";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state: StoreState) => state.userReducer);

  return (
    <header className="relative bg-black border-b border-b-zinc-900 px-3 py-5">
      <nav className="flex justify-evenly items-center">
        {/* Logo */}
        <div className="w-[130px] md:w-[200px] flex justify-center">
          <img src="/spotrunlogo.png" alt="LOGO" />
        </div>

        {/* Navigation Links */}
        <div>
          <div
            className={`navLinks duration-500 md:static absolute md:w-auto w-full h-[100vh] md:h-auto bg-black flex md:items-center gap-[1.5vw] top-[100%] md:top-auto px-4 md:px-0 lg:px-0 ${
              menuOpen ? "left-0" : "left-[-100%]"
            } transition-all`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] text-white gap-8">
              {navLinks.map(({ name, path }, index) => (
                <li
                  key={index}
                  className="relative max-w-fit pr-3 md:pr-0 py-1 transition ease-in-out delay-150 hover:text-red-500 after:bg-red-400 after:absolute after:h-1 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:delay-150"
                >
                  <Link to={path} className="uppercase">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Icon and Menu Icon */}
        <div className="flex justify-center items-center gap-2">
          <div className=" sm:flex items-center justify-center space-x-4">
            <div className="flex space-x-4">
              {/* User Icon */}
              <Link
                to={user ? "/dashboard" : "/login"}
                className="w-7 h-7 lg:w-10 lg:h-10  rounded-full ease-in-out delay-150 bg-red-500 hover:bg-red-600 hover:scale-100 hover:-translate-y-1 text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <i className="fas fa-user-alt text-sm lg:text-lg"></i>
                <span className="sr-only">User-alt</span>
              </Link>

              {/* Cart Icon */}

              {/* YouTube Icon */}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 lg:w-10 lg:h-10 rounded-full ease-in-out delay-150 bg-red-500 hover:bg-red-600 hover:scale-100 hover:-translate-y-1 text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <i className="fab fa-youtube text-sm lg:text-lg"></i>
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <IonIcon
            icon={menuOpen ? close : menu}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white z-50 text-[30px] cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
