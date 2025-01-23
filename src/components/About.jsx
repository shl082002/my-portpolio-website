import React from "react";
import about_img from "../assets/about-image.svg";
import Skills from "./Skills";

export default function About() {
  return (
    <>
      <header className="flex items-center justify-center py-[2rem]">
        <div className="flex items-center w-full">
          <hr className="flex-1 border-dashed border-2 mx-6" />
          <span className="text-white text-[2.5rem]">About Me</span>
          <hr className="flex-1 border-dashed border-2 mx-6" />
        </div>
      </header>
      <main className="grid grid-cols-2">
        {/* left-section */}
        <section>
          <div className="flex justify-center items-center w-full h-full">
            <img src={about_img} alt="Profile" className="w-[80%]" />
          </div>
        </section>
        {/* right-section */}
        <section className="px-[2rem] flex justify-center items-center">
          <div className="text-[1.5rem] tracking-wider text-white">
            Greetings! I'm Sahil Verma, an undergraduate fellow hailing from a
            quaint village in the Jalaun district of Uttar Pradesh. Born into a
            family where my father tills the land as a farmer and my mother
            tends to our home, my roots run deep in simplicity. My academic
            journey led me through the corridors of Maharishi Vidya Mandir, a
            CBSE-affiliated school. In the pursuit of knowledge and a desire to
            create something extraordinary, I am currently enrolled at the
            esteemed Indian Institute of Technology, Bombay. Here at IIT Bombay,
            I am expanding my horizons in the field of technology. My days are
            often consumed by the glow of computer screens as I delve into the
            vast realm of technology. I've cultivated a profound interest in
            unraveling the mysteries of the digital world. Though not
            particularly inclined towards physical activities, my passion lies
            in the virtual landscapes I explore daily. Armed with knowledge in
            full-stack development, I am relentless in my pursuit of learning
            and discovering more. Join me on this journey as I aspire to
            contribute my bit to the ever-evolving world of technology.
          </div>
        </section>
      </main>
    </>
  );
}
