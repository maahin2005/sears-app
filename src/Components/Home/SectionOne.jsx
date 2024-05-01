import Slider from "react-slick";

export default function SectionOne() {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "#d1d5db" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "#d1d5db" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="w-11/12 m-auto mt-8 h-max text-center">
      <Slider {...settings}>
        <div>
          <img
            // className="w-11/12"
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/041124-desktop-instock.jpg"
            alt="img-1"
          />
        </div>
        <div>
          <img
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/041124-desktop-arrivals.jpg"
            alt="img-2"
          />
        </div>
        <div>
          <img
            src="https://www.sears.com/staticpage/content/sears/shc/en/homepage/images/011624-30off-appliances-desktop-hero.webp"
            alt="img-3"
          />
        </div>
      </Slider>
      <p className="mt-10">
        <a className="text-blue-600">see details</a>
      </p>
    </section>
  );
}
