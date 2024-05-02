import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AccoundMenu() {
  const [isRotated, setIsRotated] = useState(false);
  const menuRef = useRef(null);
  const handleNavigation = useNavigate("");

  const ListArr = [
    { title: "Dashboard" },
    { title: "Orders" },
    { title: "Account" },
    { title: "Order Status" },
    { title: "Shop Your Way Points" },
  ];

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
    <div ref={menuRef} className="dropdown dropdown-hover">
      <div
        tabIndex={0}
        onClick={handleClick}
        className="m-1 cursor-pointer flex justify-center items-center gap-2 group"
      >
        <i class="fa-regular fa-circle-user"></i>{" "}
        <p>
          Sign-in <br /> Your Points
        </p>
        <i
          className={`fa-solid fa-angle-down transition-transform transform text-sm ${
            isRotated ? "rotate-180" : ""
          }`}
        ></i>
      </div>
      <ul
        tabIndex={0}
        className={`dropdown-content z-[1] menu p-2 shadow w-60 right-0.5 reltive top-20 bg-white text-black cursor-pointer ${
          isRotated ? "block" : "hidden"
        }`}
      >
        <li className="hover:bg-[#e3eefb] p-2">
          <button
            onClick={() => handleNavigation("/login")}
            className="flex justify-center bg-midNightBlue text-center text-white rounded-3xl hover:bg-midNightBlue"
          >
            Sign-in
          </button>
        </li>

        {ListArr.map((el, i) => (
          <li key={i} className="hover:bg-[#e3eefb]">
            <a className="hover:bg-[#e3eefb]">{el.title}</a>
          </li>
        ))}
        <li className="block bg-[#ddd] px-2 py-3 hover:bg-[#e3eefb]">
          <p>Not a member yet?</p>
          <p>
            Earn points,get exclusive coupons & save money with Shop Your Way!
          </p>
          <span>learn more</span>
          <button
            onClick={() => handleNavigation("/register")}
            className="border-2 border-midNightBlue rounded-3xl font-bold text-midNightBlue"
          >
            Join for Free
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AccoundMenu;
