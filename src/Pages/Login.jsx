import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const handleNavigation = useNavigate("");

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="w-screen bg-[#648fa1] py-5">
      <div className="w-11/12 md:w-[60%] lg:w-[40%] h-11/12 m-auto bg-white p-10 grid gap-7">
        <div className="border-b-2 pb-2">
          <img
            className="w-[30%]"
            src="https://id.shld.net/resources/h4s27/login/sears/img/sears_TM_logo.png"
            alt="Logo-Sears"
          />
        </div>
        <div>
          <p className="text-2xl font-bold">Member Sign In</p>
          <p className="text-xl font-bold mt-2">
            New member?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => handleNavigation("/register")}
            >
              Join for free
            </span>
          </p>
        </div>
        <div>
          <p>Email</p>
          <input
            type="email"
            className="py-1 border-2 w-full outline-cyan-400 bg-white text-black"
          />
          <label className="flex items-center mt-1 gap-2 cursor-pointer">
            <input type="checkbox" className="bg-white" />
            <span className="text-xs text-[#6c757d]">Keep Me Signed in</span>
          </label>
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            className="py-1 border-2 w-full outline-cyan-400 bg-white text-black"
          />
        </div>
        <p className="text-xs text-blue-700 hover:underline cursor-pointer">
          Forgot your Password?
        </p>
        <p className="text-xs tracking-wider">
          By signing in, I agree to the
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
        <div className="w-1/2 h-16 bg-[#fafafa] border-2 flex p-3 gap-2 items-center text-lg">
          <i class="fa-solid fa-circle-check text-3xl"></i>
          <p>Success</p>
        </div>
        <div>
          <button
            onClick={() => handleNavigation("/")}
            className="border-2 rounded-3xl p-2 w-40 text-midNightBlue font-semibold"
          >
            Cancel
          </button>
          <button className="border-2 rounded-3xl p-2 w-40 bg-midiumBlue text-white ml-2">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
