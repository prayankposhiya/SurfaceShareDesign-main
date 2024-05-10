import React from "react";

import Img1 from "../assets/Images/homePage/Frame 11.png";
import Img2 from "../assets/Images/homePage/Frame 9.png";
import Img3 from "../assets/Images/homePage/Frame 10.png";
import FeatureCard from "./FeatureCard";

let cards = [
  {
    img: Img1,
    cardTitle: "App feature #1",
    isRevers: false,
    cardSubTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cardCont:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: Img2,
    cardTitle: "App feature #2",
    isRevers: true,
    cardSubTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cardCont:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: Img3,
    cardTitle: "App feature #3",
    isRevers: false,
    cardSubTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    cardCont:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function Feature() {
  return (
    <div className="bg-[#FCF0C6]">
      <div className="container mx-auto">
        <div className=" py-10">
          {cards.map((card, id) => (
            <FeatureCard
              key={id}
              img={card.img}
              cardTitle={card.cardTitle}
              isRevers={card.isRevers}
              cardSubTitle={card.cardSubTitle}
              cardCont={card.cardCont}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
