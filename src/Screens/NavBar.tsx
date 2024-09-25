import React, { useState } from "react";
import AtmDropdown from "../Atoms/AtmDropdown";

const NavBar = () => {
  const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);
  
  let hideTimeout: NodeJS.Timeout | null = null;

  const handleMouseEnter = (title: string) => {
    if (hideTimeout) clearTimeout(hideTimeout); // Clear any hiding timeout
    setVisibleDropdown(title);
  };

  const handleMouseLeave = () => {
    // Delay the hiding slightly to avoid flicker
    hideTimeout = setTimeout(() => setVisibleDropdown(null), 200);
  };

  const menuItems = [
    {
      title: "Cakes",
      subcategories: ["Chocolate Cake", "Vanilla Cake", "Red Velvet Cake"],
    },
    {
      title: "Snacks",
      subcategories: ["Chips", "Nachos", "Pretzels"],
    },
    {
      title: "Breads",
      subcategories: ["Whole Wheat", "Multigrain", "Sourdough"],
    },
    {
      title: "Cookies",
      subcategories: ["Chocolate Chip", "Oatmeal", "Sugar Cookies"],
    },
    {
      title: "Desserts",
      subcategories: ["Brownies", "Ice Cream", "Pudding"],
    },
    {
      title: "Pastries",
      subcategories: ["Croissants", "Danish", "Strudels"],
    },
    {
      title: "Muffins",
      subcategories: ["Blueberry", "Chocolate", "Banana Nut"],
    },
    {
      title: "Pies",
      subcategories: ["Apple Pie", "Pumpkin Pie", "Cherry Pie"],
    },
    {
      title: "Rolls",
      subcategories: ["Cinnamon Roll", "Dinner Roll", "Garlic Roll"],
    },
  ];

  return (
    <div className="bg-pink-50 fixed shadow-lg z-10 mt-[60px] mb-24 w-full flex p-2 items-center justify-between">
      <nav className="flex justify-center w-full">
        <ul className="flex justify-around w-full space-x-6">
          {menuItems.map((item) => (
            <AtmDropdown
              key={item.title}
              title={item.title}
              isDropdownVisible={visibleDropdown === item.title}
              subcategories={item.subcategories}
              handleMouseEnter={() => handleMouseEnter(item.title)}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;