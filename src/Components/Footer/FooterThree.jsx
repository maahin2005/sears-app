import React from "react";

function FooterThree() {
  return (
    <div className="p-5 text-center text-black">
      <p className="font-bold my-10">Visit our other sites</p>
      <div className="flex flex-wrap w-11/12 md:w-3/4 m-auto justify-evenly p-5 gap-5">
        <img
          src="https://www.sears.com/assets/images/s_footer_images/Kenmore.png"
          alt="1"
          className="p-3"
        />
        <img
          src="https://www.sears.com/assets/images/s_footer_images/Kmart.png"
          alt="2"
          className="p-3"
        />
        <img
          src="https://www.sears.com/assets/images/s_footer_images/Sears_PartsDirect.png"
          alt="3"
          className="p-3"
        />
        <img
          src="https://www.sears.com/assets/images/s_footer_images/Sears_HomeServices.png"
          alt="4"
          className="p-3"
        />
        <img
          src="https://www.sears.com/assets/images/s_footer_images/Sears_Puerto%20Rico.png"
          alt="5"
          className="p-3"
        />
      </div>
      <hr className="w-11/12 m-auto border-2" />
      <div className="md:flex justify-evenly p-2 md:p-5 items-center">
        <img
          src="https://www.sears.com/assets/images/s_footer_images/BBB_Accredited%20Business.png"
          alt="last"
          className="w-20 h-min m-auto md:m-0"
        />
        <p> 2024 Transform SR Brands LLC. All Rights Reserved</p>
        <div className="flex flex-wrap h-10 justify-center">
          <img
            src="https://www.sears.com/assets/images/s_footer_images/facebook-footer.png"
            alt="facebook"
            className="w-10 h-min"
          />
          <img
            src="https://www.sears.com/assets/images/s_footer_images/twitter-footer.png"
            alt="twiiter"
            className="w-10 h-min"
          />
          <img
            src="https://www.sears.com/assets/images/s_footer_images/youtube-footer.png"
            alt="yt"
            className="w-10 h-min"
          />
          <img
            src="https://www.sears.com/assets/images/s_footer_images/instagram-footer.png"
            alt="insta"
            className="w-10 h-min"
          />
        </div>
      </div>
    </div>
  );
}

export default FooterThree;
