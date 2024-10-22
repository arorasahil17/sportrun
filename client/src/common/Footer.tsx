const Footer = () => {
  return (
    <footer className="relative bg-[#000] text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="lg:w-4/12">
            <div className="w-full flex flex-col gap-5  px-4 ">
              <div className="w-full md:w-[200px] p-3 bg-white rounded-md flex justify-center">
                <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" />
              </div>
              <div>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  Learning often happens in classrooms but it doesn’t have to.
                </h5>
              </div>
            </div>
            <div className=" w-full flex items-center gap-2 mt-6 lg:mb-0 mb-6 px-4">
              <button
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i className="fab fa-youtube"></i>
              </button>
              <button
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-[#FD346E] hover:bg-[#7F54B3]  hover:scale-100 hover:-translate-y-1  text-white flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <i className="fab fa-instagram"></i>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-lg mb-2">
                  Explore
                </span>
                <ul className="list-unstyled uppercase">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Leadership Board
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Become a Affilate
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-lg  mb-2">
                  Quick Links
                </span>
                <ul className="list-unstyled uppercase">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Risk Disclaimer
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      Terms & Condition
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-500 text-lg  mb-2">
                  Get In Touch
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      +91 1234567890
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-md"
                      href="/"
                    >
                      info@test.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-md text-blueGray-500  py-1">
              Copyright ©{" "}
              <span id="get-current-year">
                2021 Good Work Enterprises All Rights Reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
