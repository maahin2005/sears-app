import React from "react";
import { useNavigate } from "react-router-dom";

function SectionFour() {
  const handleNavigation = useNavigate(" ");
  return (
    <section className="text-center mt-20 mb-10">
      <p className="text-6xl">WORK IN SOME SAVINGS</p>
      <div className="my-5">
        <img
          src="/Images/section-img-2.png"
          className="m-auto cursor-pointer"
          onClick={() => handleNavigation("/products?category=tools")}
        />
      </div>
      <p
        className="text-blue-500 cursor-pointer hover:underline"
        onClick={() => handleNavigation("/products?category=tools")}
      >
        see details
      </p>
    </section>
  );
}

export default SectionFour;
