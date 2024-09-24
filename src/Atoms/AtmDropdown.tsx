import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

function AtmDropdown({}: Props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  // const toggleNav = () => {
  //     setIsDropdownVisible(!isDropdownVisible);
  //   };

  return (

    
    <ul className="space-y-3">
      {/* Cakes Dropdown for Mobile */}
      <li>
        <Link
          to="cakes"
          className="text-gray-800 hover:text-pink-400"
          onMouseEnter={handleMouseEnter}
        >
          Cakes
        </Link>

        {isDropdownVisible && (
          <div
            className="absolute z-30 mt-3 bg-white divide-y divide-gray-100 rounded-lg shadow right-2 w-44 dark:bg-gray-700"
            onMouseLeave={handleMouseLeave}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDelayButton"
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </li>
    </ul>
  );
}

export default AtmDropdown;
