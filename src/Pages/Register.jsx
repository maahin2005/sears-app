import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const handleNavigation = useNavigate("");

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="w-screen bg-[#648fa1] py-1">
      <div className="w-11/12 md:w-[60%] lg:w-[40%] h-11/12 m-auto bg-white p-10 grid gap-3">
        <div className="border-b-4 pb-2">
          <img
            className="w-[30%]"
            src="https://id.shld.net/resources/h4s27/login/sears/img/sears_TM_logo.png"
            alt="Logo-Sears"
          />
        </div>
        <div>
          <p className="text-2xl font-bold">Member Always Get More</p>
          <p
            onClick={() => handleNavigation("/login")}
            className="text-blue-500 font-light hover:underline cursor-pointer tracking-wide"
          >
            Sign in to your existing profile
          </p>
        </div>
        <div className="block md:flex gap-5 mt-5 text-center md:text-start">
          <div className="w-[70%] m-auto  md:m-0  md:w-[40%] p-2 border-4 h-max">
            <p className="text-lg font-semibold">
              Join for <span className="text-blue-600">FREE</span>{" "}
            </p>
            <ul className="text-xs list-disc grid gap-2 mt-2 p-2">
              Start Getting CASHBACK in Points. It's easy! You get
              <li className="relative left-5">
                1% CASHBACK in points for every dollar you spend
              </li>
              <li className="relative left-5">
                FREECASH in points (just because we like you)
              </li>
              <li className="relative left-5">
                Bonus points, exclusive <br /> coupons & more
              </li>
            </ul>
            <div>
              <p className="text-xs text-center mt-3">
                You can also use your <br /> membership at:
              </p>
              <p className="text-lg text-center font-bold text-slate-400 tracking-wider">
                kmart
              </p>
            </div>
            <p className="text-xs text-center mt-5 text-slate-500">
              *On qualifying purchases. See terms and conditions.
            </p>
          </div>
          <div className="w-[70%] m-auto md:m-0 md:w-[40%] order-first md:order-2">
            <form className="grid gap-3 md:m-0 m-auto text-start">
              <p className="text-sm">Email*</p>
              <input
                type="email"
                className="py-1 border-2 outline-cyan-400 bg-white text-black"
              />

              <p className="text-sm">Password*</p>
              <input
                type="password"
                className="py-1 border-2 outline-cyan-400 bg-white text-black"
              />
              <label className="flex items-center mt-1 gap-2 cursor-pointer">
                <input type="checkbox" className="bg-white" />
                <span className="text-xs text-[#6c757d]">Show Password</span>
              </label>
              <p className="text-sm">Confirm Password*</p>
              <input
                type="Password"
                className="py-1 border-2  outline-cyan-400 bg-white text-black"
              />
              <p className="text-sm">First Name*</p>
              <input
                type="text"
                className="py-1 border-2  outline-cyan-400 bg-white text-black"
              />
              <p className="text-sm">Last Name*</p>
              <input
                type="text"
                className="py-1 border-2  outline-cyan-400 bg-white text-black"
              />
              <p className="text-sm">Zip Code*</p>
              <input
                type="text"
                className="py-1 border-2  outline-cyan-400 bg-white text-black"
              />
              <p className="text-sm">* - required field</p>
              <p className="text-sm tracking-wider mt-2 w-5/6">
                By signing in, I agree to the{" "}
                <span className=" text-blue-700 hover:underline cursor-pointer">
                  Shop Your Way℠ Program Terms
                </span>
                , and the Sears.com{" "}
                <span className=" text-blue-700 hover:underline cursor-pointer">
                  Terms of Use
                </span>{" "}
                and{" "}
                <span className=" text-blue-700 hover:underline cursor-pointer">
                  Privacy Policy
                </span>
                .
              </p>
              <div className="flex gap-1 ">
                <button
                  onClick={() => handleNavigation("/")}
                  className="border-2 rounded-3xl p-2 w-36 text-midNightBlue font-semibold"
                >
                  Cancel
                </button>
                <button className="border-2 rounded-3xl p-2 w-36 bg-midiumBlue text-white ml-2">
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
