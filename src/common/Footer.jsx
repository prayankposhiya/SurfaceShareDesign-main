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
        <ul className="flex flex-row flex-wrap text-start text-lg">
          <li className="basis-1/6 mb-10">
            <Link to="/surface">Home</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/features">Features</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/featurePage">Feature Page</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/helpCenter">Help Center</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/pricing">Pricing</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/termsPolicy">Terms & Policy</Link>
          </li>
          <li className="basis-1/6 mb-10">
            <Link to="/privacy">Privacy</Link>
          </li>
        </ul>
        <hr />
        <div className="flex flex-row text-white justify-center items-center pt-10">
          <div className="basis-3/12">
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
          <div className="basis-6/12">
            <p className="text-center">© 2023 - 2024 Surface Share.</p>
          </div>
          <div className="basis-3/12 text-end">
            <Button1 isTrans={true} text="Download" />
          </div>
        </div>
      </div>
    </div>
  );
}
