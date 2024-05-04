import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataFromAPI } from "./../../Redux/Products/actions";
import { useNavigate } from "react-router-dom";

function ShopbtnMenu({ array, title, isTrue = false }) {
  const [isRotated, setIsRotated] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const handleNavigation = useNavigate();

  const handleMenuClick = (el) => {
    if (isTrue) {
      const category = el.toLowerCase();
      // dispatch(getDataFromAPI(category));
      handleNavigation(`/products?category=${category}`);
      setIsRotated(!isRotated);
    } else {
      alert("clicked!");
    }
  };

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsRotated(false);
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
          <li
            key={i}
            className="hover:bg-[#e3eefb]"
            onClick={() => handleMenuClick(el)}
          >
            <a className="hover:bg-[#e3eefb] ">{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopbtnMenu;
