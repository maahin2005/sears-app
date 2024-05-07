import React, { useEffect, useState } from "react";
import LoadingIndecator from "../Components/LoadingIndecator";
import SingleCart from "../Components/SingleCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/Cart/actions";
import axios from "axios";

function Cart() {
  const [total, setTotal] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const handleNavigation = useNavigate("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const data = useSelector((state) => state.cartData);

  const makeOrder = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      console.error("Token Not Provided");
      return;
    }
    try {
      await Promise.all(
        data.map(async (el) => {
          console.log("el : ", el, el._id);
          await axios.delete(
            `https://sears-backend.onrender.com/cart/remove/${el.productId}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
        })
      );

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error removing items:", error);
    }
  };

  useEffect(() => {
    dispatch(getCartItems);
  }, []);

  return (
    <div className="p-5">
      <div>
        <div className="bg-[#f8f8f8] p-10">
          <p className="font-bold">Your Cart</p>
        </div>
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
            <span>Order Successfully Completed</span>
          </div>
        )}
        {loading ? (
          <LoadingIndecator />
        ) : (
          <div>
            <div className="p-3 pl-0 flex justify-between flex-wrap">
              <button
                className="btn btn-outline rounded-none"
                onClick={() => handleNavigation("/")}
              >
                {" < "}Back to Shopping
              </button>

              {data.length ? (
                <a
                  href="#my_modal_8"
                  className="btn bg-blue-600 hover:bg-blue-900 text-white rounded-none text-lg"
                >
                  Process to Checkout
                </a>
              ) : null}

              <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Process ahead to checkout
                  </h3>
                  <p className="py-4">Estimated total: ${total.toFixed(2)}</p>
                  <div className="modal-action">
                    <a href="/" className="btn">
                      cancel
                    </a>
                    <a href="#" className="btn" onClick={makeOrder}>
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {data?.length ? (
                data?.map((el) => (
                  <SingleCart
                    key={el._id}
                    productId={el.productId}
                    setTotal={setTotal}
                  />
                ))
              ) : (
                <p className="text-center justify-center text-4xl text-black font-semibold h-[30vh] flex items-center">
                  Items Not Added to Cart yet
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
