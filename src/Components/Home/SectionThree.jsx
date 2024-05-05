import React from "react";
import { useNavigate } from "react-router-dom";

function SectionThree() {
  const handleNavigation = useNavigate(" ");
  return (
    <section>
      <img
        src="/Images/sears-sec-img-1.png"
        alt="section-ss"
        className="m-auto w-11/12 cursor-pointer"
        onClick={() => handleNavigation("/products?category=women")}
      />
    </section>
  );
}

export default SectionThree;
