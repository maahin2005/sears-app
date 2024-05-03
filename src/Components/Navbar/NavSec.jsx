import React from "react";
import ShopbtnMenu from "./ShopbtnMenu";
import SearchInput from "./SearchInput";
import AccoundMenu from "./AccoundMenu";
import { repairsArr, shopMenuArr } from "../helpers/menuArrays";
import AcRegistred from "./AcRegistred";
import { useSelector } from "react-redux";

function NavSec() {
  const login = useSelector((state) => state.login);
  const auth = useSelector((state) => state.register);

  return (
    <nav className="md:flex p-5 bg-midiumBlue text-white justify-center lg:justify-around">
      <div className="flex gap-2 md:gap-6 items-center justify-around w-full">
        <div>
          <img
            src="https://www.sears.com/assets/images/logos/sears_logo.svg"
            alt="Logo-Sears"
          />
        </div>
        <ShopbtnMenu array={shopMenuArr} title="Shop" />
        <a className="lg:inline-block hidden text-sm">Deals</a>
        <ShopbtnMenu array={repairsArr} title="Repairs" />
        <div className="flex-grow w-80 md:w-[250px] lg:w-[500px] md:inline-block hidden">
          <SearchInput />
        </div>
        <a className="lg:inline-block hidden text-sm">My Orders</a>
        {login.token || auth.auth ? <AcRegistred /> : <AccoundMenu />}

        <div className="flex">
          <img
            src="https://www.sears.com/assets/images/icon/cart.svg"
            alt="cart"
          />
          <p className="relative flex justify-center items-center bottom-4 bg-[#41e0d0] w-[20px] h-[20px] rounded-full text-center text-midNightBlue font-semibold">
            0
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
