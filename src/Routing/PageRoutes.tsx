import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Screens/Layout";
import Landing from "../Screens/Landing";

// type Props = {}

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path:"",
            element:<Landing/>
        },
        {
            path:"login",
            element:<div>Login</div>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default PageRoutes;
