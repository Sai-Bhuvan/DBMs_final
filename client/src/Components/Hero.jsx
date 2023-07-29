import React from "react";
import beachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full h-screen  relative ">
      <video
        src={beachVid}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />

      {/* <div className="absalute w-full h-full top-0 left-0 bg-gray-900/30"></div> */}
      <div className="absalute  top-0 w-full h-full flex flex-col justify-center text-center p-4 m-4">
        <h1>First class travel</h1>
        <h2>Top 1% locations in the world</h2>
        <form
          action=""
          className="flex justify-between items-center max-v-[700] mx-auto  w-full border rounded-full p-1 text-black bg-gray-200/90"
        >
          <div className="m-5 border-solid rounded-full border-indigo-500/75">
            <input
              type="text"
              placeholder="search destinations"
              className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="iconx "
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
