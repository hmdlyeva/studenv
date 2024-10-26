import PlusIcon from "@/components/ui/PlusIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import React from "react";


const Hero = () => {
  return (
    <div className="hero">
      <div className="upper bg-[#f9f9f9] h-72 w-full"></div>
      <div className="down flex justify-between bg-white px-8">
        <div className="about flex gap-4 items-center">
          <div className="profile_pic mt-[-50px] rounded-full w-44 h-44 bg-white flex justify-center items-center">
            <img
              className="rounded-full w-[172px] h-[172px]"
              src="https://i.pinimg.com/736x/fb/99/a5/fb99a5c7ce5b313ed1c4e71ee0260a9b.jpg"
              alt=""
            />
          </div>
          <div className="details">
            <h1 className="text-3xl font-semibold">Mina Winkel</h1>
            <p className="text-slate-400">
              I&apos;m a Product Designer based in Melbourne.
            </p>
          </div>
        </div>

        <div className="btns flex gap-4 items-center">
          <button className="border-2 p-2 rounded-lg">
            <div className="rotate-90">
              <ThreeDot />
            </div>
          </button>
          <button className="border-2 p-2 rounded-lg">Hire me</button>
          <button className="flex items-center bg-black text-white p-2 pr-4 rounded-md text-sm">
            <PlusIcon color="#fff" /> Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
