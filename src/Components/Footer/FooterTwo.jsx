import React from "react";

function FooterTwo() {
  return (
    <div className="p-20 bg-[#dbdde0] text-black">
      <div className=" flex-wrap flex justify-around text-black pb-5 border-b-2 border-zinc-400">
        <div className="flex gap-2">
          <img
            src="https://www.sears.com/content/configs/citi/images/sears/2024-syw-mastercard-90x60-qm-2-amp-fmt-eq-png-alpha.webp"
            alt="f2"
          />
          <p>
            Get the Shop Your Way Mastercard®{" "}
            <span className="text-blue-600 font-semibold">Apply Now</span>
          </p>
        </div>
        <p>View Credit Card Offers</p>
        <p>Manage Your Account</p>
        <p>Pay Your Bill</p>
      </div>
      <div className="11/12 md:w-3/4 p-2 md:p-5 text-center m-auto text-sm">
        <div className="flex flex-wrap justify-around">
          <p>Price Match Policy</p>
          <p> Accessibility </p>
          <p> Terms of Service </p>
          <p> Refund Policy </p>
          <p> Corporate Website </p>
          <p> Privacy Policy </p>
          <p>Product Recalls</p>
        </div>
        <div>
          <div className="flex  justify-evenly">
            <p> Payment Methods </p>
            <p> California Privacy Rights </p>
            <p> California Transparency Act </p>
            <p> California Cleaning Products Right to Know Act </p>
          </div>
        </div>
        <p>Do not Sell or Share My Personal Information</p>
      </div>
    </div>
  );
}

export default FooterTwo;
