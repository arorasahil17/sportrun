import { Route, Routes, useNavigate } from "react-router";
import Sidebar from "./Sidebar";
import UploadCourse from "../../components/admin/UploadCourse";
import AllCourses from "./AllCourses";
import EditCourse from "./EditCourse";
import Users from "./Users";
import PurchasedSubscriptions from "./PurchasedSubscriptions";
import CreateSession from "./CreateSession";
import AllSessions from "./AllSessions";
import EditSession from "./EditSession";
import CancelSubscriptions from "./CancelSubscriptions";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "../../lib/redux/store";
import { useEffect } from "react";
import Login from "./Login";
import useAdminAuth from "../../hooks/admin/useAdminAuth";
import Loader from "../../common/Loader";
import { setAdmin } from "../../lib/redux/slices/adminSlice";

const Admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const admin = useSelector((state: StoreState) => state.adminReducer.admin);

  const { data, isPending, isError } = useAdminAuth();

  console.log("data", data);

  useEffect(() => {
    if (data) {
      dispatch(setAdmin(data));
    }
  }, [data, isError, dispatch]);

  useEffect(() => {
    if (!admin) {
      navigate("/admin/login");
    }
  }, [navigate]);

  if (isPending) {
    return <Loader />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Users />} />
          <Route path="/add/course" element={<UploadCourse />} />
          <Route path="/courses" element={<AllCourses />} />
          <Route path="/edit/course/:id" element={<EditCourse />} />
          <Route path="/subscriptions" element={<PurchasedSubscriptions />} />
          <Route path="/create/session" element={<CreateSession />} />
          <Route path="/session" element={<AllSessions />} />
          <Route path="/edit/session/:id" element={<EditSession />} />
          <Route
            path="/cancel/subcriptions"
            element={<CancelSubscriptions />}
          />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Admin;
