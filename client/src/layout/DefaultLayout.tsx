import { Outlet } from "react-router";
import Navbar from "../common/Navbar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default DefaultLayout;
