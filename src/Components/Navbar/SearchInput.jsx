import React from "react";

function SearchInput() {
  return (
    <div className="bg-white w-full p-1 flex rounded-3xl items-center double-width">
      <input
        type="text"
        placeholder="Find something great"
        className="bg-white text-black w-full p-2 rounded-3xl outline-none"
      />
      <i className="cursor-pointer fa-solid fa-magnifying-glass bg-[#41e0d0] p-2 rounded-full text-midNightBlue w-1/7 h-1/6"></i>
    </div>
  );
}

export default SearchInput;
