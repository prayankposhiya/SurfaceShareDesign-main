import React from "react";

export default function SurfaceShareCard({ isRevers, img, num, cardTitle, cardCont }) {
  return (
    <div>
      <div className={`flex ${isRevers ? "flex-row-reverse" : "flex-row "} py-10`}>
        <div className="basis-1/2">
          <div className="text-start">
            <span className=" text-xl text-[#D2D2D2] ms-8 ">{num}</span>
            <p className="my-5 text-lg xl:text-xl text-[#474747] font-bold ms-8 me-16 xl:me-36">
              {cardTitle}
            </p>
            <p className=" text-md xl:text-[16px] text-[#474747] ms-8 me-16 xl:me-36">{cardCont}</p>
          </div>
        </div>
        <div className="basis-1/2">
          <img className="" src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
