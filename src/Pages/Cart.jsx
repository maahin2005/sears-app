import axios from "axios";
import React, { useEffect, useState } from "react";
import LoadingIndecator from "../Components/LoadingIndecator";
import SingleCart from "../Components/SingleCart";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const handleNavigation = useNavigate("");

  const getCartItems = async () => {
    const API_URL = "https://sears-backend.onrender.com/cart";

    try {
      const token = JSON.parse(localStorage.getItem("token"));
      if (!token) {
        console.error("Token not found");
        return;
      }

      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data.items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="p-5">
      <div>
        <div className="bg-[#f8f8f8] p-10">
          <p className="font-bold">Your Cart</p>
        </div>
        {isLoading ? (
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

              <a
                href="#my_modal_8"
                className="btn bg-blue-600 hover:bg-blue-900 text-white rounded-none text-lg"
              >
                Process to Checkout
              </a>
              <div className="modal" role="dialog" id="my_modal_8">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">Hello!</h3>
                  <p className="py-4">Estimated total: ${total}</p>
                  <div className="modal-action">
                    <a href="#" className="btn">
                      cancel
                    </a>
                    <button>Proceed</button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {data?.map((el) => (
                <SingleCart
                  key={el._id}
                  productId={el.productId}
                  setTotal={setTotal}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Cart;
