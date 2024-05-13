import React from "react";

import Img1 from "../assets/Images/featuresPage/Ellipse 9.png";
import Img2 from "../assets/Images/featuresPage/Ellipse 10.png";
import Img3 from "../assets/Images/featuresPage/Ellipse 11.png";
import Img4 from "../assets/Images/featuresPage/Ellipse 12.svg";

export default function Features() {
  return (
    <div className="bg-[#f9dd7b] overflow-hidden">
      <div className="container mx-auto">
        <div className="mx-3 lg:mx-20 xl:mx-0 py-10 lg:pt-24 lg:pb-48 relative">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl xl:text-6xl text-[#323031] font-semibold">
              Choose your plan{" "}
            </h3>
            <p className="my-8 lg:my-16 text-sm lg:text-lg xl:text-xl text-[#474747]">
              Start now with the free plan. Upgrade to Pro or Pro+ with one month fee and cancel at
              any time
            </p>
          </div>
          <div className="text-start">
            <div className="lg:flex flex-row">
              <div className="basis-1/3 z-10">
                <div className="px-3 lg:px-5 xl:px-10 mb-8 lg:mb-0">
                  <div className="cardFeatures bg-[#fff] rounded-2xl overflow-hidden">
                    <div className="cardFeaturesInner bg-[#EBEBEB] py-4 ps-5">
                      <span className="text-[#7B7B7B] text-3xl font-bold">Basic</span>
                    </div>
                    <ul className="text-[#474747] ps-5 flex flex-col gap-2 py-3">
                      <li className="text-lg font-semibold ">free</li>
                      <li>Feature 1</li>
                      <li>Feature 2</li>
                      <li>Feature 3</li>
                      <li>Feature 4</li>
                      <li className="text-[#D2D2D2] line-through">Feature 5</li>
                      <li className="text-[#D2D2D2] line-through">Feature 6</li>
                      <li className="text-[#D2D2D2] line-through">Feature 7</li>
                      <li className="text-[#D2D2D2] line-through">Feature 8</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 z-10">
                <div className="px-3 lg:px-5 xl:px-10 mb-8 lg:mb-0">
                  <div className="cardFeatures bg-[#fff] rounded-2xl overflow-hidden">
                    <div className="cardFeaturesInner bg-[#D2E9F5] py-4 ps-5">
                      <span className="text-[#7B7B7B] text-3xl font-bold">Pro</span>
                    </div>
                    <ul className="text-[#474747] ps-5 flex flex-col gap-2 py-3">
                      <li className="text-lg font-semibold ">$15/Month</li>
                      <li>Feature 1</li>
                      <li>Feature 2</li>
                      <li>Feature 3</li>
                      <li>Feature 4</li>
                      <li>Feature 5</li>
                      <li>Feature 6</li>
                      <li className="text-[#D2D2D2] line-through">Feature 7</li>
                      <li className="text-[#D2D2D2] line-through">Feature 8</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="basis-1/3 z-10">
                <div className="px-3 lg:px-5 xl:px-10 mb-8 lg:mb-0">
                  <div className="cardFeatures bg-[#fff] rounded-2xl overflow-hidden">
                    <div className="cardFeaturesInner bg-[#FBE7A1] py-4 ps-5 ">
                      <span className="text-[#7B7B7B] text-3xl font-bold">
                        Pro<sup>+</sup>
                      </span>
                    </div>
                    <ul className="text-[#474747] ps-5 flex flex-col gap-2 py-3">
                      <li className="text-lg font-semibold ">$20 /Month</li>
                      <li>Feature 1</li>
                      <li>Feature 2</li>
                      <li>Feature 3</li>
                      <li>Feature 4</li>
                      <li>Feature 5</li>
                      <li>Feature 6</li>
                      <li>Feature 7</li>
                      <li>Feature 8</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block absolute top-[10%] -left-[5%]">
            <img src={Img1} alt="" />
          </div>
          <div className="hidden lg:block absolute top-[80%] -left-[5%]">
            <img src={Img2} alt="" />
          </div>
          <div className="hidden lg:block absolute top-[65%] -right-[5%]">
            <img src={Img3} alt="" />
          </div>
          <div className="hidden lg:block absolute top-[10%] -right-[10%]">
            <img src={Img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
