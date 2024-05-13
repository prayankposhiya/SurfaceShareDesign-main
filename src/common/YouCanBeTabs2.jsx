import { Tabs } from "flowbite-react";

import Img1 from "../assets/Images/youCanBePage/Seeker art.png";
import Img2 from "../assets/Images/youCanBePage/Seeker sample 1.png";
import Img3 from "../assets/Images/youCanBePage/Seeker sample 2.png";
import Img4 from "../assets/Images/youCanBePage/Seeker sample 3.png";

import Img5 from "../assets/Images/youCanBePage/Sharer art.png";
import Img6 from "../assets/Images/youCanBePage/Sharer sample 1.png";
import Img7 from "../assets/Images/youCanBePage/Sharer sample 2.png";
import Img8 from "../assets/Images/youCanBePage/Sharer sample 3.png";

import Img9 from "../assets/Images/youCanBePage/Supplier art.png";
import Img10 from "../assets/Images/youCanBePage/Supplier sample 1.png";
import Img11 from "../assets/Images/youCanBePage/Supplier sample 2.png";
import Img12 from "../assets/Images/youCanBePage/Supplier sample 3.png";

export function YouCanBeTabs2() {
  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" style="fullWidth" className="styles11">
        <Tabs.Item title="Seeker">
          <div className="container mx-auto">
            <div className="">
              <div className="mt-10">
                <p className="text-sm text-[#474747]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
              <div className="mt-5">
                <img className="w-9/12 mx-auto" src={Img1} alt="" />
              </div>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Sharer">
          <div className="container mx-auto">
            <div className="">
              <div className="mt-10">
                <p className="text-sm text-[#474747]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
              <div className="mt-5">
                <img className="w-9/12 mx-auto" src={Img5} alt="" />
              </div>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Supplier">
          <div className="container mx-auto">
            <div className="">
              <div className="mt-10">
                <p className="text-sm text-[#474747] ">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make a type specimen
                  book.
                </p>
              </div>
              <div className="mt-5">
                <img className="w-9/12 mx-auto" src={Img9} alt="" />
              </div>
            </div>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
