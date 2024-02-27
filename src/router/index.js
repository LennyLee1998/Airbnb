import { Navigate } from "react-router-dom";

import { lazy } from "react";

const Home = lazy(() => import("@/views/home"));
const Entire = lazy(() => import("@/views/entire"));
const Detail = lazy(() => import("@/views/detail"));
const NotFound = lazy(() => import("@/views/not-found"));

const routes = [
  // redirect
  {
    path: "/",
    element: <Navigate to="home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
