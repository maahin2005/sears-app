import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT_L } from "../../Redux/User/Login/actionTypes";
import { LOGOUT_R } from "../../Redux/User/Register/actionTypes";

function AcRegistred() {
  const [isRotated, setIsRotated] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();

  const { firstName } = useSelector((state) => state.userData);

  const ListArr = [
    { title: "Your Dashboard" },
    { title: "Your Orders" },
    { title: "Your Account" },
    { title: "Your Shop Your Way Points" },
  ];

  const handleClick = () => {
    setIsRotated(!isRotated);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsRotated(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    dispatch({ type: LOGOUT_L });
    dispatch({ type: LOGOUT_R });
    // window.location.reload();
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
        className="m-1 cursor-pointer flex justify-center items-center gap-2 group text-xs font-medium"
      >
        <i className="fa-regular fa-circle-user"></i>{" "}
        <p>
          Hi {firstName} <br />
          Your Account
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
        <li className="block bg-[#6fa9ffca] text-white px-2 py-3 hover:bg-[#6fa9ffb3]">
          <div className="text-md flex justify-between">
            <p>Your Points {">"} </p>
            <p className="text-md font-semibold">
              $0.00 <br /> in points
            </p>
          </div>
          <p>Start shopping to earn CASHBACK in points on every purchase.</p>
          <span className="text-midNightBlue underline hover:no-underline font-semibold">
            Learn More
          </span>
        </li>

        {ListArr.map((el, i) => (
          <li key={i} className="hover:bg-[#e3eefb]">
            <a className="hover:bg-[#e3eefb]">{el.title}</a>
          </li>
        ))}
        <li className="hover:bg-[#e3eefb] p-2">
          <button
            onClick={handleLogout}
            className="flex justify-center bg-midNightBlue text-center text-white rounded-3xl hover:bg-midNightBlue"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AcRegistred;
