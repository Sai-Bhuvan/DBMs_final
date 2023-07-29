import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-gray-100 p-16 ">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center  justify-between  items-center">
          <div className="mx-4">
            <h1>Traveligo</h1>
          </div>
          <div className="flex flex-row m-3  justify-between sm:max-w-[280px] w-full">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
            <FaLinkedin className="icon" />
          </div>
        </div>
        <div className="m-3 my-4">
          <ul>
            <li>About</li>
            <li>Partnerships</li>
            <li>Advertising</li>
            <li>Issues</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
