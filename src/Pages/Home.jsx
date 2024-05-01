import React from "react";
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

function Home() {
  return (
    <>
      <SectionOne />
      <CommonCardSection
        array={circleCardArr}
        title="SHOP BY CATEGORY"
        cols={8}
      />
      <SectionThree />
      <SectionFour />
      <CommonCardSection
        array={circleCardArr2}
        title="SHOP MORE CATEGORIES"
        cols={7}
      />
      <SectionFive />
      <CommonCardSection array={arr1} title="OUR APPLIANCE PROMISE" cols={5} />
      <SectionSix />
      <CommonCardSection array={arr2} title="SHOP OUR TOP BRANDS" cols={6} />
      <SectionSeven />
    </>
  );
}

export default Home;
