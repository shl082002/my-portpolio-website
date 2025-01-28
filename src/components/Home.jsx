import React from "react";
import "./Home.css";
import profile from "../assets/profile.png";
import profile_pic from "../assets/profile-pic.png";
import profile_pic1 from "../assets/profile-pic1.png";
import profile_pic4 from "../assets/profile-pic4.png";
import { FaLinkedin } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "motion/react";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div className="home-container px-[2rem] grid grid-cols-2">
      {/* left-section */}
      <div className="flex flex-col">
        {/* Introduction-text */}
        <motion.div
          className="pl-[5rem] pt-[5rem] flex justify-center items-start flex-col"
          initial={{ opacity: 0, y: 50 }} // Starting state: transparent and slightly below its position
          animate={{ opacity: 1, y: 0 }} // Ending state: fully visible and in place
          exit={{ opacity: 0, y: -50 }} // Exit state: fade out and slide upward
          transition={{
            duration: 0.5, // Animation duration
            delay: 0.3, // Delay before starting the animation
            ease: [0.25, 0.1, 0.25, 1], // Easing function (smooth effect)
          }}
        >
          <p className="text-white font-semibold text-[3.5rem]">Hi,</p>
          <p className="text-[#20d1f5] font-bold text-[3.5rem]">
            I'm Sahil Verma
          </p>
          <p className="text-[3rem] text-white">
            I'm a{" "}
            <span className="text-[#20d1f5] font-bold font-serif">
              {/* {"<Software"} {"Developer/>"} */}
              <ReactTypingEffect
                text={[
                  "<Web Developer/>",
                  "<App Developer/>",
                  "<Software Developer/>",
                ]}
                speed={100} // Typing speed in ms
                eraseSpeed={50} // Erase speed in ms
                eraseDelay={1000} // Delay before erasing
                typingDelay={1000} // Delay before typing starts
                cursorRenderer={(cursor) => <span>{cursor}</span>} // Customize cursor (optional)
                displayTextRenderer={(text, i) => (
                  <span>
                    {text.split("").map((char, i) => (
                      <span key={i}>{char}</span>
                    ))}
                  </span>
                )}
              />
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
          <motion.div
            className="py-[1rem]"
            initial={{ opacity: 0, scale: 0 }} // Starting state: transparent and slightly below its position
            animate={{ opacity: 1, scale: 1 }} // Ending state: fully visible and in place
            exit={{ opacity: 0, y: -50 }} // Exit state: fade out and slide upward
            transition={{
              duration: 0.5, // Animation duration
              delay: 0.5, // Delay before starting the animation
              ease: [0.25, 0.1, 0.25, 1], // Easing function (smooth effect)
            }}
          >
            <button
              className="text-black font-bold text-[1.8rem] hover:border-2 bg-[#20d1f5] px-[1.5rem] py-[0.3rem] rounded-[0.5rem] cursor-pointer"
              style={{
                boxShadow: "rgb(32, 209, 245) -1px 0px 12px",
              }}
            >
              Hire Me
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* right-section */}
      <div>
        {/* profile-image */}
        <motion.div
          className="flex justify-end items-center w-full h-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            scale: { type: "spring", visualDuration: 1, bounce: 0 },
          }}
        >
          <img
            src={profile_pic4}
            alt="Profile"
            className="w-[80%] mt-[2rem] mr-[3rem]"
          />
        </motion.div>
      </div>
    </div>
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
