import React from "react";

import Img1 from "../assets/Images/contact.png";

export default function ContactUs() {
  return (
    <div className={``}>
      <div className="container mx-auto">
        <div className="mx-3 lg:mx-20 xl:mx-0 py-10 lg:py-24">
          <h2 className="text-2xl lg:text-4xl xl:text-6xl text-[#323031] font-semibold  text-start">
            Contact Us
          </h2>

          <div className="lg:flex flex-row">
            <div className="basis-1/2">
              <div className="lg:mx-10  text-[#474747]">
                <p className="my-6 text-md lg:text-lg xl:text-xl ">
                  Get in touch with us and let us know how we can help you.
                </p>

                <h4 className="text-xl lg:text-3xl text-[#323031] font-semibold my-10">
                  Write to us
                </h4>

                <div className=" ">
                  <form action="">
                    <textarea
                      name=""
                      placeholder="Write us a massage"
                      id=""
                      className="w-full rounded-lg"
                      rows="10"
                    ></textarea>
                    <div className="flex mt-5">
                      <input type="text" placeholder="Name" className="w-full rounded-lg" />
                      <input
                        className="ms-6 bg-[#263238] py-2 px-10 rounded-lg text-white"
                        type="submit"
                        value="Send"
                      />
                    </div>
                  </form>
                </div>

                <div className="text-[#323031]">
                  <h4 className="text-xl lg:text-3xl font-semibold my-10">Corporate Address</h4>
                  <h4 className="text-lg lg:text-2xl font-medium">SurfaceShare Limited</h4>
                  <p className="text-xs lg:text-lg xl:text-xl my-3">1095 6th Ave,</p>
                  <p className="text-xs lg:text-lg xl:text-xl my-3">New York,</p>
                  <p className="text-xs lg:text-lg xl:text-xl my-3">NY 10036,</p>
                  <p className="text-xs lg:text-lg xl:text-xl my-3">United States</p>
                </div>
              </div>
            </div>
            <div className="basis-1/2">
              <div className="flex justify-center items-end h-full">
                <img className="w-full" src={Img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
