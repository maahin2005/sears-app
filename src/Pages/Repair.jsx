import React from "react";

function Repair() {
  const params = new URLSearchParams(window.location.search);
  const product = params.get("product");
  return (
    <div
      className="flex w-screen justify-center h-[80vh] items-center"
      style={{
        backgroundImage:
          'url("https://www.sears.com/shs/assets/img/hero-home.jpeg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="p-10 bg-white h-max w-[40%] grid gap-5 text-left">
        <p className="text-4xl text-blue-900 font-bold">Schedule Today</p>
        <p>Authentic parts. Affordable service. Quality repairs.</p>
        <div className="flex w-11/12 gap-2">
          <div className="w-1/2">
            <p className="text-blue-900 font-semibold text-lg">Service</p>
            <button className="btn btn-outline rounded-sm border-slate-500 w-full">
              Repair
            </button>
          </div>
          <div className="w-1/2">
            <p className="text-blue-900 font-semibold text-lg">Product</p>
            <button className="btn w-full btn-outline  border-slate-500 rounded-sm ">
              {product}
            </button>
          </div>
        </div>
        <div className="flex w-11/12 gap-2">
          <div className="w-1/2">
            <button className="btn btn-outline rounded-sm border-blue-300 text-blue-400 tracking-wider w-full">
              Zipcode
            </button>
          </div>
          <div className="w-1/2">
            <button className="btn w-full btn-outline border-blue-300 text-blue-400 tracker-wider rounded-sm ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repair;
