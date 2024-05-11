import React from "react";

import Img1 from "../assets/Images/homePage/Ellipse 1.png";

export default function Blogs() {
  return (
    <div className="bg-[#FBE7A1]">
      <div className="container mx-auto">
        <div className="mx-3 lg:mx-20 xl:mx-0 py-10 lg:py-24 ">
          <div className="text-start ">
            <h3 className="text-2xl lg:text-4xl xl:text-6xl text-[#323031] font-semibold">
              Our customer’s kind words
            </h3>
            <p className=" my-5 lg:my-16 text-xs lg:text-lg text-[#474747] lg:ms-8 lg:me-72 text-center lg:text-start">
              Know what they say about our platform after they used it Know what they say about our
              platform after they u
            </p>
          </div>
          <div className="">
            <div className="bg-[#FCF0C6] flex flex-col justify-center items-center rounded-xl p-5 py-10 xl:py-20 px-32 xl:px-56">
              <img src={Img1} alt="" />
              <h5 className="mb-8 mt-3 text-2xl text-[#474747]">Mark Hamill</h5>
              <p className="text-xs lg:text-lg text-[#474747] text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
