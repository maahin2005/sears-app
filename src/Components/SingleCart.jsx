import axios from "axios";
import { useEffect, useState } from "react";
import LoadingIndecator from "./LoadingIndecator";

const SingleCart = ({ productId, setTotal }) => {
  const [productData, setProductData] = useState({});

  const [isLoading, setIsLoading] = useState(true);

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
        <LoadingIndecator />
      ) : (
        <div>
          <div className="flex flex-wrap justify-around my-20">
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
              <button className="btn btn-sm h-10 w-1/2 text-lg text-black">
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCart;
