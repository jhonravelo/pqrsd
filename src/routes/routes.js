import React, { lazy } from "react";
import RouteController from "./RouteController";
const Index = lazy(() => import("../pages/request/index"));
const Search = lazy(() => import("../pages/request/search"));
const Request = lazy(() => import("../pages/request/request"));
const Login = lazy(() => import("../pages/login/login"));
const Admin = lazy(() => import("../pages/admin/admin"));

const routes = [
  {
    path: "/",
    exact: true,
    render: (props) => <Index {...props} />,
  },
  {
    path: "/search",
    exact: true,
    render: (props) => <Search {...props} />,
  },
  {
    path: "/request",
    exact: true,
    render: (props) => <Request {...props} />,
  },
  {
    path: "/login",
    exact: true,
    render: (props) => <Login {...props} />,
  },
  {
    path: "/admin",
    render: (props) => <RouteController component={Admin} {...props} />,
  },
];

export default routes;
