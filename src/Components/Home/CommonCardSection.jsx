import React, { useEffect, useState } from "react";

function CommonCardSection({ array, title, cols }) {
  const [colums, setColums] = useState(cols);

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth < 768) {
        setColums(2); // Mobile screens
      } else if (window.innerWidth < 1068) {
        setColums(3); // Larger screens
      }
    };

    updateCols();

    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, [colums, cols]);

  const CircleCard = ({ img, title }) => {
    return (
      <>
        <div>
          <div className="md:h-52 h-max">
            <img src={img} alt={title} />
          </div>
          <p className="my-2 text-blue-600">
            <a>{title}</a>
          </p>
        </div>
      </>
    );
  };

  return (
    <section className="text-center p-10">
      <div>
        <p className="text-lg md:text-4xl my-5">{title}</p>
      </div>
      <div
        className={`grid grid-cols-${colums} m-auto gap-6 p-3 md:p-4 lg:p-10 cursor-pointer`}
      >
        {array.map((el, i) => (
          <CircleCard {...el} key={i} />
        ))}
      </div>
    </section>
  );
}

export default CommonCardSection;
