import React from "react";
import "../components/About.css";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import personal from "../assets/personal.svg";
import education from "../assets/education.svg";
import career from "../assets/career.svg";
import cardbg1 from "../assets/card-bg1.svg";
import cardbg2 from "../assets/card-bg2.jpg";
import tech from "../assets/tech.jpg";
import Skills from "./Skills";
import { FaInfo } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { FaUserPlus } from "react-icons/fa";
import { SiGooglecalendar } from "react-icons/si";
import { IoMale } from "react-icons/io5";
import { LiaLanguageSolid } from "react-icons/lia";
import { RiSchoolFill } from "react-icons/ri";
import { TbSchool } from "react-icons/tb";
import { LiaSchoolSolid } from "react-icons/lia";
import { FaCode } from "react-icons/fa6";

export default function About() {
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
    <div className="text-white px-[1.5rem] py-[1rem] rounded-[1rem] flex items-center justify-center flex-col cursor-pointer">
      <span className="text-[5rem] bg-transparent">{icon}</span>
      <span className="text-[1rem] bg-transparent">{name}</span>
    </div>
  );
  return (
    <div className="flex justify-center items-center h-[90vh]">
      {/* header */}
      {/* <div className="flex items-center justify-center py-[2rem]">
        <div className="flex items-center w-full">
          <hr className="flex-1 border-dashed border-2 mx-6" />
          <span className="text-white text-[2.5rem]">About Me</span>
          <hr className="flex-1 border-dashed border-2 mx-6" />
        </div>
      </div> */}
      {/* content */}

      <Carousel className="w-[92vw]">
        {/* about-me */}
        <Carousel.Item>
          {/* main-container */}
          <div className="text-black w-[92vw] h-[85vh] flex justify-between items-center ">
            {/* left-section */}
            <div
              className="w-full h-full overflow-hidden"
              style={{
                backgroundImage: `url(${about1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                overflow: "hidden",
              }}
            >
              {/* header */}
              <div className="font-bold text-white flex flex-col justify-center items-center py-[3rem]">
                <p className="text-[4rem] tracking-[1.8rem]">ABOUT</p>
                <p className="text-[3.5rem] ml-[5rem] flex justify-center items-center  tracking-[2rem]">
                  ME
                  <FaCircleArrowRight className="text-shadow-pop-tl ml-[1rem] text-[3rem] mt-[0.5rem]" />
                </p>
              </div>
              {/* body */}
            </div>
            {/* right-section */}
            <div
              className="w-full h-full grid grid-rows-2 py-[1rem]"
              style={{
                backgroundImage: `url(${about3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* top-section */}
              <div className="grid grid-cols-2 gap-x-[2rem] w-full p-[1rem] pb-[2rem]">
                {/* personal */}
                <div
                  className="border-2 text-white"
                  style={{
                    backgroundImage: `url(${cardbg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "1rem",
                  }}
                >
                  {/* heading */}
                  <div className="flex justify-start items-center py-[0.5rem] text-[1.8rem] px-[2rem] font-bold shadow-xl">
                    <FaInfo className="text-[2rem] mr-[0.5rem] border-2 border-white rounded-[999rem] p-[0.3rem]" />
                    Personal Info
                  </div>
                  {/* content */}
                  <div className="flex flex-col px-[1rem] py-[0.5rem] gap-y-[0.6rem]">
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <FaUserPlus className="mr-[1rem]" />
                      Sahil Verma
                    </span>
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <SiGooglecalendar className="mr-[1rem]" />
                      21
                    </span>
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <IoMale className="mr-[1rem]" />
                      Male
                    </span>
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <LiaLanguageSolid className="mr-[1rem]" />
                      Hindi & English
                    </span>
                  </div>
                </div>

                {/* education */}
                <div
                  className="border-2 text-white"
                  style={{
                    backgroundImage: `url(${cardbg2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "1rem",
                  }}
                >
                  {/* heading */}
                  <div className="flex justify-start items-center py-[0.5rem] text-[1.8rem] px-[2rem] font-bold shadow-xl">
                    <FaUserGraduate className="text-[2rem] mr-[0.5rem] border-2 border-white rounded-[999rem] p-[0.3rem]" />
                    Educational
                  </div>
                  {/* content */}
                  <div className="flex flex-col px-[1rem] py-[0.5rem] gap-y-[0.6rem]">
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <RiSchoolFill className="mr-[1rem]" />
                      IIT Bombay
                    </span>
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <SiGooglecalendar className="mr-[1rem]" />
                      2021-2025
                    </span>
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <TbSchool className="mr-[1rem]" />
                      B-Tech
                    </span>
                    <span className="flex justify-start px-[1.5rem] text-[1.1rem] font-semibold">
                      <LiaSchoolSolid className="mr-[1rem] mt-[0.25rem]" />
                      Met Eng & Material Science
                    </span>
                  </div>
                </div>
              </div>
              {/* down-section */}
              <div className="px-[1rem] grid grid-cols-1 py-[2rem]">
                {/* professional-experience */}
                <div
                  className="border-2"
                  style={{
                    backgroundImage: `url(${cardbg1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: "1rem",
                  }}
                >
                  {/* heading */}
                  <div className="w-full flex justify-start items-center py-[0.5rem] text-[1.8rem] px-[2rem] font-bold shadow-xl">
                    <FaLaptopCode className="text-[2rem] mr-[0.5rem] border-2 border-black rounded-[999rem] p-[0.3rem]" />
                    Professional Experience
                  </div>
                  {/* content */}
                  <div className="flex flex-col px-[1rem] py-[0.5rem] gap-y-[0.6rem]">
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <FaCode className="mr-[1rem]" />
                      App Development Intern | A.V.Copters
                    </span>
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <FaCode className="mr-[1rem]" />
                      MERN-stack Intern | Systemica Solutions
                    </span>
                    <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <FaCode className="mr-[1rem]" />
                      Frontend Developer | Chocolate Stay
                    </span>
                    {/* <span className="flex justify-start items-center px-[1.5rem] text-[1.1rem] font-semibold">
                      <FaCode className="mr-[1rem]" />
                      Hindi & English
                    </span> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        {/* skills */}
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
                backgroundImage: `url(${about3})`,
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
      </Carousel>
    </div>
  );
}

{
  /* draft-2 */
}
{
  /* <div className="grid grid-cols-2 px-[2rem]">
  <div className="grid grid-rows-3 gap-y-[5rem]">
    <div className="flex justify-start items-center">
      <div className="rounded-[999rem] bg-sky-b flex justify-center items-center text-[2.5rem] p-[0.7rem] text-white">
        <FaInfo />
      </div>
      <div className="w-20 h-1 bg-sky-b" />
      <span className="text-white border-2 border-[#20d1f5] rounded-[0.5rem] px-[1rem] py-[0.2rem] text-[1.2rem]">
        Personal Info
      </span>
      <div className="w-20 h-1 bg-sky-b" />
      <div className="w-[20vw] h-[20vh] text-white border-2 border-[#20d1f5] rounded-[2rem] p-[1rem] flex flex-col">
        <span>Name: Sahil Verma</span>
        <span>Age: 21</span>
        <span>Gender: Male</span>
        <span>Languages: English/Hindi</span>
      </div>
    </div>
    <div className="flex justify-start items-center flex-row-reverse">
      <div className="rounded-[999rem] bg-sky-b flex justify-center items-center text-[2.5rem] p-[0.7rem] text-white">
        <FaUserGraduate />
      </div>
      <div className="w-20 h-1 bg-sky-b" />
      <span className="text-white border-2 border-[#20d1f5] rounded-[0.5rem] px-[1rem] py-[0.2rem] text-[1.2rem]">
        Education
      </span>
      <div className="w-20 h-1 bg-sky-b" />
      <div className="w-[20vw] h-[20vh] text-white border-2 border-[#20d1f5] rounded-[2rem] p-[1rem] flex flex-col">
        <span>Collage: IIT Bombay</span>
        <span>Degree: B-tech </span>
        <span>Dep: Met Eng and Material Science</span>
      </div>
    </div>
    <div className="flex justify-start items-center">
      <div className="rounded-[999rem] bg-sky-b flex justify-center items-center text-[2.5rem] p-[0.7rem] text-white">
        <FaLaptopCode />
      </div>
      <div className="w-20 h-1 bg-sky-b" />
      <span className="text-white border-2 border-[#20d1f5] rounded-[0.5rem] px-[1rem] py-[0.2rem] text-[1.2rem]">
        Experience
      </span>
      <div className="w-20 h-1 bg-sky-b" />
      <div className="w-[20vw] h-[20vh] text-white border-2 border-[#20d1f5] rounded-[2rem] p-[1rem] flex flex-col">
        <span>Sahil Verma</span>
        <span>21</span>
        <span>Male</span>
      </div>
    </div>
  </div>
  <div>Right</div>
</div> */
}
{
  /* <div className="flex justify-center items-center w-full h-full">
  <img src={about_img} alt="Profile" className="w-[50%]" />
</div> */
}
