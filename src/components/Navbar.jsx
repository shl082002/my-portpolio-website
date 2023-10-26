import React from "react";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/nav-icon.png";

export default function Navbar() {
  return (
    <div className="h-[10vh] grid grid-cols-3 items-center shadow-lg">
      <div className=" px-[2rem] flex items-center">
        <img
          src={logo}
          alt="Not found"
          className="w-[3rem] h-[3rem] mx-[1rem]"
        />
        <span className="text-[2.5rem] font-semibold font-custom">
          Sahil Verma
        </span>
        {/* <span className="mt-[2rem]">Software Developer</span> */}
      </div>
      {/* <div className="w-full bg-nav-grey py-[0.5rem] rounded-[0.5rem] flex items-center">
        <BsSearch className="text-[1.5rem] font-bold mx-[0.5rem]" />
        <input
          type="text"
          className="w-full mr-[1rem] text-[1.1rem] bg-transparent outline-none"
          placeholder="search image..."
        />
      </div> */}
      <div className="px-[3rem] flex items-center justify-around">
        <span className="mx-[1rem] text-[1.3rem] font-semibold cursor-pointer hover:border-b-[0.2rem] hover:border-blue-500">
          Profile
        </span>
        <span className="mx-[1rem] text-[1.3rem] font-semibold cursor-pointer hover:border-b-[0.2rem] hover:border-blue-500">
          Work
        </span>
        <span className="mx-[1rem] text-[1.3rem] font-semibold cursor-pointer hover:border-b-[0.2rem] hover:border-blue-500">
          Contact
        </span>
        {/* <span className="px-[1rem] text-[1.2rem] font-semibold"></span> */}
      </div>
      <div className="flex justify-end items-center px-[2rem]">
        <span className="border-2 border-blue-500 rounded-md px-[1rem] py-[0.2rem]  text-[1.3rem] cursor-pointer hover:border-red-700 hover:font-semibold">
          Download CV
        </span>
      </div>
    </div>
  );
}
