import React from "react";

export default function FeatureCard({ isRevers, img, cardSubTitle, cardTitle, cardCont }) {
  return (
    <div>
      <div
        className={`lg:flex ${
          isRevers ? "flex-row-reverse" : "flex-row "
        } py-5 lg:py-10 gap-10 overflow-hidden`}
      >
        <div className="lg:basis-5/12">
          <div className="text-start lg:mt-14">
            <span className="text-2xl lg:text-4xl xl:text-6xl text-[#323031]">{cardTitle}</span>
            <p className="my-5 text-xs lg:text-md xl:text-xl text-[#474747] font-bold lg:ms-8 lg:me-12">
              {cardSubTitle}
            </p>
            <p className=" text-xs lg:text-md xl:text-[16px] text-[#474747] lg:ms-8 lg:me-12 mb-8 lg:mb-0">
              {cardCont}
            </p>
          </div>
        </div>
        <div className="lg:basis-7/12">
          <img className="" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
