import { Link } from "react-router-dom";

type Props = {
  title: string;
  isDropdownVisible: boolean;
  subcategories: string[];
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

function AtmDropdown({
  title,
  isDropdownVisible,
  subcategories,
  handleMouseEnter,
  handleMouseLeave,
}: Props) {
  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <Link
        to={`/${title.toLowerCase()}`}
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
          className="absolute z-50 w-[135px] mt-2 transform -translate-x-1/2 bg-white divide-y divide-gray-100 rounded-lg shadow-lg left-1/2"
        >
          <ul className="py-2 text-sm text-gray-700">
            {subcategories.map((subcategory, index) => (
              <li key={index}>
                <Link
                  to={`/${title.toLowerCase()}/${subcategory.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  {subcategory}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}

export default AtmDropdown;
