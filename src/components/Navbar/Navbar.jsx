import React from "react";
import { FiSearch } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import DropdownMenu from "./DropDownMenu";

const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" max-w-screen-lg flex  items-center justify-between mx-auto p-4">
        {/* logo */}
        <div className="text-2xl font-bold">Pti</div>

        {/* search bar and menu */}
        <div className="flex gap-1">
          {/* search bar */}
          <div className="relative ">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <FiSearch className="text-orange-500" />
            </div>
            <input
              type="text"
              className="block w-96 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search audiobook"
            />
          </div>
          {/* menu */}
          <DropdownMenu></DropdownMenu>
        </div>
        <span className="bg-orange-500 rounded-full p-2 text-white">
          <LuUser2 className="" />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
