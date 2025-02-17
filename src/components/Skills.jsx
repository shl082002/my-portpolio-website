import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaAws,
  FaDocker,
} from "react-icons/fa";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import {
  SiCplusplus,
  SiExpress,
  SiTailwindcss,
  SiPostman,
} from "react-icons/si";
import { DiGit } from "react-icons/di";
import { FaAngular } from "react-icons/fa";
export default function () {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML", border: true },
    { icon: <FaCss3Alt />, name: "CSS", border: true },
    { icon: <FaJs />, name: "JavaScript", border: true },
    { icon: <BiLogoTypescript />, name: "TypeScript", border: false },
    { icon: <SiCplusplus />, name: "C++", border: false },
    { icon: <FaPython />, name: "Python", border: false },
    { icon: <FaReact />, name: "React", border: false },
    { icon: <FaReact />, name: "React Native", border: false },
    { icon: <FaAngular />, name: "Angular", border: false },
    { icon: <FaNodeJs />, name: "NodeJS", border: false },
    { icon: <SiExpress />, name: "ExpressJS", border: false },
    { icon: <FaBootstrap />, name: "Bootstrap", border: false },
    { icon: <SiTailwindcss />, name: "TailwindCSS", border: false },
    { icon: <BiLogoMongodb />, name: "MongoDB", border: false },
    { icon: <DiGit />, name: "Git/GitHub", border: false },
    { icon: <SiPostman />, name: "Postman", border: false },
    { icon: <FaAws />, name: "AWS", border: false },
    { icon: <FaDocker />, name: "Docker", border: false },
  ];

  const SkillCard = ({ icon, name, border }) => (
    <div className="text-white bg-[#0d0d14] px-[1.5rem] py-[1rem] rounded-[1rem] flex items-center justify-center flex-col cursor-pointer">
      <span className="text-[10rem] bg-transparent">{icon}</span>
      <span className="text-[1.5rem] bg-transparent">{name}</span>
    </div>
  );

  return (
    <div className="">
      <div className="flex items-center justify-center py-[2rem]">
        <div className="flex items-center w-full">
          <hr className="flex-1 border-dashed border-2 mx-6" />
          <span className="text-white text-[2.5rem]">Skills</span>
          <hr className="flex-1 border-dashed border-2 mx-6" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-7 gap-x-[3.5rem] gap-y-[5rem] py-[2rem] px-[2rem]">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              border={skill.border}
            />
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <Carousel.Item>
        <div className="text-black w-[92vw] h-[85vh] flex justify-between items-center">
          {/* left-section */}
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url(${tech})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* header */}
            <div className="font-bold text-white flex flex-col justify-center items-center py-[3rem]">
              <p className="text-[4rem] tracking-[1.8rem]">TECHNICAL</p>
              <p className="text-[3.5rem] ml-[5rem] flex justify-center items-center  tracking-[2rem]">
                SKILLs
                <FaCircleArrowRight className="ml-[1rem] text-[3rem] mt-[0.5rem]" />
              </p>
            </div>
            {/* body */}
          </div>
          {/* right-section */}
          <div
            className="w-full h-full flex flex-col justify-around items-center"
            style={{
              backgroundImage: `url(${about2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              overflow: "hidden",
            }}
          >
            <div className="grid grid-cols-6 px-[1rem]">
              {skills.map((skill, index) => (
                <SkillCard
                  key={index}
                  icon={skill.icon}
                  name={skill.name}
                  border={skill.border}
                />
              ))}
            </div>
          </div>
        </div>
      </Carousel.Item>
    </div>
  );
}
