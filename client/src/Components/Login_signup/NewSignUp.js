import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Newsignup() {
  return (
    <div className="bg-slate-100 ">
      <div className="cols-span-3 m-4">
        <div className=" text-blue-400 text-3xl m-5 font-bold ">Traveligo</div>
        <div className="  rounded-2xl shadow-2xl  flex flex-col w-full   items-center max-w-4xl transition duration-1000 ease-in">
          <h2 className="p-3 text-3xl font-bold text-blue-400">
            Welcome to our app
          </h2>

          <h3 className="text-xl font-semibold text-blue-400 pt-2">
            Create Account!
          </h3>
          <div className="flex space-x-2 m-4 items-center justify-center">
            <div className="icon">
              <FaFacebook className="text-blue-400" />
            </div>
            <div className="icon">
              <FaGithub className="text-blue-400" />
            </div>
            <div className="icon">
              <FaLinkedin className="text-blue-400" />
            </div>
          </div>
          {/* Inputs */}
          <div className="flex flex-col items-center justify-center mt-2">
            <input
              type="password"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="Name"
            ></input>
            <input
              type="email"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="Email"
            ></input>
            <input
              type="password"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="Password"
            ></input>
            <input
              type="password"
              className="rounded-md p-2 border  border-cyan-700 m-2"
              placeholder="Confirm Password"
            ></input>
            <div>
              <select
                name=""
                id=""
                className="border  rounded-md p-2  border-cyan-700 m-2 text-blue-400"
              >
                <option className="text-blue-400">male</option>
                <option className="text-blue-400">female</option>
                <option className="text-blue-400">others</option>
              </select>
            </div>
            <button className="button m-2">Sign Up</button>
          </div>
          <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
          <p className="text-blue-400 mt-4 text-sm">Already have an account?</p>
          <p className="text-blue-700 mb-4 text-sm font-medium cursor-pointer">
            Sign In
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsignup;