const Footer = () => {
  return (
    <footer className="relative bg-[#000] text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="lg:w-4/12">
            <div className="w-full flex flex-col gap-5  px-4 ">
              <div className="w-full md:w-[200px] p-3  rounded-md flex justify-center">
                <a href="/">
                  <img src="/spotrunlogo.png" alt="LOGO" />
                </a>
              </div>
              <div>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  Welcome spot runners! Kenneth Ramanno the founder of Spotrun
                  since 2020.
                </h5>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                  An ultra-runner and personal trainner. I have assisted many
                  people seeking to reach their weight loss goals through
                  virtual sessions and popup sessions.
                </h5>
              </div>
            </div>
            <div className=" w-full flex items-center gap-2 mt-6 lg:mb-0 mb-6 px-4"></div>
          </div>

          <div className="w-full lg:w-8/12 flex flex-row  justify-center px-4">
            <div className="w-full px-4 ml-auto">
              <span className="block uppercase text-red-500 text-lg mb-2">
                Main information
              </span>
              <ul className="list-unstyled uppercase">
                <li>
                  <a className="text-white block pb-2 text-md" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-white block pb-2 text-md" href="/">
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a className="text-white block pb-2 text-md" href="/">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full px-4">
              <span className="block uppercase  text-red-500 text-lg  mb-2">
                Follow Us
              </span>
              <button
                className="w-10 h-10 rounded-full ease-in-out delay-150  bg-white   hover:scale-100 hover:-translate-y-1  text-black flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
              </button>
              <button
                className="w-10 h-10 rounded-full mt-3 ease-in-out delay-150  bg-white hover:scale-100 hover:-translate-y-1  text-black flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <a href="/">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </button>
              <button
                className="w-10 h-10 rounded-full mt-3 ease-in-out delay-150  bg-white hover:scale-100 hover:-translate-y-1  text-black flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <a href="/">
                  <i className="fab fa-youtube"></i>
                </a>
              </button>
              <button
                className="w-10 h-10 rounded-full mt-3 ease-in-out delay-150  bg-white hover:scale-100 hover:-translate-y-1  text-black flex items-center justify-center hover:opacity-90 transition"
                type="button"
              >
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-md text-red-500  py-1">
              Copyright ©{" "}
              <span id="get-current-year">
                2024 SPORT RUN BY NZAZRO TECHNOLOGIES
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
