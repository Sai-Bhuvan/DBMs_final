import axios from "axios";
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";

function Newlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const [user, setUser] = useState(null);

  async function handleLogin(event) {
    event.preventDefault();

    console.log(email, password);
    try {
      await axios
        .post(
          "http://localhost:4000/login",
          {
            email,
            password,
          },
          { withCredentials: false }
        )
        .then(function (response) {
          console.log(response);

          if (response.data.message === "Password correct") {
            setUser(response?.data?.user);
            window.localStorage.setItem("email", email);
            window.localStorage.setItem("name", response?.data?.user?.name);
            window.localStorage.setItem("id", response?.data?.user?._id);
            alert("Login successful!");
            setRedirect("/");
          } else {
            alert("User does not exist! Please signup.");
            setRedirect("/signup");
          }
        });
    } catch (err) {
      alert(
        "Login unsuccessful. Please check the credentials entered and try again later."
      );
      console.log(err);
    }
  }

  console.log(user?.name);
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <form onSubmit={handleLogin} className=" bg-slate-100  h-full w-full">
      <div className=" cols-span-3 p-4  text-center">
        <div className=" text-pink-400 text-3xl m-5 font-bold">Traveligo</div>
        <div className="rounded-2xl shadow-2xl flex flex-col w-1/4 h-full  items-center max-w-3xl max-h-8xl transition duration-1000 ease-out self-center mx-auto">
          <h2 className="p-3 text-3xl m-3 font-bold text-blue-400">
            Welcome Back
          </h2>

          <h3 className="text-blue-400 pt-2 text-2xl font-bold">Sign In</h3>
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
                className="rounded-md p-2  border  border-cyan-700 w-60"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              ></input>
            </div>
            <div className="m-3 ">
              <input
                type="password"
                className="rounded-md p-2 border  border-cyan-700 w-60"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              ></input>
            </div>
            <button
              type="submit"
              className="button m-2 bg-blue-400 bg-opacity-40 text-blue-600 font-bold text-xl rounded-lg px-4 py-2"
            >
              Sign In
            </button>
          </div>

          <div className="flex gap-2 justify-center mb-4">
            <p className="text-blue-400 mt-4 text-lg">Don't have an account?</p>
            <Link to={"/signup"}>
              <p className="text-blue-600 mt-4 text-lg font-medium cursor-pointer">
                Sign Up
              </p>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Newlogin;
