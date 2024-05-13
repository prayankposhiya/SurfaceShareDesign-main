import React from "react";

import Img1 from "../assets/Images/homePage/Rectangle 1093.png";
import Img2 from "../assets/Images/homePage/Group 1.png";
import Img3 from "../assets/Images/homePage/Group 2.png";
import Img4 from "../assets/Images/homePage/Group 3.png";
import Img5 from "../assets/Images/homePage/Group 4.png";
import Img6 from "../assets/Images/homePage/Group 5.png";
import Img7 from "../assets/Images/homePage/Group 6.png";

export default function AboutUs() {
  return (
    <div className="relative hidden lg:block">
      <div className="container mx-auto">
        <div className="mx-20 xl:mx-0 my-20 relative z-10">
          <div className="text-start">
            <h3 className="text-4xl xl:text-6xl text-[#323031] font-semibold mt-16">
              Who are we ?
            </h3>
            <p className="my-10 text-lg xl:text-xl text-[#474747] ms-8 me-20 xl:me-72">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <a className="text-3xl text-[#E5B222] ms-8" href="javascript:void(0)">
              Learn more about us
            </a>
          </div>
          <div className="flex flex-row my-10">
            <div className="basis-1/2"></div>
            <div className="basis-1/2">
              <img className="w-full" src={Img1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <img className="absolute -top-[15%] -left-[4%] z-0" src={Img2} alt="" />
      <img className="absolute -top-[5%] left-[60%] z-0" src={Img3} alt="" />
      <img className="absolute top-[22%] right-[6%] z-0" src={Img4} alt="" />
      <img className="absolute top-[40%] left-[35%] z-0" src={Img5} alt="" />
      <img className="absolute top-[60%] left-[10%] z-0" src={Img6} alt="" />
      <img className="absolute top-[80%] left-[38%] z-0" src={Img7} alt="" />
    </div>
  );
}
