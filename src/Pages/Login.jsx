import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { loginUser } from "../Redux/User/Login/actions";
import LoadingIndecator from "../Components/LoadingIndecator";
import ErrorIndecator from "../Components/ErrorIndecator";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleNavigation = useNavigate("");
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.login);
  const { loading, error } = useSelector((state) => state.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
    setLoginData({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  if (auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-screen bg-[#648fa1] py-5">
      <div className="w-11/12 md:w-[60%] lg:w-[40%] h-11/12 m-auto bg-white p-10 grid gap-10">
        {error ? (
          <ErrorIndecator msg="Error while Login! try again later" />
        ) : null}
        {loading ? (
          <LoadingIndecator />
        ) : (
          <>
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
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div>
                <p>Email</p>
                <input
                  type="email"
                  className="py-1 border-2 w-full outline-cyan-400 bg-white text-black"
                  onChange={(e) =>
                    setLoginData((prevData) => ({
                      ...prevData,
                      email: e.target.value,
                    }))
                  }
                  required
                />
                <label className="flex items-center mt-1 gap-2 cursor-pointer">
                  <input type="checkbox" className="bg-white" />
                  <span className="text-xs text-[#6c757d]">
                    Keep Me Signed in
                  </span>
                </label>
              </div>
              <div>
                <p>Password</p>
                <input
                  type="password"
                  className="py-1 border-2 w-full outline-cyan-400 bg-white text-black"
                  onChange={(e) =>
                    setLoginData((prevData) => ({
                      ...prevData,
                      password: e.target.value,
                    }))
                  }
                  required
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
                <i className="fa-solid fa-circle-check text-3xl"></i>
                <p>Success</p>
              </div>
              <div>
                <button
                  onClick={() => handleNavigation("/")}
                  className="border-2 rounded-3xl p-2 w-40 text-midNightBlue font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="border-2 rounded-3xl p-2 w-40 bg-midiumBlue text-white ml-2"
                >
                  Sign In
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
