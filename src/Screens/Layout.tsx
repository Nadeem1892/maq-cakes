import React from "react";
import Header from "./Header/Header";

import { Outlet } from "react-router-dom";

const Layout = () => {

  return (
<div className='flex flex-col'>
    <Header/>
    
     {/* Main Content */}
     <main className="p-4 bg-white">
      <Outlet/>
    </main>
</div>
  )    
}

export default Layout;