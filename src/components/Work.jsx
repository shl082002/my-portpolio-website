import React from "react";

export default function Work() {
  return (
    <>
      <div className="flex items-center justify-center py-[2rem]">
        <div className="flex items-center w-full">
          <hr className="flex-1 border-dashed border-2 mx-6" />
          <span className="text-white text-[2.5rem]">Work Experience</span>
          <hr className="flex-1 border-dashed border-2 mx-6" />
        </div>
      </div>
      <div className="px-[2rem]">
        <div className="text-white grid grid-cols-4 gap-[2rem] p-[2rem]">
          <div className="bg-[#0d0d14] h-[50vh]">
            {/* preview */}
            <div className="bg-transparent">preview</div>
            {/* desc */}
            <div className="bg-transparent">work description</div>
            {/* links */}
            <div className="bg-transparent">links</div>
          </div>
          <div className="bg-[#0d0d14] h-[50vh]">
            {/* preview */}
            <div className="bg-transparent">preview</div>
            {/* desc */}
            <div className="bg-transparent">work description</div>
            {/* links */}
            <div className="bg-transparent">links</div>
          </div>
          <div className="bg-[#0d0d14] h-[50vh]">
            {/* preview */}
            <div className="bg-transparent">preview</div>
            {/* desc */}
            <div className="bg-transparent">work description</div>
            {/* links */}
            <div className="bg-transparent">links</div>
          </div>
          <div className="bg-[#0d0d14] h-[50vh]">
            {/* preview */}
            <div className="bg-transparent">preview</div>
            {/* desc */}
            <div className="bg-transparent">work description</div>
            {/* links */}
            <div className="bg-transparent">links</div>
          </div>
        </div>
      </div>
    </>
  );
}
