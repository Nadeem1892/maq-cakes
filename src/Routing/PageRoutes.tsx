import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Screens/Layout";
import Landing from "../Screens/Landing";
import LoginModalwrapper from "../Screens/Auth/LoginModalwrapper";


// type Props = {}

const PageRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
            path:"",
            element:<Landing/>,
            children:[
              {
                path:"/login",
                element:<LoginModalwrapper/>
              },
            ]
        },
        
        {
          path:"cakes",
          element:<div className="mt-96">Cakes</div>
        },
     
      ],
    },
   
  ]);
  return <RouterProvider router={router} />;
};

export default PageRoutes;
