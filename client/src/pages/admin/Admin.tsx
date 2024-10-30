import { Route, Routes } from "react-router";
import Sidebar from "./Sidebar";
import UploadCourse from "../../components/admin/UploadCourse";
import AllCourses from "./AllCourses";
import EditCourse from "./EditCourse";
import Users from "./Users";
import PurchasedSubscriptions from "./PurchasedSubscriptions";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Users />} />
          <Route path="/add/course" element={<UploadCourse />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/edit/course/:id" element={<EditCourse />} />
          <Route path="/subscriptions" element={<PurchasedSubscriptions />} />
        </Route>
      </Routes>
    </>
  );
};

export default Admin;
