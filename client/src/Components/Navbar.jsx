import React from "react";
import { useState } from "react";
import { BsPerson, BsSearch } from "react-icons/bs";
import ".././index.css";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [nav, setnav] = useState(false);
  const [logo, setlogo] = useState(false);

  const handleNav = () => {
    setnav(!nav);
    setlogo(!logo);
  };

  async function Logout() {
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('email');

    await axios.post("http://localhost:4000/logout");

    window.location.reload();
  }

  const name = window.localStorage.getItem('name');
  console.log(name);
  console.log(name === null);

  return (
    <div className=" flex w-full justify-between items-center h-20 px-4 absalute z-10">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden text-pink-400 font-bold text-2xl" : "block text-pink-400 font-bold text-2xl"}>
          TRAVELIGO
        </h1>
      </div>
      <div>
        <ul className="hidden md:flex">
          <li>HOME</li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li><Link to={"/dashboard"}>Dashboard</Link></li>
          <li><Link to={name === null? "/login" : "/bookings"}>Bookings</Link></li>
        </ul>
      </div>
      <div className="flex gap-4 justify-center">
          {name !== null? 
          (<div className="flex gap-4">
          <h1>{name}</h1>
            <button onClick={Logout}>Logout</button>
        </div>)
            :
            (<Link to={'/signup'}>
            <BsPerson size={30} className="mr-2" fill="true"/>
            </Link>)
          }
      </div>
      <div onClick={handleNav} className=" md:hidden z-10">
        {nav ? (
          <AiOutlineClose size={20} className="text-black" />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* here */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-1 flex flex-col"
            : "hidden md:absolute"
        }
      >
        <ul>
          <h1 className="text-pink-400 font-bold text-2xl">Traveligo</h1>
          <li className="border-b ">HOME</li>

          <li className="border-b ">About</li>

          <li className="border-b ">Contact</li>

          <li className="border-b ">Gallery</li>

          <li>Book</li>
          <div className="flex flex-col">
            <button className="my-4">Search</button>
            <button>Account</button>
          </div>
          <div className="absalute left-0 flex p-4 justify-between my-3">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
