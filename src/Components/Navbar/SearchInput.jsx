import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  const [cross, setCross] = useState(false);
  const debouncedInputValue = useDebounce(searchTerm, 500);
  const [data, setData] = useState([]);
  const handleNavigation = useNavigate(" ");

  const fetchingSearchedData = async () => {
    try {
      const response = await axios.get(
        `https://sears-backend.onrender.com/products?search=${searchTerm}`
      );
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchNavigation = (id) => {
    handleNavigation(`/products/${id}`);
    setIsTrue(false);
    setCross(true);
  };

  useEffect(() => {
    if (debouncedInputValue && searchTerm?.length) {
      fetchingSearchedData();
    }

    if (searchTerm === "") {
      setIsTrue(false);
    }
  }, [debouncedInputValue]);

  return (
    <div>
      <div className="bg-white w-full p-1 flex rounded-3xl items-center double-width">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setIsTrue(true);
            setCross(true);
          }}
          placeholder="Find something great"
          className="bg-white text-black w-full p-2 rounded-3xl outline-none"
        />
        {cross ? (
          <i
            class="fa-solid fa-xmark cursor-pointer fa-solid fa-magnifying-glass bg-[#41e0d0] p-2 rounded-full text-midNightBlue w-[30px] h-[30px]"
            onClick={() => {
              setSearchTerm("");
              setCross(false);
            }}
          ></i>
        ) : (
          <i
            className="cursor-pointer fa-solid fa-magnifying-glass bg-[#41e0d0] p-2 rounded-full text-midNightBlue w-1/7 h-1/6"
            onClick={() => {
              handleSearchNavigation(data[0]._id);
            }}
          ></i>
        )}
      </div>
      {/* {loading && <p>Loading...</p>} */}
      {data.length && isTrue ? (
        <ul className="z-10 absolute w-4/5 sm:w-[600px] lg:w-[600px] max-h-80 rounded-3xl ml-5 bg-white overflow-auto mt-2">
          {data?.length ? (
            data?.map((result) => (
              <li
                className="p-2 border flex justify-between text-black cursor-pointer hover:bg-slate-200"
                key={result._id}
                onClick={() => handleSearchNavigation(result._id)}
              >
                {result.title}
                <i className="cursor-pointer fa-solid fa-magnifying-glass bg-[#41e0d0] p-2 rounded-full text-midNightBlue w-1/7 h-1/6"></i>
              </li>
            ))
          ) : (
            <li>No Data Found</li>
          )}
        </ul>
      ) : (
        isTrue && (
          <li className="z-10 absolute w-[700px] max-h-80 rounded-3xl ml-5 text-black p-5 bg-white overflow-auto mt-2">
            No Data Found
          </li>
        )
      )}
    </div>
  );
}

export default SearchInput;
