import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function ProfileDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  
 
  let hideTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = () => {
    if (hideTimeout) clearTimeout(hideTimeout); 
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    // Delay the hiding slightly to avoid flicker
    hideTimeout = setTimeout(() => setDropdownVisible(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Profile Button */}
      <div className="flex items-center space-x-2 text-gray-800 ">
        <FaUser className="text-xl text-gray-600 hover:text-pink-400"/>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {/* Dropdown Menu */}
      {isDropdownVisible && (
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute z-50 w-60 mt-4 transform bg-white divide-y divide-gray-100 rounded-lg shadow-lg -translate-x-[86%] left-1/2">
          <ul className="py-2 text-sm text-gray-700">
          <li>
              <Link
                to="/signout"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Sign Out
              </Link>
            </li>
            <li>

              <Link
                to="/profile"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Orders
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
