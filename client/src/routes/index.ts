import React from "react";
import { NavLinks, Routes } from "../types";
const Login = React.lazy(() => import("../pages/auth/Login"));
const Signup = React.lazy(() => import("../pages/auth/Signup"));
const Dashboard = React.lazy(() => import("../pages/User/Dashboard"));
const Profile = React.lazy(() => import("../components/Dashboard/Profile"));
const Courses = React.lazy(() => import("../pages/User/Courses"));

export const navLinks: NavLinks = [
  { name: "home", path: "/" },
  { name: "courses", path: "/courses" },
  { name: "testimonials", path: "/testimonials" },
  { name: "about us", path: "/about" },
  { name: "blog", path: "/blog" },
  { name: "contact us", path: "/contact" },
];

export const routes: Routes = [
  { name: "Login", path: "/login", component: Login },
  { name: "Signup", path: "/signup", component: Signup },
  { name: "Dashboard", path: "/dashboard/*", component: Dashboard },
];

export const userDashboardRoutes: Routes = [
  { name: "Profile", path: "/profile", component: Profile },
  { name: "Enrolled Courses", path: "/courses", component: Courses },
];
