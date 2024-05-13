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

export function YouCanBeTabs({ isSharer, isSupplier }) {
  return (
    <div className="overflow-x-auto">
      <Tabs aria-label="Full width tabs" style="fullWidth">
        <Tabs.Item title="Seeker">
          <div className="container mx-auto px-36">
            <div className="flex flex-row my-10">
              <div className="basis-1/2">
                <div className=" xl:mt-24">
                  <p className="text-lg xl:text-xl text-[#474747] me-20 xl:me-36">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="px-12">
                  <img className="w-full" src={Img1} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9DD7B] py-10">
            <div className="container mx-auto px-36">
              <div className="grid grid-cols-3 gap-10">
                <div className="">
                  <img className="w-full" src={Img2} alt="" />
                </div>
                <div className="">
                  <img className="w-full" src={Img3} alt="" />
                </div>
                <div className="">
                  <img className="w-full" src={Img4} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item active={isSharer} title="Sharer">
          <div className="container mx-auto px-36">
            <div className="flex flex-row my-10">
              <div className="basis-1/2">
                <div className="xl:mt-24">
                  <p className="text-lg xl:text-xl text-[#474747] me-20 xl:me-36">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="px-12">
                  <img className="w-full" src={Img5} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9DD7B] py-10">
            <div className="container mx-auto px-36">
              <div className="grid grid-cols-3 gap-10">
                <div className="">
                  <img className="w-full" src={Img6} alt="" />
                </div>
                <div className="">
                  <img className="w-full" src={Img7} alt="" />
                </div>
                <div className="">
                  <img className="w-full" src={Img8} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item active={isSupplier} title="Supplier">
          <div className="container mx-auto px-36">
            <div className="flex flex-row my-10">
              <div className="basis-1/2">
                <div className="xl:mt-24">
                  <p className="text-lg xl:text-xl text-[#474747] me-20 xl:me-36">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specimen
                    book.
                  </p>
                </div>
              </div>
              <div className="basis-1/2">
                <div className="px-12">
                  <img className="w-full" src={Img9} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F9DD7B] py-10">
            <div className="container mx-auto px-36">
              <div className="grid grid-cols-3 gap-10">
                <div className="">
                  <img className="w-full" src={Img10} alt="" />
                </div>
                <div className="">
                  <img className="w-full" src={Img11} alt="" />
                </div>
                <div className="">
                  <img className="w-full" src={Img12} alt="" />
                </div>
              </div>
            </div>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
}
