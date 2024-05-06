import React, { useEffect } from "react";
import ShopbtnMenu from "./ShopbtnMenu";
import SearchInput from "./SearchInput";
import AccoundMenu from "./AccoundMenu";
import { repairsArr, shopMenuArr } from "../helpers/menuArrays";
import AcRegistred from "./AcRegistred";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DATA_REMOVING } from "../../Redux/Products/actionTypes";
import { getUserData } from "../../Redux/User/data/actions";
import { getCartItems } from "../../Redux/Cart/actions";

function NavSec() {
  const login = useSelector((state) => state.login);
  const auth = useSelector((state) => state.register);
  const handleNavigation = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cartData);

  const handleClick = () => {
    handleNavigation("/");
    dispatch({ type: DATA_REMOVING });
  };

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    dispatch(getUserData(email));
    if (login.auth || auth.auth) {
      dispatch(getCartItems);
    }
  }, []);

  return (
    <nav className="md:flex p-5 bg-midiumBlue text-white justify-center lg:justify-around">
      <div className="flex gap-2 md:gap-6 items-center justify-around w-full">
        <div onClick={handleClick} className="cursor-pointer">
          <img
            src="https://www.sears.com/assets/images/logos/sears_logo.svg"
            alt="Logo-Sears"
            loading="eager"
            decoding="async"
            fetchpriority="high"
          />
        </div>
        <ShopbtnMenu array={shopMenuArr} title="Shop" isTrue={true} />
        <p
          className="lg:inline-block hidden text-sm cursor-pointer"
          onClick={() => handleNavigation("/products?category=appliances")}
        >
          Deals
        </p>
        <ShopbtnMenu array={repairsArr} title="Repairs" />
        <div className="flex-grow w-80 md:w-[250px] lg:w-[500px] md:inline-block hidden">
          <SearchInput />
        </div>
        <p className="lg:inline-block hidden text-sm">My Orders</p>
        {login.auth || auth.auth ? <AcRegistred /> : <AccoundMenu />}

        <div
          className="flex cursor-pointer"
          onClick={() => handleNavigation("/cart")}
        >
          <img
            src="https://www.sears.com/assets/images/icon/cart.svg"
            alt="cart"
          />
          <p className="relative flex justify-center items-center bottom-4 bg-[#41e0d0] w-[20px] h-[20px] rounded-full text-center text-midNightBlue font-semibold">
            {(Array.isArray(data) && login.auth) || auth.auth ? data.length : 0}
          </p>
        </div>
      </div>
      <div className="w-full md:hidden">
        <SearchInput />
      </div>
    </nav>
  );
}

export default NavSec;
