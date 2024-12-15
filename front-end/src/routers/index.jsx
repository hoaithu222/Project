import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ForgotPassword from "../pages/Forgot-Password/ForgotPassword";
import SignUp from "../pages/SignUp/SignUp";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import AllUser from "../pages/AllUser/AllUser";
import AllProduct from "../pages/AllProduct/AllProduct";

import CategoryProducts from "../pages/CategoryProducts/CategoryProducts";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "product-category/:categoryName",
        element: <CategoryProducts />,
      },
      {
        path: "admin-panel",
        element: <AdminPanel />,
        children: [
          {
            path: "all-user",
            element: <AllUser />,
          },
          {
            path: "upload-product",
            element: <AllProduct />,
          },
        ],
      },
    ],
  },
]);

export default router;
