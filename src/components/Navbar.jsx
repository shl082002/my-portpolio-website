import React, { Component } from "react";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="text-white bg-[#12121c] w-full h-[10vh] flex justify-between items-center px-[2rem]">
      {/* Left-section */}
      <section></section>
      {/* right-section */}
      <section>
        <ul className="flex justify-around items-center gap-x-[3rem] text-[1.5rem]">
          <li className="hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center">
            <FaHome className="bg-transparent mr-[0.5rem]" />
            Home
          </li>
          <li className="hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center">
            <FaUserTie className="bg-transparent mr-[0.5rem]" />
            About
          </li>
          <li className="hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center">
            <MdWork className="bg-transparent mr-[0.5rem]" />
            Work
          </li>
          <li className="hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center">
            <MdMarkEmailUnread className="bg-transparent mr-[0.5rem]" />
            Contact
          </li>
        </ul>
      </section>
    </header>
  );
}
