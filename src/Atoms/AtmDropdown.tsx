import { Link } from "react-router-dom";

type Subcategory = {
  _id: string;
  categoryId: string;
  subCategoryName: string;
  isDeleted: boolean;
  createdAt: string;
};

type Props = {
  title: string;
  isDropdownVisible: boolean;
  subcategories?: Subcategory[]; // Update the type to reflect the correct structure
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  id:string
};

function AtmDropdown({
  title,
  isDropdownVisible,
  subcategories = [], // Default to an empty array
  handleMouseEnter,
  handleMouseLeave,
  id
}: Props) {

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Link
        to={`#`}
        className={`text-gray-800 hover:text-pink-300 ${
          isDropdownVisible ? "text-pink-400" : ""
        }`}
      >
        {title}
      </Link>

      {/* Show dropdown only if isDropdownVisible is true */}
      {isDropdownVisible && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute z-50 w-[205px] mt-2 transform -translate-x-1/2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg left-1/2"
        >
          <ul className="py-2 text-sm text-gray-700">
            {subcategories.map((subcategory) => (
              <li key={subcategory._id}>
                <Link
                  to={`/${title.toLowerCase()}/${subcategory.subCategoryName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {subcategory.subCategoryName}
                </Link>
              </li>
            ))}
            {/* Add the "View All" button */}
            <li>
              <Link
                to={`/${title.toLowerCase()}/${id}`}
                className="block px-4 py-2 font-bold text-center text-pink-500 hover:bg-gray-100"
              >
                View All
              </Link>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

export default AtmDropdown;
