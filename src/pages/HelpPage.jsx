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
        <div className="pt-24 pb-48 relative">
          <div className={`text-center `}>
            <h3 className="text-6xl text-[#323031] font-semibold mb-10">How can we help ? </h3>
            <form action="">
              <input type="search" className="me-10 py-3 rounded-lg w-[30%]" />
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
        <div className="py-10 relative">
          <div className={`text-start `}>
            <h4 className="text-4xl text-[#323031] font-semibold">Popular questions</h4>
            <div className="grid grid-cols-3 gap-5 my-10">
              {btnQus.map((ntnName) => (
                <div className="">
                  <Link className="bg-[#FBE7A1] text-[#474747] py-2 ps-4 w-full inline-block rounded-md text-xl">
                    {ntnName}
                  </Link>
                </div>
              ))}
            </div>

            <h4 className="text-4xl text-[#323031] font-semibold">Articles</h4>
            <div className="flex flex-row flex-wrap">
              <div className="basis-4/12">
                <p className=" text-[16px] text-[#474747] my-5 me-24">
                  This section contains answers to the most common questions about SurfaceShare
                </p>
                <ul>
                  <li className="text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Get Started
                  </li>
                  <li className="text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Seeker
                  </li>
                  <li className="text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Sharer
                  </li>
                  <li className="text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Supplier
                  </li>
                  <li className="text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    Business Profile
                  </li>
                  <li className="text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
                    User Profile
                  </li>
                  <li className="text-xl text-[#323031] font-semibold py-2 ps-2 hover:bg-[#f0f0f0] cursor-pointer">
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
