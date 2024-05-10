import React from "react";

import Img1 from "../assets/Images/homePage/Apple Store.png";
import Img2 from "../assets/Images/homePage/Play Store.png";
import Img3 from "../assets/Images/homePage/share business transparent.png";

export default function Hero() {
  return (
    <div className={` h-screen`}>
      <div className="bg-[#F9DD7B] h-5/6">
        <div className="container h-full mx-auto">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-6xl text-[#323031] font-semibold mt-16">
              Seek anywhere <br /> Share everywhere
            </h2>
            <p className="my-10 text-xl text-[#474747] text-center px-72">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="flex justify-center">
              <img src={Img1} alt="" />
              <img className="ms-20" src={Img2} alt="" />
            </div>
            <img className="translate-y-8" src={Img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
