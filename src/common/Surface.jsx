import React from "react";
import Img1 from "../assets/Images/homePage/Frame 12.png";

export default function Surface() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-wrap flex-row mb-28">
          <div className="basis-1/2 "></div>
          <div className="basis-1/2 ">
            <h3 className="text-6xl text-[#323031] font-semibold mt-16 text-start">
              What Surface Share can do to elevate your business
            </h3>
          </div>
          <div className="basis-1/2 ">
            <div className="flex justify-end items-end">
              {/* <div className=""> */}
              <img className="w-full" src={Img1} alt="" />
              {/* </div> */}
            </div>
          </div>
          <div className="basis-1/2">
            <div className="text-start ">
              <p className="my-10 text-xl text-[#474747 ms-10 me-56">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="my-10 text-xl text-[#474747] ms-10 me-56">
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
