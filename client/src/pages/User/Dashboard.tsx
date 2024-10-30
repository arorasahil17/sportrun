import { Route, Routes, useNavigate } from "react-router";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { userDashboardRoutes } from "../../routes";
import { Suspense, useEffect } from "react";
import Loader from "../../common/Loader";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const isAutheticated = localStorage.getItem("isAutheticated")!;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAutheticated) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<DashboardLayout />} />
          {userDashboardRoutes.map(({ name, path, component: Component }) => (
            <Route
              key={name}
              path={path}
              element={
                <Suspense fallback={<Loader />}>
                  <Component />
                </Suspense>
              }
            />
          ))}
        </Route>
      </Routes>
    </>
  );
};

export default Dashboard;
