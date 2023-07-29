import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function ContactUs() {
  return (
    <div>
      <div className=" bg-slate-100  h-full w-full   ">
        <div className="grid grid-cols-2">
          <div className=" text-pink-400 text-3xl m-5 font-bold ">
            Traveligo
          </div>
          <div className="flex space-x-2 m-4 items-center justify-center right-0">
            <div className="icon">
              <FaFacebook color="blue"/>
            </div>
            <div className="icon">
              <FaGithub color="black"/>
            </div>
            <div className="icon">
              <FaLinkedin color="navy-blue"/>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 m-5 rounded-2xl shadow-2xl flex flex-col w-full h-full  items-center justify-center max-w-6xl max-h-8xl transition duration-1000 ease-out">
          <div className=" text-red-600 text-3xl m-5 font-bold ">
            Contact Us
          </div>
          <div className=" text-blue-400 text-3xl m-5 font-bold ">
            <div className="m-5 grid grid-cols-2 space-x-5">
              <h1>Anirudh S</h1>
              <div className="icon ">
                <a href="https://github.com/AnirudhS1704" target="_blank">
                  <FaGithub className=" text-blue-400" color="black"/>
                </a>
              </div>
            </div>
            <div className="m-5 grid grid-cols-2 space-x-5">
              <h1>A Sai Bhuvan</h1>
              <div className="icon ">
                <a href="https://github.com/Sai-Bhuvan" target="_blank">
                  <FaGithub className=" text-blue-400" color="black"/>
                </a>
              </div>
            </div>
            <div className="m-5 grid grid-cols-2 space-x-5">
              <h1>Agniv</h1>
              <div className="icon ">
                <a href="https://github.com/Agniv25" target="_blank">
                  <FaGithub className=" text-blue-400" color="black"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;