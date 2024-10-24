import { Route, Routes } from "react-router";
import Sidebar from "./Sidebar";
import UsersList from "../../components/admin/UsersList";
import UploadCourse from "../../components/admin/UploadCourse";

const Admin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<UsersList />} />
          <Route path="/course" element={<UploadCourse />} />
        </Route>
      </Routes>
    </>
  );
};

export default Admin;
