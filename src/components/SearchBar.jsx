import React from "react";
import { BiSearch } from "react-icons/bi";

function SearchBar() {
  return (
    <div className="flex items-center justify-center px-3 py-2 border-b">
      <div className="relative flex w-full items-center rounded-md bg-[#f0f2f5] px-3">
        <span className="text-2xl ">
          <BiSearch />
        </span>
        <input
          type="search"
          className="w-full bg-transparent p-2 outline-none placeholder:text-sm"
          placeholder="Search or start new chat"
        />
      </div>
    </div>
  );
}

export default SearchBar;
