import React from 'react'

const NavBar = () => {

  return (
    <div className='bg-gray-100 shadow-lg mt-[60px] flex p-2 items-center justify-center'>
    <nav className="flex w-full justify-around">
     <a href="#flavours" className="hover:text-gray-400 text-gray-800">Cakes</a>
     <a href="#flavours" className="hover:text-gray-400 text-gray-800">By Flavours</a>
     <a href="#theme-cakes" className="hover:text-gray-400 text-gray-800">Theme Cakes</a>
     <a href="#relationship" className="hover:text-gray-400 text-gray-800">By Relationship</a>
     <a href="#desserts" className="hover:text-gray-400 text-gray-800">Desserts</a>
     <a href="#birthday" className="hover:text-gray-400 text-gray-800">Birthday</a>
     <a href="#anniversary" className="hover:text-gray-400 text-gray-800">Anniversary</a>
     <a href="#anniversary" className="hover:text-gray-400 text-gray-800">Occasion</a>
     <a href="#anniversary" className="hover:text-gray-400 text-gray-800">Customized Cakes</a>
   </nav>
</div>
  )
}

export default NavBar