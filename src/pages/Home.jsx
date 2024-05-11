import React from "react";
import Hero from "../common/Hero";
import AboutUs from "../common/AboutUs";
import Surface from "../common/Surface";
import Sell3x from "../common/Sell3x";
import SurfaceShare from "../common/SurfaceShare";
import Feature from "../common/Feature";
import Blogs from "../common/Blogs";
import YouCanBe2 from "../common/YouCanBe2";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Surface />
      <YouCanBe2 />
      <Sell3x />
      <SurfaceShare />
      <Feature />
      <Blogs />
    </div>
  );
}
