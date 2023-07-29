import React from "react";
import maldives3 from "../assets/maldives3.jpg";
import maldives2 from "../assets/maldives3.jpg";
import maldives from "../assets/maldives3.jpg";
import Selectcard from "./Selectcard";

function Gallary() {
  return (
    <div>
      <div className="mx-10 text-2xl text-bold">Gallary</div>
      <div className=" max-w-[1240px] mx-auto px-4 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Selectcard image={maldives3} text="Maldives" />
        <Selectcard image={maldives3} text="Maldives" />
        <Selectcard image={maldives3} text="Maldives" />
        <Selectcard image={maldives3} text="Maldives" />
        <Selectcard image={maldives3} text="Maldives" />
        <Selectcard image={maldives3} text="Maldives" />
      </div>
    </div>
  );
}

export default Gallary;
