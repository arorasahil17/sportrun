import React from "react";
import { NavLinks, Routes } from "../types";
const Login = React.lazy(() => import("../pages/auth/Login"));
const Signup = React.lazy(() => import("../pages/auth/Signup"));
const Dashboard = React.lazy(() => import("../pages/User/Dashboard"));
const Profile = React.lazy(() => import("../components/Dashboard/Profile"));
const Courses = React.lazy(() => import("../pages/Courses"));
const Admin = React.lazy(() => import("../pages/admin/Admin"));
const Checkout = React.lazy(() => import("../pages/Checkout"));
const EnrolledCourses = React.lazy(
  () => import("../pages/User/EnrolledCourses")
);
const ForgetPassword = React.lazy(() => import("../components/ForgetPassword"));
const ResetPassword = React.lazy(() => import("../components/ResetPassword"));
const Sessions = React.lazy(() => import("../pages/User/Sessions"));

export const navLinks: NavLinks = [
  { name: "home", path: "/" },
  { name: "subscription", path: "/subscription" },
  { name: "testimonials", path: "/testimonials" },
  { name: "about us", path: "/about" },
  { name: "blog", path: "/blog" },
  { name: "contact us", path: "/contact" },
];

export const routes: Routes = [
  { name: "Login", path: "/login", component: Login },
  { name: "Signup", path: "/signup", component: Signup },
  { name: "Dashboard", path: "/dashboard/*", component: Dashboard },
  { name: "Admin", path: "/admin/*", component: Admin },
  { name: "Courses", path: "/subscription", component: Courses },
  { name: "Checkout", path: "/checkout/:id", component: Checkout },
  {
    name: "ResetPassword",
    path: "/reset-password",
    component: ResetPassword,
  },
  {
    name: "ForgetPassword",
    path: "/forget-password",
    component: ForgetPassword,
  },
];

export const userDashboardRoutes: Routes = [
  { name: "Profile", path: "/profile", component: Profile },
  { name: "Enrolled Courses", path: "/courses", component: EnrolledCourses },
  { name: "Sessions", path: "/upcoming/sessions", component: Sessions },
];
