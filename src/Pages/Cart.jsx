import React, { useEffect, useState } from "react";
import LoadingIndecator from "../Components/LoadingIndecator";
import SingleCart from "../Components/SingleCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/Cart/actions";
import axios from "axios";

function Cart() {
  const [showAlert, setShowAlert] = useState(false);
  const { firstName } = useSelector((state) => state.userData);

  const handleNavigation = useNavigate("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const data = useSelector((state) => state.cartData);
  const total = useSelector((state) => state.cartTotalData);

  const makeOrder = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      console.error("Token Not Provided");
      return;
    }
    try {
      await Promise.all(
        data.map(async (el) => {
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
                <div className="h-[900px] rounded-lg shadow-lg w-[700px] grid modal-box bg-white">
                  <div className="p-1 mx-auto">
                    {/* Heading */}
                    <h3 className="font-bold text-2xl text-gray-800 mb-3 text-center">
                      Proceed to Checkout
                    </h3>

                    {/* Thank You Message */}
                    <p className="text-gray-600 text-lg mb-2 text-center">
                      Thank you dear{" "}
                      <span className="text-black font-bold">{firstName}</span>{" "}
                      for shopping with us! We hope you love your purchase.
                    </p>

                    {/* Order Summary */}
                    <p className="text-gray-600 text-lg">
                      You have added a total of{" "}
                      <span className="font-medium">{data?.length || 0}</span>{" "}
                      products to your cart.
                    </p>
                    <p className="py-2 text-lg text-gray-700">
                      Your Estimated Total:{" "}
                      <span className="font-semibold text-green-600">
                        ${total}
                      </span>
                    </p>

                    {/* Payment Options */}
                    <div className="">
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Payment Method:
                      </h4>
                      <label className="inline-flex items-center text-gray-700 mb-2">
                        <input
                          type="radio"
                          name="payment"
                          value="COD"
                          className="form-radio text-blue-600"
                          defaultChecked
                        />
                        <span className="ml-2">Cash on Delivery (COD)</span>
                      </label>
                      <p className="text-sm text-gray-500 italic">
                        * For customer trust, we offer a Cash on Delivery (COD)
                        process for payments. We hope you will like it!.
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        * Online payment is currently unavailable to ensure a
                        secure and reliable shopping experience through COD.
                      </p>
                      <p className="text-sm text-gray-500 italic">
                        * Your trust is our priority; hence, we provide a COD
                        option to ensure a hassle-free and trustworthy
                        transaction.
                      </p>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="mt-3">
                      <h4 className="font-semibold text-lg text-gray-800 mb-2">
                        Terms and Conditions:
                      </h4>
                      <ul className="text-sm text-gray-600 list-disc list-inside">
                        <li>All orders are subject to availability.</li>
                        <li>
                          Returns are accepted within 7 days of delivery, terms
                          apply.
                        </li>
                        <li>
                          Cash on Delivery is available for orders under $500.
                        </li>
                        <li>Ensure to verify your items upon delivery.</li>
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="border-t mt-3 pt-3 flex justify-end space-x-4">
                      <a
                        href="/"
                        className="btn bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 transition"
                      >
                        Cancel
                      </a>
                      <button
                        className="btn bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        onClick={makeOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {data?.length ? (
                data?.map((el) => (
                  <SingleCart key={el._id} productId={el.productId} />
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
