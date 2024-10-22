import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout";
import Home from "./pages/Home";
import { routes } from "./routes";
import { Suspense, useEffect } from "react";
import Loader from "./common/Loader";
import { Toaster } from "react-hot-toast";
import useAuth from "./hooks/user/useAuth";
import { useDispatch } from "react-redux";
import { setUser } from "./lib/redux/slices/userSlice";

export default function App() {
  const dispatch = useDispatch();
  const { data, isLoading, isError, error } = useAuth();

  useEffect(() => {
    if (isError) {
      console.log(error);
    }

    if (data) {
      dispatch(setUser(data));
    }
  }, [data, isError, error, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Toaster position="top-center" />
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            {routes.map(({ name, path, component: Component }) => (
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
      </Router>
    </>
  );
}
