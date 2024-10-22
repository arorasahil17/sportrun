import { Route, Routes } from "react-router";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";
import { userDashboardRoutes } from "../../routes";
import { Suspense } from "react";
import Loader from "../../common/Loader";
import Sidebar from "./Sidebar";

const Dashboard = () => {
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
