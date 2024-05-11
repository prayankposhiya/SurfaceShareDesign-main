import React from "react";

import Img1 from "../assets/Images/homePage/Apple Store.png";
import Img2 from "../assets/Images/homePage/Play Store.png";
import Img3 from "../assets/Images/homePage/share business transparent.png";

export default function Hero() {
  return (
    <div className={`lg:mb-48`}>
      <div className="bg-[#F9DD7B] xl:h-5/6">
        <div className="container h-full mx-auto">
          <div className="mx-3 lg:mx-20 xl:mx-0 flex flex-col justify-center items-center h-full ">
            <h2 className="text-3xl lg:text-6xl text-[#323031] font-semibold mt-16 text-center">
              Seek anywhere <br /> Share everywhere
            </h2>
            <p className="text-sm lg:text-md xl:text-xl xl:px-72  text-[#474747] text-center my-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="flex justify-center gap-2">
              <div className="">
                <img className="w-full h-auto" src={Img1} alt="" />
              </div>
              <div className="ms-3 lg:ms-20">
                <img className="w-full h-auto " src={Img2} alt="" />
              </div>
            </div>
            <img className="translate-y-8" src={Img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
