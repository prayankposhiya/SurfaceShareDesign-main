import React from "react";
import { YouCanBeTabs2 } from "../common/YouCanBeTabs2";

export default function YouCanBe2({ sharer, supplier }) {
  return (
    <>
      <div className="container mx-auto lg:hidden">
        <div className="py-10 mx-3 ">
          <div className={`text-start `}>
            <h3 className="text-2xl  text-[#323031] font-semibold">You can be a</h3>
          </div>
        </div>
      </div>

      <div className=" mx-3 lg:hidden">
        <YouCanBeTabs2 isSharer={sharer} isSupplier={supplier} />
      </div>
    </>
  );
}
