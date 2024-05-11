import React from "react";

export default function Button2({ text, isTrans, color, textSize, px }) {
  return (
    <button
      className={`${
        isTrans ? "bg-transparent" : color
      } py-3 ${px} rounded-lg text-white text-[${textSize}px]`}
    >
      {text}
    </button>
  );
}
