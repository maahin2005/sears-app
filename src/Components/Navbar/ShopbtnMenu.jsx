import React, { useState, useRef, useEffect } from "react";

function ShopbtnMenu({ array, title }) {
  const [isRotated, setIsRotated] = useState(false);
  // const [isRotatedOne, setIsRotatedOne] = useState(false);
  const menuRef = useRef(null);

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  // const handleClickOne = (e) => {
  //   e.stopPropagation();
  //   setIsRotatedOne(!isRotatedOne);
  // };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsRotated(false);
      // setIsRotatedOne(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="dropdown dropdown-hover lg:inline-block hidden"
    >
      <div
        tabIndex={0}
        onClick={handleClick}
        className="m-1 cursor-pointer flex justify-center items-center gap-1 group text-sm"
      >
        {title}
        <i
          className={`fa-solid fa-angle-down transition-transform transform text-sm ${
            isRotated ? "rotate-180" : ""
          }`}
        ></i>
      </div>
      <ul
        tabIndex={0}
        className={`h-96 overflow-scroll dropdown-content z-[1] menu p-2 shadow w-60 mt-5 bg-white text-black cursor-pointer ${
          isRotated ? "block" : "hidden"
        }`}
      >
        {array.map((el, i) => (
          <li key={i} className="hover:bg-[#e3eefb]">
            <a className="hover:bg-[#e3eefb] ">{el}</a>
          </li>
        ))}
        {/* <li onClick={handleClickOne}>
          <a>
            <div
              tabIndex={1}
              className="m-1 cursor-pointer flex justify-center items-center gap-2"
            >
              in{" "}
              <i
                className={`fa-solid fa-angle-down transition-transform transform ${
                  isRotatedOne ? "rotate-180" : ""
                }`}
              ></i>
            </div>
          </a>
          <ul
            tabIndex={1}
            className={`dropdown-content z-[1] menu p-2 shadow w-52 bg-white text-black cursor-pointer ${
              isRotatedOne ? "block" : "hidden"
            }`}
          >
            <li>
              <a>Tools</a>
            </li>
         
          </ul>
        </li> */}
      </ul>
    </div>
  );
}

export default ShopbtnMenu;
