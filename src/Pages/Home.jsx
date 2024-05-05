import React, { useEffect } from "react";
import SectionOne from "../Components/Home/SectionOne";
import CommonCardSection from "../Components/Home/CommonCardSection";
import SectionThree from "../Components/Home/SectionThree";
import SectionFour from "../Components/Home/SectionFour";
import {
  circleCardArr,
  circleCardArr2,
} from "../Components/helpers/circleCardArr";
import SectionFive from "../Components/Home/SectionFive";
import { arr1, arr2 } from "../Components/helpers/arrays";
import SectionSix from "../Components/Home/SectionSix";
import SectionSeven from "../Components/Home/SectionSeven";
import LastSection from "../Components/Home/LastSection";

function Home() {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <SectionOne />
      <CommonCardSection
        array={circleCardArr}
        title="SHOP BY CATEGORY"
        cols={8}
        isTrue={true}
      />
      <SectionThree />
      <SectionFour />
      <CommonCardSection
        array={circleCardArr2}
        title="SHOP MORE CATEGORIES"
        cols={7}
        isTrue={true}
      />
      <SectionFive />
      <CommonCardSection array={arr1} title="OUR APPLIANCE PROMISE" cols={5} />
      <SectionSix />
      <CommonCardSection
        array={arr2}
        title="SHOP OUR TOP BRANDS"
        cols={6}
        isTrue={true}
      />
      <div className="my-5 py-10 border-b-2 border-gray-400 w-11/12 m-auto">
        <SectionSeven />
      </div>
      <div className="my-10">
        <LastSection />
      </div>
      <hr />
    </>
  );
}

export default Home;
