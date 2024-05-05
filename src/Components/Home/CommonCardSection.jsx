import { useNavigate } from "react-router-dom";

function CommonCardSection({ array, title, cols, isTrue = false }) {
  const handleNavigation = useNavigate(" ");

  const CircleCard = ({ img, title, link }) => {
    const handleOnClickNavigation = () => {
      if (isTrue) {
        handleNavigation(`products?category=${link}`);
      } else {
        handleNavigation("/");
      }
    };

    return (
      <>
        <div onClick={handleOnClickNavigation}>
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
      {cols === 8 ? (
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 m-auto gap-6 p-3 md:p-4 lg:p-10 cursor-pointer`}
        >
          {array.map((el, i) => (
            <CircleCard {...el} key={i} />
          ))}
        </div>
      ) : cols === 7 ? (
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 m-auto gap-6 p-3 md:p-4 lg:p-10 cursor-pointer`}
        >
          {array.map((el, i) => (
            <CircleCard {...el} key={i} />
          ))}
        </div>
      ) : cols === 6 ? (
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 m-auto gap-6 p-3 md:p-4 lg:p-10 cursor-pointer`}
        >
          {array.map((el, i) => (
            <CircleCard {...el} key={i} />
          ))}
        </div>
      ) : cols === 5 ? (
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 m-auto gap-6 p-3 md:p-4 lg:p-10 cursor-pointer`}
        >
          {array.map((el, i) => (
            <CircleCard {...el} key={i} />
          ))}
        </div>
      ) : (
        <div
          className={`grid grid-cols-2 m-auto gap-6 p-3 md:p-4 lg:p-10 cursor-pointer`}
        >
          {array.map((el, i) => (
            <CircleCard {...el} key={i} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CommonCardSection;
