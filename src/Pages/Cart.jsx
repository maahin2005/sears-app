import React, { useEffect, useState } from "react";
import LoadingIndecator from "../Components/LoadingIndecator";
import SingleCart from "../Components/SingleCart";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/Cart/actions";

function Cart() {
  const [total, setTotal] = useState(0);
  const handleNavigation = useNavigate("");
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loading);
  const data = useSelector((state) => state.cartData);

  useEffect(() => {
    dispatch(getCartItems);
  }, []);

  return (
    <div className="p-5">
      <div>
        <div className="bg-[#f8f8f8] p-10">
          <p className="font-bold">Your Cart</p>
        </div>
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

              <a
                href="#my_modal_8"
                className="btn bg-blue-600 hover:bg-blue-900 text-white rounded-none text-lg"
              >
                Process to Checkout
              </a>
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
                    <button>Proceed</button>
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
