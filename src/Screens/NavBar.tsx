import React, { useState } from "react";
import AtmDropdown from "../Atoms/AtmDropdown";
import { useGetCategoryQuery } from "../Service/CategorySlice";
import { useGetSubCategoryQuery } from "../Service/SubCategory";

const NavBar = () => {
  const { data: categoryData } = useGetCategoryQuery(0);
  const [visibleDropdown, setVisibleDropdown] = useState<string | null>(null);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);

  let hideTimeout: NodeJS.Timeout | null = null;

  // Fetch subcategories based on the selected category ID
  const { data: subCategoryData } = useGetSubCategoryQuery(selectedCategoryId, { skip: !selectedCategoryId });

  const handleMouseEnter = (categoryId: string, categoryName: string) => {
    if (hideTimeout) clearTimeout(hideTimeout); // Clear any hiding timeout
    setVisibleDropdown(categoryName);
    setSelectedCategoryId(categoryId); // Set the selected category ID
  };

  const handleMouseLeave = () => {
    // Delay the hiding slightly to avoid flicker
    hideTimeout = setTimeout(() => {
      setVisibleDropdown(null);
      setSelectedCategoryId(null); // Reset the selected category ID when mouse leaves
    }, 200);
  };

  return (
    <div className="bg-pink-50 fixed shadow-lg z-10 mt-[60px] mb-24 w-full flex p-2 items-center justify-between">
      <nav className="flex justify-center w-full">
        <ul className="flex justify-around w-full space-x-6">
          {categoryData?.data?.map((category: any) => (
            <AtmDropdown
              key={category._id}
              title={category.categoryName}
              isDropdownVisible={visibleDropdown === category.categoryName}
              subcategories={visibleDropdown === category.categoryName ? subCategoryData?.data || [] : []} // Ensure subcategories is an array
              handleMouseEnter={() => handleMouseEnter(category._id, category.categoryName)}
              handleMouseLeave={handleMouseLeave}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
