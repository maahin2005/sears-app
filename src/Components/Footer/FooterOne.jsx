import React from "react";

function FooterOne() {
  const arr1 = [
    "Store Locator",
    "Order Status",
    "Returns & Exchanges",
    "Shipping & Delivery",
    "Product Recalls",
    "Sign Up for Emails & Texts",
    "Help & Contact Us",
  ];

  const arr2 = ["Access Your Account", "Check Your Rewards Points"];

  const arr3 = ["Sell on Sears", "About Marketplace"];

  const arr4 = [
    "Careers",
    "Corporate Site",
    "Military Support",
    "Sears Puerto Rico",
    "Shop Your Way",
    "Blog",
  ];

  return (
    <div className="py-10 bg-[#f9f9f9]">
      <div className=" hidden md:flex justify-around text-black">
        <ul className="grid gap-3 h-max">
          <li className="font-bold ">Customer Service</li>
          {arr1.map((el, i) => (
            <li
              key={i}
              className="font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
            >
              {el}
            </li>
          ))}
        </ul>
        <ul className="grid gap-3 h-max ">
          <li className="font-bold ">Your Account</li>
          {arr2.map((el, i) => (
            <li
              key={i}
              className="font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
            >
              {el}
            </li>
          ))}
        </ul>
        <ul className="grid gap-3 h-max ">
          <li className="font-bold ">Sears Marketplace</li>
          {arr3.map((el, i) => (
            <li
              key={i}
              className="font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
            >
              {el}
            </li>
          ))}
        </ul>
        <ul className="grid gap-3 h-max ">
          <li className="font-bold ">Get to Know Us</li>
          {arr4.map((el, i) => (
            <li
              key={i}
              className="font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
            >
              {el}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <div className="collapse collapse-arrow text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium collapse-open">
            Customer Service
          </div>
          <div className="collapse-content">
            {arr1.map((el, i) => (
              <p
                key={i}
                className="my-1 font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
              >
                {el}
              </p>
            ))}
          </div>
        </div>
        <div className="collapse collapse-arrow text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">Your Account</div>
          <div className="collapse-content">
            {arr2.map((el, i) => (
              <p
                key={i}
                className="my-1 font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
              >
                {el}
              </p>
            ))}
          </div>
        </div>
        <div className="collapse collapse-arrow text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Sears Marketplace
          </div>
          <div className="collapse-content">
            {arr3.map((el, i) => (
              <p
                key={i}
                className="my-1 font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
              >
                {el}
              </p>
            ))}
          </div>
        </div>
        <div className="collapse collapse-arrow text-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Get to Know Us
          </div>
          <div className="collapse-content">
            {arr4.map((el, i) => (
              <p
                key={i}
                className="my-1 font-light border-b-2 border-transparent hover:border-midiumBlue  transition origin-left w-max cursor-pointer"
              >
                {el}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterOne;
