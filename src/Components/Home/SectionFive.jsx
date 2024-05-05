import React from "react";
import { useNavigate } from "react-router-dom";

function SectionFive() {
  const handleNavigation = useNavigate(" ");
  return (
    <section className="text-center">
      <p className="text-6xl">SAVE ON POPULAR CATEGORIES</p>
      <div
        className="block sm:flex justify-center w-11/12 m-auto p-5 mt-8 cursor-pointer"
        onClick={() =>
          handleNavigation("/products?category=Home%20%26%20Garden")
        }
      >
        <div className="grid justify-center gap-2 sm:w-1/2 p-2">
          <img
            className="w-11/12"
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/040824-SKU.jpg"
            alt="i1"
          />
          <img
            className="w-11/12"
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/040824-bath.jpg"
            alt="i2"
          />
          <img
            className="w-11/12"
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/040824-SKU.jpg"
            alt="i3"
          />
        </div>
        <div>
          <img
            src="/Images/sears-section-img-3.png"
            alt="side img 1"
            className=" m-auto"
          />
        </div>
      </div>
      <p
        className="text-blue-500 cursor-pointer hover:underline"
        onClick={() =>
          handleNavigation("/products?category=Home%20%26%20Garden")
        }
      >
        see details
      </p>
    </section>
  );
}

export default SectionFive;
