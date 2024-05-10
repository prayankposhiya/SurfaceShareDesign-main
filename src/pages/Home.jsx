import React from "react";
import Hero from "../common/Hero";
import AboutUs from "../common/AboutUs";
import Surface from "../common/Surface";
import Sell3x from "../common/Sell3x";
import SurfaceShare from "../common/SurfaceShare";
import Feature from "../common/Feature";
import Blogs from "../common/Blogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Surface />
      <Sell3x />
      <SurfaceShare />
      <Feature />
      <Blogs />
    </div>
  );
}
