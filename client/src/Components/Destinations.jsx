import React from "react";
import borabora from "../assets/borabora.jpg";
import borabora2 from "../assets/borabora2.jpg";
import maldives from "../assets/maldives.jpg";
import maldives2 from "../assets/maldives2.jpg";
import keywest from "../assets/keywest.jpg";

function Destinations() {
  return (
    <div className="max-w-[1200px] mx-auto py-16 px-4 ">
      <h1>ALL Low Price Resorts</h1>
      <p className="py-2">Create some best memories for your life</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img className="w-full h-full object:cover  " src={borabora} alt="re" />
        <img
          className="w-full h-full object:cover col-span-2 md:col-span-3 row-span-2 "
          src={borabora2}
          alt="ge"
        />
        <img
          className="w-full h-full object:cover  "
          src={maldives}
          alt="hi_guys"
        />
        <img
          className="w-full h-full object:cover  "
          src={maldives2}
          alt="bye_guys"
        />
        <img
          className="w-full h-full object:cover  "
          src={keywest}
          alt="dbms"
        />
      </div>
    </div>
  );
}

export default Destinations;
