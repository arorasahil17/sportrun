import { Route, Routes } from "react-router";
import Sidebar from "./Sidebar";
import UsersList from "../../components/admin/UsersList";
import UploadCourse from "../../components/admin/UploadCourse";
import AllCourses from "./AllCourses";
import EditCourse from "./EditCourse";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<UsersList />} />
          <Route path="/add/course" element={<UploadCourse />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/edit/course/:id" element={<EditCourse />} />
        </Route>
      </Routes>
    </>
  );
};

export default Admin;
