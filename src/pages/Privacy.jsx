import React from "react";

import Img1 from "../assets/Images/privacy.png";

export default function Privacy() {
  return (
    <div className={``}>
      <div className="bg-[#FCF0C6] h-5/6">
        <div className="container mx-auto">
          <div className="mx-3 lg:mx-20 xl:mx-0 pt-16 h-full">
            <h2 className="text-2xl lg:text-4xl xl:text-6xl text-[#323031] font-semibold  text-start">
              Privacy
            </h2>

            <div className="flex flex-col justify-center items-center">
              <img className="translate-y-8" src={Img1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mx-3 lg:mx-20 xl:mx-0 my-24 ">
          <h4 className="text-xl lg:text-3xl text-[#323031] font-semibold my-10">Privacy Policy</h4>
          <div className="text-xs lg:text-lg xl:text-xl text-[#474747] mx-5 lg:mx-10 ">
            <p className="my-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="my-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <p className="my-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
              more recently with desktop publishing software like Aldus PageMaker including versions
              of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
