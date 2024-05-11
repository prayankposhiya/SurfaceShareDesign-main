import React from "react";

import Img1 from "../assets/Images/helpPage/Rectangle 1108.png";
import Button2 from "../common/Button2";
import { Link } from "react-router-dom";
import { AccordionBar } from "../common/accordion";

let btnQus = [
  "How to become a Sharer ?",
  "How to become a Supplier ?",
  "How to create a Surface ?",
  "How to find a good supplier ?",
  "How to promote a surface ?",
  "How to promote a surface ?",
];

export default function HelpPage() {
  return (
    <div className="helpHeaderImg">
      <div className="container mx-auto">
        <div className="mx-3 lg:mx-20 xl:mx-0 py-10 lg:pt-24 lg:pb-48 relative">
          <div className={`text-center `}>
            <h3 className="text-2xl lg:text-4xl xl:text-6xl text-[#323031] font-semibold mb-10">
              How can we help ?{" "}
            </h3>
            <form action="">
              <input
                type="search"
                className="block lg:inline-block lg:me-10 py-1 lg:py-3 rounded-lg lg:w-[30%] mx-auto lg:mx-0 mb-5 lg:mb-0"
              />
              <Button2
                isTrans={false}
                color={"bg-[#323031]"}
                text="Search"
                textSize={24}
                px="px-14"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mx-3 lg:mx-20 xl:mx-0 py-10 relative">
          <div className={`text-start `}>
            <h4 className="text-2xl lg:text-4xl text-[#323031] font-semibold text-center lg:text-start">
              Popular questions
            </h4>
            <div className="lg:grid grid-cols-3 gap-5 my-10">
              {btnQus.map((ntnName) => (
                <div className="">
                  <Link className="bg-[#FBE7A1] text-[#474747] py-2 ps-4 w-full inline-block rounded-md text-lg xl:text-xl mb-4 lg:mb-0">
                    {ntnName}
                  </Link>
                </div>
              ))}
            </div>

            <h4 className="text-2xl lg:text-4xl text-center lg:text-start text-[#323031] font-semibold">
              Articles
            </h4>
            <div className="lg:last:flex flex-row flex-wrap ">
              <div className="basis-4/12">
                <p className=" text-[16px] text-[#474747] my-5 lg:me-24 text-center lg:text-start">
                  This section contains answers to the most common questions about SurfaceShare
                </p>
                <ul>
                  <li className="text-xs lg:text-lg xl:text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Get Started
                  </li>
                  <li className="text-xs lg:text-lg xl:text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Seeker
                  </li>
                  <li className="text-xs lg:text-lg xl:text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Sharer
                  </li>
                  <li className="text-xs lg:text-lg xl:text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Supplier
                  </li>
                  <li className="text-xs lg:text-lg xl:text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Business Profile
                  </li>
                  <li className="text-xs lg:text-lg xl:text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    User Profile
                  </li>
                  <li className="text-xs lg:text-lg xl:text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Settings
                  </li>
                </ul>
              </div>
              <div className="basis-8/12">
                <AccordionBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
