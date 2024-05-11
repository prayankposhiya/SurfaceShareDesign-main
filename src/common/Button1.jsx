import React from "react";

export default function Button1({ text, isTrans, color, href }) {
  return (
    <a
      href={href}
      className={`${isTrans ? "bg-transparent" : color} py-3 px-8 rounded-3xl border border-white`}
    >
      {text}
    </a>
  );
}
