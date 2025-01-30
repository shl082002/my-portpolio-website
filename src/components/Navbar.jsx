import React, { Component, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { BsFileEarmarkCodeFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function Navbar() {
  const [currView, setCurrView] = useState("home");

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setCurrView(id);
    }
  };

  return (
    <div className="text-white w-full h-[10vh] flex justify-between items-center px-[2rem]">
      {/* Left-section */}
      <div className="bg-transparent">
        <button
          className="bg-transparent text-white font-bold text-[1.2rem] hover:border-2  px-[1.5rem] py-[0.3rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center"
          style={{
            boxShadow: "rgb(32, 209, 245) -1px 0px 12px",
          }}
        >
          Download CV
          <FaFileDownload className="ml-[1rem] text-[1.1rem] bg-transparent" />
        </button>
      </div>
      {/* middle-section */}
      <div>
        <ul className="flex justify-around items-center gap-x-[0.5rem] text-[2rem]">
          <li
            onClick={() => scrollTo("home")}
            className="relative hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center"
          >
            <FaHome className="bg-transparent mr-[0.5rem]" />
            {/* Home */}
          </li>
          <li
            onClick={() => scrollTo("about")}
            className="hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center"
          >
            <FaUserTie className="bg-transparent mr-[0.5rem] text-[1.8rem]" />
            {/* About */}
          </li>
          <li
            onClick={() => scrollTo("work")}
            className="hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center"
          >
            <MdWork className="bg-transparent mr-[0.5rem]" />
            {/* Work */}
          </li>
          <li
            onClick={() => scrollTo("contact")}
            className="hover:border-b-2  px-[0.5rem] py-[0.2rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center"
          >
            <MdMarkEmailUnread className="bg-transparent mr-[0.5rem]" />
            {/* Contact */}
          </li>
        </ul>
      </div>
      {/* right-section */}
      <div className="bg-transparent">
        <button
          className="bg-transparent text-white font-bold text-[1.2rem] hover:border-2  px-[1.5rem] py-[0.3rem] rounded-[0.5rem] cursor-pointer flex justify-center items-center"
          style={{
            boxShadow: "rgb(32, 209, 245) -1px 0px 12px",
          }}
        >
          Hire Me
          <BsArrowRightCircleFill className="ml-[1rem] text-[1.1rem] bg-transparent" />
        </button>
      </div>
    </div>
  );
}
