import React, { useState } from 'react'
import { FaRegCircleUser } from "react-icons/fa6";


// type Props = {}

const AtmPopupMenu = () => {

  const [isChecked, setIsChecked] = useState(false);

  const toggleChecked = () => setIsChecked(!isChecked);

  return (
    <label className="inline-block relative text-rendering-optimize-legibility">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={toggleChecked}
      />
      <div
        className={`flex border-none cursor-pointer overflow-hidden transition-all duration-100 ${
          isChecked ? "transform scale-95" : "hover:scale-110"
        }`}
      >
        <FaRegCircleUser/>
      </div>

      <nav
        className={`absolute p-[10px] bg-[#eee] text-gray-700 border border-gray-300 rounded-md shadow-md top-[60px] right-1 transition-all duration-100 transform ${
          isChecked ? "scale-100 opacity-100 visible" : "scale-80 opacity-0 invisible"
        }`}
      >
        <legend className="px-4 py-1 text-xs text-gray-500 uppercase">Quick Start</legend>
        <ul className="list-none m-0 p-0">
          <li>
            <button className="flex items-center w-full text-gray-700 py-[0.375em] px-4 hover:bg-[#00bf63] hover:text-white">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 4v6.406l-3.753 3.741-6.463-6.462 3.7-3.685h6.516zm2-2h-12.388l1.497 1.5-4.171 4.167 9.291 9.291 4.161-4.193 1.61 1.623v-12.388zm-5 4c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm6.708.292l-.708.708v3.097l2-2.065-1.292-1.74zm-12.675 9.294l-1.414 1.414h-2.619v2h-2v2h-2v-2.17l5.636-5.626-1.417-1.407-6.219 6.203v5h6v-2h2v-2h2l1.729-1.729-1.696-1.685z"
                ></path>
              </svg>
              <span className="ml-2">Log In</span>
            </button>
          </li>
          <li>
            <button className="flex items-center w-full text-gray-700 py-[0.375em] px-4 hover:bg-[#00bf63] hover:text-white">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z"
                ></path>
              </svg>
              <span className="ml-2">Sign Up</span>
            </button>
          </li>
        </ul>
      </nav>
    </label>
  );
};

export default AtmPopupMenu;
