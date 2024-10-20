import { useState } from "react";
import { navLinks } from "../routes";
import { menu, close } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative px-3 py-5">
      <nav className="flex justify-evenly items-center">
        {/* Logo */}
        <div className="w-[130px] md:w-[200px] flex justify-center">
          <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" />
        </div>

        {/* Navigation Links */}
        <div>
          <div
            className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] md:flex-row flex-col px-5 md:py-0 py-5 transition-transform ${
              menuOpen ? "left-[0%]" : "left-[-100%]"
            }`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              {navLinks.map(({ name, path }) => (
                <li
                  key={name}
                  className="relative max-w-fit pr-3 md:pr-0 py-1 transition ease-in-out delay-150 hover:text-blue-500 after:bg-gray-400 after:absolute after:h-1 after:w-0 after:bottom-[-5px] after:left-0 hover:after:w-full after:transition-all after:delay-150"
                >
                  <a href={path}>{name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* icon and Menu Icon */}
        <div className="flex justify-center items-center gap-2">
          <div className="hidden sm:flex items-center justify-center space-x-4">
            <div className="flex space-x-4">
              {/* User Icon */}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <i className="fas fa-user-alt text-lg"></i>
                <span className="sr-only">User-alt</span>
              </a>

              {/* Cart Icon */}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <i className="fas fa-cart-plus text-lg"></i>
                <span className="sr-only">Cart-plus</span>
              </a>

              {/* YouTube Icon */}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
              >
                <i className="fab fa-youtube text-lg"></i>
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          <IonIcon
            icon={menuOpen ? close : menu}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[30px] cursor-pointer md:hidden"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
