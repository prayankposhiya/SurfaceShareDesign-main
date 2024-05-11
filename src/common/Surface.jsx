import React from "react";
import Img1 from "../assets/Images/homePage/Frame 12.png";

export default function Surface() {
  return (
    <div className="bg-[#263238] lg:bg-white">
      <div className="container mx-auto">
        <div className="mx-3 lg:mx-20 xl:mx-0 flex flex-wrap flex-row lg:mb-28 pb-12 lg:pb-0">
          <div className="basis-1/2 hidden lg:block order-1"></div>
          <div className="lg:basis-1/2 order-2">
            <h3 className="text-2xl lg:text-4xl xl:text-6xl text-white lg:text-[#323031] font-semibold mt-32 lg:mt-16 text-start">
              What Surface Share can do to elevate your business
            </h3>
          </div>
          <div className="lg:basis-1/2 order-4 lg:order-3">
            <div className="flex justify-end items-end h-full">
              <img className="w-full" src={Img1} alt="" />
            </div>
          </div>
          <div className="lg:basis-1/2 order-3 lg:order-4">
            <div className="text-start lg:ms-10 me-0 xl:me-56">
              <p className="my-10 text-xs lg:text-md xl:text-xl text-white lg:text-[#474747] ">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="my-10 text-xs lg:text-md xl:text-xl text-white lg:text-[#474747] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
