import React from "react";

export default function FeatureCard({ isRevers, img, cardSubTitle, cardTitle, cardCont }) {
  return (
    <div>
      <div
        className={`flex ${
          isRevers ? "flex-row-reverse" : "flex-row "
        } py-10 gap-10 overflow-hidden`}
      >
        <div className="basis-5/12">
          <div className="text-start mt-14">
            <span className="text-6xl text-[#323031]">{cardTitle}</span>
            <p className="my-5 text-xl text-[#474747] font-bold ms-8 me-12">{cardSubTitle}</p>
            <p className=" text-[16px] text-[#474747] ms-8 me-12">{cardCont}</p>
          </div>
        </div>
        <div className="basis-7/12">
          <img className="" src={img} alt="" />
          {/* <img className={isRevers ? "-translate-x-48" : "translate-x-48"} src={img} alt="" /> */}
        </div>
      </div>
    </div>
  );
}
