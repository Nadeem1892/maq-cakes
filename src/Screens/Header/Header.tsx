import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdSearch, IoMdClose } from "react-icons/io";
import NavBar from "../NavBar";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Toggle side navigation
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="flex flex-col">
      {/* Fixed Header */}
      <header className="bg-pink-200 shadow-lg text-gray-700 h-[60px] lg:px-6 px-3 fixed top-0 left-0 w-full z-20 flex justify-between items-center">
        {/* Logo and Menu Button */}
        <div className="flex items-center gap-2">
          <HiMenuAlt1
            className="text-3xl  md:hidden focus:outline-none"
            onClick={toggleNav}
          />
          <h1 className="text-xl uppercase  lg:text-2xl">MAQ Cakes</h1>
        </div>

        {/* Search Bar, Cart, and User Icons */}
        <div className="flex items-center gap-5 lg:gap-5">
          {/* Search Bar */}
          <div className="flex items-center">
            {/* Search input for large screens */}
            <div className="hidden lg:flex px-4 py-2 rounded-md border-2 border-gray-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
              <input
                type="text"
                placeholder="Search Something..."
                className="text-sm text-gray-800 bg-transparent outline-none w-96"
              />
              <IoMdSearch className="text-[20px] text-gray-800 cursor-pointer" />
            </div>
          </div>

          {/* Cart and User Icons */}
          <IoMdSearch className="lg:hidden text-[25px] text-gray-700 cursor-pointer md:block" />
          <LuShoppingCart className="text-xl" />
          <FaRegCircleUser className="text-xl" />
        </div>
      </header>

      {/* Desktop Navigation */}
      <div className="hidden overflow-hidden lg:block">
        <NavBar/>
      </div>

      {/* Side Navigation for Mobile */}
      {isNavOpen && (
        <nav className="fixed top-0 left-0 z-50 w-64 h-full overflow-y-auto text-gray-800 bg-gray-100 shadow-lg md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-2 py-8 bg-pink-100">
              <h2 className="text-xl font-semibold text-gray-700">
                All Categories
              </h2>
              <IoMdClose
                onClick={toggleNav}
                className="text-[28px] text-gray-700"
              />
            </div>
            <ul className="px-3 mt-5 space-y-3">
              {/* Cakes Dropdown for Mobile */}
              {/* <li>
                <button className="w-full p-2 text-left text-gray-200 bg-gray-600" onClick={toggleDropdown}>
                  Cakes
                </button>
                {isDropdownOpen && (
                  <ul className="pl-4">
                    <li>
                      <a href="#weddings" className="block hover:text-gray-300">
                        Weddings
                      </a>
                    </li>
                    <li>
                      <a href="#holidays" className="block hover:text-gray-300">
                        Holidays
                      </a>
                    </li>
                    <li>
                      <a href="#events" className="block hover:text-gray-300">
                        Events
                      </a>
                    </li>
                  </ul>
                )}
              </li> */}

              <li className="p-2 bg-pink-100">
                <a href="#flavours" className="text-xl text-gray-600 ">
                  Cakes
                </a>
              </li>
              <li className="p-2 bg-pink-100">
                <a href="#flavours" className="text-xl text-gray-600 ">
                  By Flavours
                </a>
              </li>
              <li className="p-2 bg-pink-100">
                <a href="#theme-cakes" className="text-xl text-gray-600 ">
                  Theme Cakes
                </a>
              </li>
              <li className="p-2 bg-pink-100">
                <a href="#relationship" className="text-xl text-gray-600 ">
                  By Relationship
                </a>
              </li>
              <li className="p-2 bg-pink-100">
                <a href="#desserts" className="text-xl text-gray-600 ">
                  Desserts
                </a>
              </li>

              <li className="p-2 bg-pink-100">
                <a href="#birthday" className="text-xl text-gray-600 ">
                  Birthday
                </a>
              </li>

              <li className="p-2 bg-pink-100">
                <a href="#anniversary" className="text-xl text-gray-600 ">
                  Anniversary
                </a>
              </li>

              <li className="p-2 bg-pink-100">
                <a href="#anniversary" className="text-xl text-gray-600 ">
                  Occasion
                </a>
              </li>

              <li className="p-2 bg-pink-100">
                <a href="#anniversary" className="text-xl text-gray-600 ">
                  Customized Cakes
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
