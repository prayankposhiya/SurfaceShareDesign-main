import React from "react";

import Img1 from "../assets/Images/homePage/Ellipse 1.png";

export default function Blogs() {
  return (
    <div className="bg-[#FBE7A1]">
      <div className="container mx-auto">
        <div className="py-24">
          <div className="text-start ">
            <h3 className="text-6xl text-[#323031] font-semibold">Our customer’s kind words</h3>
            <p className="my-16 text-xl text-[#474747] ms-8 me-72">
              Know what they say about our platform after they used it
            </p>
          </div>
          <div className="">
            <div className="bg-[#FCF0C6] flex flex-col justify-center items-center rounded-xl py-20 px-56">
              <img src={Img1} alt="" />
              <h5 className="mb-8 mt-3 text-2xl text-[#474747]">Mark Hamill</h5>
              <p className="text-xl text-[#474747] ">
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
