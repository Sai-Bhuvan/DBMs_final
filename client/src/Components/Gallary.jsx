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
        <Selectcard image={maldives3} text="Dubai" />
        <Selectcard
          image={"https://wallpaperaccess.com/full/753144.jpg"}
          text="Maldives"
        />
        <Selectcard
          image={
            "https://wallpapers.com/images/hd/beautiful-place-pictures-4z0hjwoi8rjhlk1p.jpg"
          }
          text="Hong Kong"
        />
        <Selectcard
          image={"https://wallpaperaccess.com/full/309830.jpg"}
          text="Mysore"
        />
        <Selectcard
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFoPh0lPDolvRYFvAZTNmGFmBCvr2Sqq3RA&usqp=CAU"
          }
          text="London"
        />
        <Selectcard
          image={
            "https://getwallpapers.com/wallpaper/full/e/5/b/1263131-download-free-world-most-beautiful-places-wallpapers-1920x1200.jpg"
          }
          text="Himalayas"
        />
      </div>
    </div>
  );
}

export default Gallary;
