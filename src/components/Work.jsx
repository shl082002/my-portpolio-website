import React from "react";
import ModelsCanvas from "./canvas/Models.jsx";
import work from "../assets/work.jpg";

export default function Work() {
  return (
    <>
      <div
        className="relative w-full h-screen"
        style={{
          backgroundImage: `url(${work})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          overflow: "hidden",
        }}
      >
        {/* Three Fiber Model as Background */}
        <ModelsCanvas className="absolute top-0 left-0 w-full h-full" />

        {/* Overlay Text */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-[6rem] font-bold"
          style={{
            textShadow: "-1px 2px rgb(41 88 153)",
            fontWeight: "500",
          }}
        >
          Work & Projects
        </div>
      </div>
    </>
  );
}
