import React from "react";
import { YouCanBeTabs } from "../common/YouCanBeTabs";

export default function YouCanBe({ sharer, supplier }) {
  return (
    <>
      <div className="container mx-auto">
        <div className="py-16 ">
          <div className={`text-start `}>
            <h3 className="text-6xl text-[#323031] font-semibold mb-10">you can be a</h3>
          </div>
        </div>
      </div>

      <div className="pb-10">
        <YouCanBeTabs isSharer={sharer} isSupplier={supplier} />
      </div>
    </>
  );
}
