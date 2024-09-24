import React from 'react'
import { Link } from 'react-router-dom'
import AtmDropdown from '../Atoms/AtmDropdown'

const NavBar = () => {

  return (
    <div className='bg-pink-50 shadow-lg mt-[60px] flex p-2 items-center justify-center'>
    <nav className="flex justify-around w-full">
     <Link to="cakes" className="text-gray-800 hover:text-pink-400">Cakes</Link>
     <a href="#flavours" className="text-gray-800 hover:text-pink-400">Snacks</a>
     <a href="#theme-cakes" className="text-gray-800 hover:text-pink-400">Breads</a>
     <a href="#relationship" className="text-gray-800 hover:text-pink-400">Cookies</a>
     <a href="#desserts" className="text-gray-800 hover:text-pink-400">Desserts</a>
     <a href="#birthday" className="text-gray-800 hover:text-pink-400">Pastries</a>
     <a href="#anniversary" className="text-gray-800 hover:text-pink-400">Muffins</a>
     <a href="#anniversary" className="text-gray-800 hover:text-pink-400">Pies</a>
     <a href="#anniversary" className="text-gray-800 hover:text-pink-400">Rolls</a>
     <AtmDropdown/>
   </nav>
</div>
  )
}

export default NavBar