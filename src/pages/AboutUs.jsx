import React from "react";

import Img1 from "../assets/Images/aboutPage/Rectangle 10931.png";

export default function AboutUs() {
  return (
    <div className="bg-[#ffffff]">
      <div className="container mx-auto">
        <div className="px-3 lg:px-20 py-10">
          <div className="text-start mt-14 ">
            <span className="text-4xl xl:text-6xl text-[#323031]">About us</span>

            <p className="text-sm lg:text-lg xl:text-[16px] text-[#474747] ms-5 lg:ms-8 lg:me-12 my-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <div className="lg:flex flex-row">
              <div className="basis-7/12 lg:order-2 py-5 lg:py-0">
                <img className="w-full" src={Img1} alt="" />
              </div>

              <div className="basis-5/12 lg:order-1">
                <p className="text-sm lg:text-lg xl:text-[16px] text-[#474747] ms-5 lg:ms-8 lg:me-12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
