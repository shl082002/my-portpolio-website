import React from "react";
import profilebg from "../assets/profile-bg.png";
import profile from "../assets/profile.png";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <>
      left-container
      <div className="grid grid-cols-2 w-full h-full">
        {/* text */}
        <div className="pl-[10rem] py-[8rem]">
          <p className="home-text text-[3rem]">Hi</p>
          <p className="home-text text-[5.5rem]">I'm Sahil Verma</p>
          <p className="home-text text-[5.5rem]">{"<Software"}</p>
          <p className="home-text text-[5.5rem] px-[3.8rem]">{"Developer/>"}</p>
          <div className="text-white text-[2rem] justify-center items-center flex">
            <span className="border px-[1rem] rounded-lg mx-[3rem] shadow-lg shadow-black ">
              Profile
            </span>
            <span className="border px-[1.5rem] rounded-lg mx-[3rem] shadow-lg shadow-black">
              Work
            </span>
          </div>
        </div>
        {/* buttons */}
        {/* right-container */}
        <div
          className=""
          // style={{
          //   backgroundImage: `url(${profilebg})`,
          // }}
        >
          <img
            src={profile}
            alt=""
            className="w-[74%] h-[89%] mt-[5.7rem] bg-transparent ml-[12rem]"
          />
        </div>
      </div>
    </>
  );
}
