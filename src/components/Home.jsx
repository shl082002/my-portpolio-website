import React from "react";
import profilebg from "../assets/profile-bg.png";
import profile from "../assets/profile.png";
import { FaLinkedin } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export default function Home() {
  return (
    <main className="px-[2rem] grid grid-cols-2">
      {/* left-section */}
      <section className="flex flex-col">
        {/* Introduction-text */}
        <div className="px-[5rem] pt-[5rem] flex justify-center items-start flex-col">
          <p className="text-white font-semibold text-[5rem]">Hi,</p>
          <p className="text-[#20d1f5] font-bold text-[5rem]">
            I'm Sahil Verma
          </p>
          <p className="text-[3rem] text-white">
            I'm a{" "}
            <span className="text-[#20d1f5] font-bold font-serif">
              {"<Software"} {"Developer/>"}
            </span>
          </p>
          <div className="flex py-[2rem] gap-x-[1.5rem]">
            <FaLinkedin className="text-[3rem] text-[#20d1f5] hover:text-white" />
            <MdAttachEmail className="text-[3rem] text-[#20d1f5] hover:text-white" />
            <FaGithub className="text-[3rem] text-[#20d1f5] hover:text-white" />
            <SiFreelancer className="text-[3rem] text-[#20d1f5] hover:text-white" />
            <IoLogoWhatsapp className="text-[3rem] text-[#20d1f5] hover:text-white" />
            <AiFillInstagram className="text-[3rem] text-[#20d1f5] hover:text-white" />
          </div>
          <div className="py-[1rem]">
            <button className="text-black font-bold text-[1.8rem] hover:border-2 bg-[#20d1f5] px-[1.5rem] py-[0.3rem] rounded-[0.5rem] cursor-pointer">
              Hire Me
            </button>
          </div>
        </div>
      </section>
      {/* right-section */}
      <section>
        {/* profile-image */}
        <div className="flex justify-end items-center w-full h-full">
          <img src={profile} alt="Profile" className="w-[64.4%]" />
        </div>
      </section>
    </main>
  );
}

{
  /* left-container
<div className="grid grid-cols-2 w-full h-full">
  text
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
  buttons
  right-container
  <div
    className=""
  >
    <img
      src={profile}
      alt=""
      className="w-[74%] h-[89%] mt-[5.7rem] bg-transparent ml-[12rem]"
    />
  </div>
</div> */
}
