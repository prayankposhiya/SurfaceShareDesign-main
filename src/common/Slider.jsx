"use client";
import React from "react";
import { Carousel } from "flowbite-react";

import Img1 from "../assets/Images/homePage/Ellipse 1.png";

export default function Slider() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel onSlideChange={(index) => console.log("onSlideChange()", index)}>
        {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"> */}
        <div className="bg-[#FCF0C6] flex flex-col justify-center items-center rounded-xl py-10 xl:py-20 px-5 lg:px-32 xl:px-56">
          <img src={Img1} alt="" />
          <h5 className="mb-8 mt-3 text-3xl font-bold text-[#474747]">Mark Hamill</h5>
          <p className="text-sm lg:text-lg xl:text-xl text-[#474747] text-center">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
        {/* </div> */}
        <div className="bg-[#FCF0C6] flex flex-col justify-center items-center rounded-xl py-10 xl:py-20 px-5 lg:px-32 xl:px-56">
          <img src={Img1} alt="" />
          <h5 className="mb-8 mt-3 text-3xl font-bold text-[#474747]">Mark Hamill</h5>
          <p className="text-sm lg:text-lg xl:text-xl text-[#474747] text-center">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
        <div className="bg-[#FCF0C6] flex flex-col justify-center items-center rounded-xl py-10 xl:py-20 px-5 lg:px-32 xl:px-56">
          <img src={Img1} alt="" />
          <h5 className="mb-8 mt-3 text-3xl font-bold text-[#474747]">Mark Hamill</h5>
          <p className="text-sm lg:text-lg xl:text-xl text-[#474747] text-center">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.”
          </p>
        </div>
      </Carousel>
    </div>
  );
}
