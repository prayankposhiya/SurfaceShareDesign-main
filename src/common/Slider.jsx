"use client";
import React from "react";
import { Carousel, DarkThemeToggle, Flowbite } from "flowbite-react";

import Img1 from "../assets/Images/homePage/Ellipse 1.png";

export default function Slider() {
  const styles = {
    root: {
      base: "111 relative h-full w-full",
      leftControl:
        "222 absolute left-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "333 absolute right-0 top-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "444 bg-black/50 hover:bg-black dark:bg-black-800/50 dark:hover:bg-black-800",
        on: "555 bg-black dark:bg-gray-800",
      },
      base: "666 h-3 w-3 rounded-full",
      wrapper: "777 absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  return (
    <div className="h-64 xl:h-80 2xl:h-96">
      <div className={styles.root.base}>
        <Flowbite>
          <Carousel onSlideChange={(index) => console.log("onSlideChange()", index)}>
            {/* <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"> */}
            <div className="bg-[#e6d494] flex flex-col justify-center items-center rounded-xl py-10 xl:py-20 px-5 lg:px-32 xl:px-56">
              <img src={Img1} alt="" />
              <h5 className="mb-8 mt-3 text-3xl font-bold text-[#474747]">Mark Hamill</h5>
              <p className="text-sm lg:text-lg xl:text-xl text-[#474747] text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            {/* </div> */}
            <div className="bg-[#e6d494] flex flex-col justify-center items-center rounded-xl py-10 xl:py-20 px-5 lg:px-32 xl:px-56">
              <img src={Img1} alt="" />
              <h5 className="mb-8 mt-3 text-3xl font-bold text-[#474747]">Mark Hamill</h5>
              <p className="text-sm lg:text-lg xl:text-xl text-[#474747] text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="bg-[#e6d494] flex flex-col justify-center items-center rounded-xl py-10 xl:py-20 px-5 lg:px-32 xl:px-56">
              <img src={Img1} alt="" />
              <h5 className="mb-8 mt-3 text-3xl font-bold text-[#474747]">Mark Hamill</h5>
              <p className="text-sm lg:text-lg xl:text-xl text-[#474747] text-center">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
          </Carousel>

          {/* <DarkThemeToggle/> */}
        </Flowbite>
      </div>
    </div>
  );
}
