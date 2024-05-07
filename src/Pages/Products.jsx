import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingIndecator from "./../Components/LoadingIndecator";
import { getDataFromAPI } from "../Redux/Products/actions";
import { Link } from "react-router-dom";

function Products() {
  const { data } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.loading);
  const [priceFilter, setPriceFilter] = useState("all");
  const maxStartIndex = data?.length - 6;
  const randomStartIndex = Math.floor(Math.random() * (maxStartIndex + 1));
  const randomEndIndex = randomStartIndex + 6;
  const first5Products = data?.slice(randomStartIndex, randomEndIndex);

  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const dispatch = useDispatch();

  const FlexRow = ({ img, title, link }) => {
    return (
      <Link to={`/products/${link}`}>
        <div className="text-center border text-black p-2 border-gray-300 h-80 grid hover:border-blue-500 cursor-pointer">
          <img src={img} alt="lg" className="w-[200px] h-[200px]" />
          <p className="self-end my-2 line-clamp-1">
            {title.split(" ").splice(0, 3).join(" ")}
          </p>
        </div>
      </Link>
    );
  };

  const ProductCard = ({ price, title, img, desc, link }) => {
    return (
      <Link to={`/products/${link}`}>
        <div className="h-[700px] grid gap-5 my-5 text-black p-3 border hover:border-blue-500 cursor-pointer">
          <div>
            <img src={img} alt={title} className="w-[400px] h-[400px]" />
          </div>
          <div className="self-end grid gap-3">
            <p className="text-2xl font-semibold text-red-600">${price}</p>
            <p className="text-gray-700 font-semibold">
              {Math.floor(Math.random() * 100)}% In Savings
            </p>
            <p className="tracking-wide text-lg">{title}</p>
            <p className="text-sm line-clamp-2">{desc}</p>
          </div>
        </div>
      </Link>
    );
  };

  const priceFilteration = () => {
    if (priceFilter === "low") {
      return data.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "high") {
      return data.sort((a, b) => b.price - a.price);
    } else {
      return data;
    }
  };

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  useEffect(() => {
    dispatch(getDataFromAPI(category));
  }, [category]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="p-5 text-black">
      <div className="breadcrumbs text-lg text-blue-700">
        <ul>
          <li>
            <a href="/" className="underline hover:underline-offset-0">
              Home
            </a>
          </li>
          <li>{category}</li>
        </ul>
      </div>
      {loading ? (
        <LoadingIndecator />
      ) : (
        <div>
          <p className="my-5 text-black text-lg font-semibold">
            Shop French{" "}
            {data ? data[0]?.tags[Math.floor(Math.random() * 2)] : null}
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {first5Products?.map((el) => (
              <FlexRow
                key={el._id}
                img={el.images[0]}
                title={el.title}
                link={el._id}
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center items-center  gap-5 mt-5">
            <p className="my-5 text-black text-lg font-semibold">
              {data ? data[0].tags[Math.floor(Math.random() * 2)] : null}
              {" - "}
              {data?.length} results
            </p>
            <select
              onChange={handlePriceFilter}
              className="select select-bordered bg-transparent text-black w-full max-w-xs"
            >
              <option value={"all"}>Price</option>
              <option value={"low"}>Low to High</option>
              <option value={"high"}>High to Low</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 w-11/12 m-auto p-2 gap-2">
            {priceFilteration()?.map((el) => (
              <ProductCard
                key={el._id}
                price={el.price}
                title={el.title}
                img={el.images[0]}
                desc={el.description}
                link={el._id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
