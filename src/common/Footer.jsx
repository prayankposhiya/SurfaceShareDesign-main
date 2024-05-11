import React from "react";
import { Link } from "react-router-dom";

import Button1 from "./Button1";

import Img1 from "../assets/Images/homePage/TwitterX.png";
import Img2 from "../assets/Images/homePage/Vector.png";
import Img3 from "../assets/Images/homePage/Vector1.png";
import Img4 from "../assets/Images/homePage/Vector2.png";

export default function Footer() {
  return (
    <div className="bg-[#263238]">
      <div className="container mx-auto text-white py-10">
        <div className="mx-3 lg:mx-20 xl:mx-0 ">
          <ul className="flex flex-row flex-wrap text-start text-sm lg:text-lg mb-8 ms-8 lg:ms-0">
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/">Home</Link>
            </li>
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/featurePage">Features</Link>
            </li>
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/helpCenter">Help Center</Link>
            </li>
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/termsPolicy">Terms & Policy</Link>
            </li>
            <li className="basis-1/2 lg:basis-1/6 mb-2 lg:mb-10">
              <Link to="/privacy">Privacy</Link>
            </li>
          </ul>

          <div className="lg:hidden mb-10 mx-6">
            <ul className="flex justify-between items-center ">
              <li className="text-start text-sm">Follow us</li>
              <li>
                <img src={Img1} className="w-[20px] " alt="" />
              </li>
              <li>
                <img src={Img2} className="w-[20px] " alt="" />
              </li>
              <li>
                <img src={Img3} className="w-[20px] " alt="" />
              </li>
              <li>
                <img src={Img4} className="w-[20px] " alt="" />
              </li>
            </ul>
          </div>
          <hr />
          <div className="flex flex-row text-white justify-center items-center pt-10">
            <div className="basis-3/12 hidden lg:block">
              <ul className="flex justify-between items-center">
                <li className="text-start">Follow us</li>
                <li>
                  <img src={Img1} className="w-[30px]" alt="" />
                </li>
                <li>
                  <img src={Img2} className="w-[30px]" alt="" />
                </li>
                <li>
                  <img src={Img3} className="w-[30px]" alt="" />
                </li>
                <li>
                  <img src={Img4} className="w-[30px]" alt="" />
                </li>
              </ul>
            </div>
            <div className=" lg:basis-6/12">
              <p className="text-xs lg:text-lg text-center">© 2023 - 2024 Surface Share.</p>
            </div>
            <div className="basis-3/12 text-end hidden lg:block">
              <Button1 isTrans={true} text="Download" href="/surface" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
