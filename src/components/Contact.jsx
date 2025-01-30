import React from "react";

export default function Contact() {
  return (
    <>
      {/* <div className="flex items-center justify-center py-[2rem]">
        <div className="flex items-center w-full">
          <hr className="flex-1 border-dashed border-2 mx-6" />
          <span className="text-white text-[2.5rem]">Contact Me</span>
          <hr className="flex-1 border-dashed border-2 mx-6" />
        </div>
      </div> */}

      {/* from-about-me */}
      <div className="grid grid-rows-3 px-[2rem] gap-8">
        {/* personal-info */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center w-full">
            <div className="w-full h-1 bg-white" />
            <div className="w-[6rem] h-[2.5rem] rounded-[999rem] bg-white" />
            <div className="w-full h-1 bg-white" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[2px] h-[10vh] bg-white" />
            <div className="text-white bg-transparent w-[30vw] h-[100%]">
              Hello
            </div>
          </div>
        </div>

        {/* education-info */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center w-full">
            <div className="w-full h-1 bg-white" />
            <div className="w-[6rem] h-[2.5rem] rounded-[999rem] bg-white" />
            <div className="w-full h-1 bg-white" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[2px] h-[10vh] bg-white" />
            <div className="text-white bg-transparent w-[30vw] h-[100%]">
              Hello
            </div>
          </div>
        </div>

        {/* professional-info */}
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-center items-center w-full">
            <div className="w-full h-1 bg-white" />
            <div className="w-[6rem] h-[2.5rem] rounded-[999rem] bg-white" />
            <div className="w-full h-1 bg-white" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="w-[2px] h-[10vh] bg-white" />
            <div className="text-white bg-transparent w-[30vw] h-[100%]">
              Hello
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
