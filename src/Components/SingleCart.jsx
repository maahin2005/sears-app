import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIndecator from "./LoadingIndecator";
import { getCartItems } from "../Redux/Cart/actions";
import { useDispatch } from "react-redux";

const SingleCart = ({ productId, setTotal }) => {
  const [productData, setProductData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  const [removeBtn, setRemoveBtn] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const dispatch = useDispatch();

  const handleRemoveCart = async (id) => {
    setRemoveBtn(true);

    const token = JSON.parse(localStorage.getItem("token"));

    if (!token) {
      console.error("Token Not Provided");
      return;
    }

    try {
      await axios.delete(
        `https://sears-backend.onrender.com/cart/remove/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setShowAlert(true);
      setRemoveBtn(false);
      setTimeout(() => {
        dispatch(getCartItems);
        setShowAlert(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setRemoveBtn(false);
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const getProducts = async (productId) => {
    const API_URL = `https://sears-backend.onrender.com/products/${productId}`;
    setIsLoading(true);
    try {
      setProductData({});
      const response = await axios.get(API_URL);

      setProductData(response.data.data);
      setTotal((prev) => prev + response.data.data.price);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(productData)?.length) {
      setIsLoading(false);
    }

    getProducts(productId);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="w-1/6 h-[50px]">
          <LoadingIndecator />
        </div>
      ) : (
        <div>
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
              <span>Product Removed from cart Successfully</span>
            </div>
          )}

          <div className="flex flex-wrap justify-around my-20 text-black">
            <div>
              <img
                src={productData?.images[0]}
                alt={productData?.title}
                className="w-[300px] h-[300px]"
              />
            </div>
            <div className="w-1/2 grid gap-5">
              <p className="text-3xl ">{productData?.title}</p>
              <p className="text-red-600 text-3xl font-semibold">
                ${productData?.price}
              </p>
              <p>
                Sold by <span className="font-bold">Sears</span>
              </p>
              <hr />
              <p className="text-lg ">{productData?.description}</p>
              <p>Gift options not available for this item.</p>
              {removeBtn ? (
                <LoadingIndecator />
              ) : (
                <button
                  className="btn btn-sm h-10 w-1/2 text-lg bg-blue-500 border-0 text-white"
                  onClick={() => handleRemoveCart(productData._id)}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default SingleCart;
