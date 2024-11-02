import PlusIcon from "@/components/ui/PlusIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import { User } from "@/redux/slice/auth/auth";
import { Prfl } from "@/redux/slice/profile/profile";
import React from "react";

type Props = {
  theme:string;
  userData:User | null;
  profile:Prfl | null;
}
const Hero = ({theme, userData, profile}:Props) => {
  console.log(profile)
  return (
    <div className="hero">
      <div className={`upper h-72 w-full ${theme === "white" ? "bg-[#f1f1f1]": "bg-[#454545]"} `}></div>
      <div className={`down flex justify-between px-8 ${theme === "white" ? "bg-white": "bg-black border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}>
        <div className="about flex gap-4 items-center">
          <div className={`profile_pic mt-[-50px] rounded-full w-44 h-44 flex justify-center items-center ${theme === "white" ? "bg-white": "bg-gray-600"}`}>
            <img
              className="rounded-full w-[172px] h-[172px]"
              src={profile?.profile_photo}
              alt=""
            />
          </div>
          <div className="details">
            <h1 className="text-3xl font-semibold">
              {userData?.name}
              </h1>
            <p className="text-slate-400">
              {profile?.bio}
            </p>
          </div>
        </div>

        <div className="btns flex gap-4 items-center">
          <button className={`border-2 p-2 rounded-lg ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
            <div className="rotate-90">
              <ThreeDot />
            </div>
          </button>
          <button className={`border-2 p-2 rounded-lg ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>Hire me</button>
          <button className={`flex items-center p-2 pr-4 rounded-md text-sm ${theme === "white" ? "bg-white": "bg-secondblack border border-gray-600"}`}>
            <PlusIcon color="#fff" /> Follow
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
