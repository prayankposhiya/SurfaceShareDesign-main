import React from "react";
import SurfaceShareCard from "./SurfaceShareCard";

import Img1 from "../assets/Images/homePage/Pic 1.png";
import Img2 from "../assets/Images/homePage/Pic 2.png";
import Img3 from "../assets/Images/homePage/Pic 3.png";

let cards = [
  {
    img: Img1,
    num: "01",
    isRevers: false,
    cardTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cardCont:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: Img2,
    num: "02",
    isRevers: true,
    cardTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cardCont:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: Img3,
    num: "03",
    isRevers: false,
    cardTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cardCont:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function SurfaceShare() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-14">
          <h3 className="text-6xl text-[#323031] text-start font-semibold mt-16">
            How SurfaceShare works
          </h3>
          <div className="px-20">
            {cards.map((card, id) => (
              <SurfaceShareCard
                img={card.img}
                num={card.num}
                isRevers={card.isRevers}
                cardTitle={card.cardTitle}
                cardCont={card.cardCont}
              />
            ))}

            <div className="flex flex-row">
              <div className="basis-1/2">
                <a className="text-2xl text-[#E5B222] ms-8" href="javascript:void(0)">
                  Learn more about Sharer
                </a>
              </div>
              <div className="basis-1/2">
                <a className="text-2xl text-[#E5B222] ms-8" href="javascript:void(0)">
                  Learn more about Supplier
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
