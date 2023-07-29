import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

function Newlogin() {
  const [loginEmail, setLoginEmail] = useState("");
  // const [login, setislogin] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  return (
    <div className=" bg-slate-100  h-full w-full   ">
      <div className=" cols-span-3 m-4">
        <div className=" text-blue-400 text-3xl m-5 font-bold ">Traveligo</div>
        <div className="bg-slate-100 rounded-2xl shadow-2xl flex flex-col w-full h-full  items-center max-w-3xl max-h-8xl transition duration-1000 ease-out">
          <h2 className="p-3 text-3xl m-3 font-bold text-blue-400">
            Welcome Back
          </h2>

          <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In</h3>
          <div className="flex space-x-2 m-4 items-center justify-center">
            <div className="icon">
              <FaFacebook />
            </div>
            <div className="icon">
              <FaGithub />
            </div>
            <div className="icon">
              <FaLinkedin />
            </div>
          </div>
          {/* Inputs */}
          <div className="flex flex-col items-center justify-center">
            <div className="m-3">
              <input
                type="email"
                className="rounded-md p-2  border  border-cyan-700 "
                placeholder="Email"
                value={loginEmail}
              ></input>
            </div>
            <div className="m-3 ">
              <input
                type="password"
                className="rounded-md p-2 border  border-cyan-700"
                placeholder="Password"
                value={loginPassword}
              ></input>
            </div>
            <button className="button m-2">Sign In</button>
          </div>

          <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
          <p className="text-blue-600 mb-4 text-sm font-medium cursor-pointer">
            Sign_Up
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newlogin;