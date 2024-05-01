import React from "react";

function UpNav() {
  return (
    <nav className="hidden lg:flex bg-midNightBlue justify-end p-1 px-5">
      <div className="w-max flex gap-10 text-white text-xs p-2">
        <p>New Arrivals!</p>
        <p>Credit Cards!</p>
        <p>Parts & Services</p>
        <p>Find Stores</p>
        <p>Help</p>
      </div>
    </nav>
  );
}

export default UpNav;
