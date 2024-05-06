import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";

export default function SectionOne() {
  const handleNavigation = useNavigate();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#d1d5db" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#d1d5db" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="w-4/5 lg:w-11/12 m-auto mt-8 h-max text-center">
      <Slider {...settings}>
        <div>
          <img
            // className="w-11/12"
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/041124-desktop-instock.jpg"
            alt="img-1"
            className="cursor-pointer"
            onClick={() => handleNavigation("/products?category=appliances")}
          />
        </div>
        <div>
          <img
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/041124-desktop-arrivals.jpg"
            alt="img-2"
            className="cursor-pointer"
            onClick={() => handleNavigation("/products?category=tools")}
          />
        </div>
        <div>
          <img
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/011624-30off-appliances-desktop-hero.webp"
            alt="img-3"
            className="cursor-pointer"
            onClick={() => handleNavigation("/products?category=appliances")}
          />
        </div>
      </Slider>
      <p className="mt-10">
        <p
          className="text-blue-600 cursor-pointer hover:underline"
          onClick={() => handleNavigation("/products?category=appliances")}
        >
          see details
        </p>
      </p>
    </section>
  );
}
