import  { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const menuItems = [
    { item: "home" },
    { item: "detail" },
    { item: "category" },
    { item: "my favorite" },
    { item: "profile" },
    { item: "log in/sign up" },
  ];

  return (
    <div className="relative inline-block ">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex items-center justify-between  px-4 py-2 text-sm font-bold text-gray-700  border border-gray-300 rounded-md uppercase gap-10 "
      >
        Menu
        {isDropdownOpen ? (
          <IoIosArrowDown className="text-orange-500 text-xl" />
        ) : (
          <IoIosArrowUp className="text-orange-500" />
        )}
      </button>

      {isDropdownOpen && (
        <div className="origin-top-left absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {menuItems.map((menuItem, index) => (
              <a
                key={index}
                href="#"
                className="block px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-200 hover:text-orange-500 capitalize"
              >
                {menuItem.item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
