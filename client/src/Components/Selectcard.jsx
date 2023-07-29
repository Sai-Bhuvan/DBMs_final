import React from "react";

function Selectcard(props) {
  return (
    <div className="relative ">
      <img
        src={props.image}
        alt="hello"
        className=" opacity-4 w-full h-full object-cover"
      />
      <div className="bg-grey-900/30  absolute top-0 left-0 w-full h-full text-bold text-white m-3 text-2xl ">
        {/* <p className="left-3 bottom-3 text-xl font-bold text-white absolute "></p>
         */}
        {props.text}
      </div>
    </div>
  );
}

export default Selectcard;
