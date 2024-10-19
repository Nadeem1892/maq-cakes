import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Screens/Layout";
import Landing from "../Screens/Landing";
import LoginModalwrapper from "../Screens/Auth/LoginModalwrapper";
import ListingWrapper from "../Screens/Products/Cakes/ListingWrapper";


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
          path:"cakes/:id",
          element:<ListingWrapper/>,
        },
       
          {
            path: "cakes/chocolate",
            element: <div>Chocolate Cake</div>,
          },
          // Add more subcategories as needed
          {
            path: "cakes/vanilla",
            element: <div>Vanilla Cake</div>,
          },
          {
            path: "cakes/red-velvet-cake",
            element: <div>Red Velvet Cake</div>,
          },
        ],
     
     
    },
   
  ]);
  return <RouterProvider router={router} />;
};

export default PageRoutes;
