import React from "react";

import Img1 from "../assets/Images/homePage/Apple Store.png";
import Img2 from "../assets/Images/homePage/Play Store.png";
import Img3 from "../assets/Images/aboutPage/17677318_5864080-ai 1.png";
import Img4 from "../assets/Images/aboutPage/Rectangle 1106.png";
import Img5 from "../assets/Images/aboutPage/Logo.png";
import Button1 from "../common/Button1";
import Button2 from "../common/Button2";

export default function SurfacePage() {
  return (
    <div className="bg-[#FCF0C6]">
      <div className="container mx-auto">
        <div className="px-3 lg:px-20 py-5 lg:py-10">
          <div className="text-start mt-14 ">
            <span className="text-3xl lg:text-6xl text-[#323031]">Download Surface Share now</span>
            <p className="my-5 text-sm lg:text-md xl:text-xl text-[#474747] font-bold lg:ms-8 lg:me-12">
              Use Surface Share across your devices
            </p>
            <p className=" text-sm lg:text-md xl:text-[16px] text-[#474747] lg:ms-8 lg:me-12">
              By installing WhatsApp, you agree to our Terms & Privacy Policy.
            </p>

            <div className="flex flex-col justify-center items-center my-10">
              <div className="flex justify-center gap-2">
                <div className="">
                  <img className="w-full h-auto" src={Img1} alt="" />
                </div>
                <div className="ms-3 lg:ms-20">
                  <img className="w-full h-auto " src={Img2} alt="" />
                </div>
              </div>
              <div className="relative">
                <img className="relative z-10" src={Img3} alt="" />
                {/* <img className="absolute top-[60px] left-[115px] z-0" src={Img4} alt="" />
                <img className="absolute top-[38%] left-[35%] z-1" src={Img5} alt="" />
                <div className="absolute top-[48%] left-[34%] z-1">
                  <Button2
                    isTrans={false}
                    color={"bg-[#323031]"}
                    text="Download Now"
                    textSize={12}
                    px="px-4"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
