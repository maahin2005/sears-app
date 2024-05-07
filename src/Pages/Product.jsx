import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingIndecator from "../Components/LoadingIndecator";

function Product() {
  const [isLoading, setIsLoading] = useState(false);
  const [btnState, setBtnState] = useState(false);
  const handleNavigatation = useNavigate("");
  const [showAlert, setShowAlert] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const API_URL = `https://sears-backend.onrender.com/products/${id}`;

  const singleData = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get(API_URL);

      setData(resp.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = async () => {
    setBtnState(true);
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      if (!token) {
        handleNavigatation("/login");
        return;
      }

      await axios.post(
        `https://sears-backend.onrender.com/cart/add/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setShowAlert(true);
      setBtnState(false);
      setTimeout(() => {
        setShowAlert(false);
        handleNavigatation("/cart");
      }, 1200);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
    singleData();
  }, [id]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div>
      <div className="breadcrumbs text-lg text-blue-700 p-10">
        <ul>
          <li>
            <a href="/" className="underline hover:underline-offset-0">
              Home
            </a>
          </li>
          <li>
            <a
              href={`/products?category=${data?.category.replace(
                " & ",
                "%20%26%20"
              )}`}
              className="underline hover:underline-offset-0"
            >
              {data?.category}
            </a>
          </li>
          <li>{data?.title}</li>
        </ul>
      </div>
      {isLoading ? (
        <LoadingIndecator />
      ) : (
        <div className="block lg:flex flex-wrap justify-evenly p-5">
          {showAlert && (
            <div
              className={`alert w-1/2 m-auto alert-success fixed top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-4 py-3 rounded shadow-lg z-50 transition duration-500`}
              role="alert"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Product Added to cart Successfully</span>
            </div>
          )}
          {data && data.images && (
            <img
              className="w-1/2 m-auto lg:w-[30%]"
              alt={data?.title}
              src={data?.images[0]}
            />
          )}

          <div className="mt-20 text-black grid gap-5 w-11/12 m-auto lg:w-1/3">
            <p>{data?.category}</p>
            <p className="text-3xl ">{data?.title}</p>
            <p>
              Sold by <span className="font-bold">Sears</span>
            </p>
            <div className="flex items-center gap-2 bg-blue-100 p-2">
              <img
                src="https://www.sears.com/content/configs/citi/images/sears/SYW-Mastercard-2024.webp"
                alt=""
                className="w-[80px] h-[60px]"
              />
              <p className="font-semibold">
                Apply for the Shop Your Way Mastercard®** Today! Get up to $225*
                in statement credits with eligible purchases. Apply in Checkout
              </p>
            </div>
            <hr />
            <p className="font-bold text-2xl">See Price in Cart</p>
            <p className="text-red-600 text-3xl font-semibold">
              ${data?.price}
            </p>
            <hr />
            <p className="text-2xl">{data?.description}</p>
            <p>or 4 payments on orders over $2 with</p>
            <hr />
            <p>Get CASHBACK in points </p>
            <hr />
            <p className="text-sm">
              As low as $100.85/week with Katapult lease to own
            </p>
            <p className="text-sm">
              Minimum order total of $199 required. Katapult is not available in
              GU, MN, PR, NJ, VI, WI, WY{" "}
            </p>
            <hr />
            <p>
              Using{" "}
              <span className="text-blue-500 hover:underline">
                New York, NY 10101{" "}
              </span>{" "}
              for pricing and availability
            </p>
            <hr />
            {btnState ? (
              <LoadingIndecator />
            ) : (
              <button
                onClick={handleAddToCart}
                className="hover:bg-black btn text-white font-semibold text-lg transition-all bg-blue-600 border-0"
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
