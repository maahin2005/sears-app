import React from "react";

function SectionFive() {
  return (
    <section className="text-center">
      <p className="text-6xl">SAVE ON POPULAR CATEGORIES</p>
      <div className="block sm:flex justify-center w-11/12 m-auto p-5 mt-8">
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
      <a className="text-blue-500">see details</a>
    </section>
  );
}

export default SectionFive;
