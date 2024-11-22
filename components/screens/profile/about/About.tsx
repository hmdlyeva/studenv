import Arrow from "@/components/ui/Arrow";
import DownArrow from "@/components/ui/DownArrow";
import { User } from "@/redux/slice/auth/auth";
import { Prfl } from "@/redux/slice/profile/profile";
import { IProfile } from "@/types/common.type";
import React from "react";

type Props = {
  theme:string;
  profile: IProfile;
}
const About = ({theme, profile}:Props) => {
  return (
    <div className={`about w-full flex md:flex-row flex-col gap-10 py-20 ${theme === "white" ? "text-black": "text-white"}`}>
      <div className={`left md:w-[55%] mx-auto w-[95%] rounded-xl flex flex-col justify-between p-8 ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
        <div className="upper flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Experience</h2>
          <p>
            {profile?.bio}
          </p>
        </div>
        <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
        <div className="down flex flex-col gap-4 max-w-[90%]">
          <h3 className="font-semibold text-lg">About me</h3>
          <p>
            {profile?.bio}
          </p>

          <p>
            My work has been featured on Typewolf, Mindsparkle magazine,
            Webflow, Fonts in Use, CSS Winner, httpster, Siteinspire, and Best
            Website Gallery.
          </p>

          <span className="flex items-center gap-1 font-semibold mt-2">
            Read more <DownArrow />
          </span>
        </div>
      </div>

      <div className={`right md:w-[55%] mx-auto w-[95%] rounded-xl p-8 ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
        <h3 className="font-semibold text-lg">Skills</h3>
        <div className="tags my-3">
          <ul className="flex items-center gap-2">
            <li className={`rounded-2xl border p-1 px-3 flex justify-center items-center font-medium ${theme === "white" ? "border-black text-black": "border-gray-600 text-white"}`}>
              UX Design
            </li>
            <li className={`rounded-2xl border p-1 px-3 flex justify-center items-center font-medium ${theme === "white" ? "border-black text-black": "border-gray-600 text-white"}`}>
              Product Design
            </li>
            <li className={`rounded-2xl border p-1 px-3 flex justify-center items-center font-medium ${theme === "white" ? "border-black text-black": "border-gray-600 text-white"}`}>
              Webflow
            </li>
            <li className={`rounded-2xl border p-1 px-3 flex justify-center items-center font-medium ${theme === "white" ? "border-black text-black": "border-gray-600 text-white"}`}>
              Figma
            </li>
          </ul>
        </div>

        <h3 className="font-semibold text-lg mt-6">Location</h3>
        <div className="location flex items-center gap-3 my-2">
          <img
            className="rounded-full w-6 h-6"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png"
            alt=""
          />
          <p className="font-[600]">{profile?.address}</p>
        </div>

        <h3 className="font-semibold text-lg mt-6">Website</h3>
        <div className="location flex items-center gap-3 my-2">
          <a href={profile?.social_links} className="font-[600]">{profile?.social_links}</a>
          <div className="-rotate-45">
            <Arrow />
          </div>
        </div>

        <h3 className="font-semibold text-lg mt-6">Email</h3>
        <div className="location flex items-center gap-3 my-2">
          <p className="font-[600]">{profile?.email}</p>
          <div className="-rotate-45">
            <Arrow />
          </div>
        </div>


        <div className="btns w-full flex gap-4 mt-8">
            <button className={`p-2 w-1/2 border rounded-lg ${theme === "white" ? "bg-white text-black": "bg-black text-white border-gray-600"}`}>Add to list</button>
            <button className="bg-black p-2 w-1/2 border rounded-lg text-white">Message</button>
        </div>
      </div>
    </div>
  );
};

export default About;
