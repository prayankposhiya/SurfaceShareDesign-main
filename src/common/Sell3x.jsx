import React from "react";

import Img1 from "../assets/Images/homePage/Rectangle 1181.png";

export default function Sell3x() {
  return (
    <div className="bg-[#263238]">
      <div className="container mx-auto">
        <div className="py-10">
          <h3 className="text-6xl text-white text-start font-semibold mt-16">Sell 3x more</h3>
          <p className="my-10 text-xl text-white text-start ms-8 me-72">
            Getting new customers can be a hassle. We are here to change that
          </p>
          <div className="flex justify-center">
            <img className="w-[900px]" src={Img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
