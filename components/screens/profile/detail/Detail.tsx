import ProfileIcon from "@/components/ui/ProfileIcon";
import Time from "@/components/ui/Time";
import { IProfile } from "@/types/common.type";
import React from "react";
type Props = {
  theme:string;
  profile:IProfile;
}
const Detail = ({theme, profile}:Props) => {
  return (
    <div className={`detail ${theme === "white" ? "text-black": "text-white"}`}>
      <div className="sections flex w-full items-center my-10 mt-16 gap-6">
        <div className={`persentage flex items-center w-1/2 border rounded-xl p-4 gap-4 ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
          <div className={`circle border-2 w-20 h-20 rounded-full flex justify-center items-center ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
            <ProfileIcon color="#a2a2a2"/>
          </div>
          <div className="detail">
            <h2 className="font-semibold text-lg">12%</h2>
            <p>of the profile is filled out</p>
          </div>
        </div>

        <div className={`hours flex items-center w-1/2 border rounded-xl p-4 gap-4 ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
        <div className={`circle border-2 w-20 h-20 rounded-full flex justify-center items-center ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
            <Time />
          </div>
          <div className="detail">
            <h2 className="font-semibold text-lg">147h</h2>
            <p>reported time this month</p>
          </div>
        </div>
      </div>

      <div className={`p-10 border my-2 rounded-lg flex md:flex-row flex-col justify-between w-full items-center ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
        <div className="left md:w-2/5 w-[95%] mx-auto flex flex-col gap-6 ">
          <p>One important thing...</p>
          <h1 className="font-semibold text-xl">
            Arlene is waiting for the draft contact
          </h1>
          <button className="text-white p-2 px-4 w-48 rounded-lg flex justify-center items-center bg-blue-500 hover:bg-blue-700">
            Create contact
          </button>
        </div>



        <div className={`right md:w-3/5 w-[95%] mx-auto m-2 border rounded-sm py-10 px-16 ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
          <div className="up flex gap-20 items-center pb-4">
            <img
              src={profile?.profile_photo}
              alt=""
              className="w-28 h-28 rounded-full"
            />
            <div className="detail">
              <h1 className="font-semibold text-3xl leading-8">
                {profile?.name}
              </h1>
              <p className="text-lg">{profile?.major}</p>
            </div>
          </div>

          <div className="down flex w-full gap-40 items-center">
            <div className="left flex flex-col gap-44 justify-between w-1/3">
              <div className="edu flex flex-col gap-4">
                <h3 className="font-semibold text-xl">Education</h3>
                <div className="h-[2px] bg-blue-800 w-auto"></div>
                <ul className="flex flex-col gap-10">
                  <li>
                    <p>2014-2016</p>
                    <p>{profile?.year_of_study} course</p>
                    <p>{profile?.university}</p>
                  </li>
                  <li>
                    <p>2010-2014</p>
                    <p>{profile?.year_of_study} course</p>
                    <p>{profile?.university}</p>
                  </li>
                  <li>
                    <p>2008-2010</p>
                    <p>{profile?.year_of_study} course</p>
                    <p>{profile?.university}</p>
                  </li>
                </ul>
              </div>

              <div className="cont flex flex-col gap-4">
                <h3 className="font-semibold text-xl">Contact</h3>
                <div className="h-[2px] bg-blue-800 w-auto"></div>

                <ul>
                  <li>
                    <p>Phone</p>
                    <p>+994 {profile?.phone_number}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-2/3 flex flex-col justify-between gap-10 items-center">
              <div className="profile flex flex-col gap-4">
                <h3 className="font-semibold text-xl">Profile</h3>
                <div className="h-[2px] bg-blue-800 w-auto"></div>

                <ul>
                  <li>
                   
                   {profile?.bio}
                  </li>
                </ul>
              </div>

              <div className="experience flex flex-col gap-4">
                <h3 className="font-semibold text-xl">Experience</h3>
                <div className="h-[2px] bg-blue-800 w-auto"></div>

                <ul>
                  <li className="flex gap-4 items-center">
                    <div className="left flex flex-col gap-2">
                      <p>2020-Present</p>
                      <p>Company Name</p>
                    </div>
                    <div className="right flex flex-col gap-2 w-3/5">
                      <h3 className="">Software Developer</h3>
                      <p>
                        {profile?.bio}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="left flex flex-col gap-2">
                      <p>2020-Present</p>
                      <p>Company Name</p>
                    </div>
                    <div className="right flex flex-col gap-2 w-3/5">
                      <h3 className="">Senior UX DEsigner</h3>
                      <p>
                        Lorem ipsum dolor sit amet is simply dump offered the
                        printing and typesetting industry.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-center">
                    <div className="left flex flex-col gap-2">
                      <p>2020-Present</p>
                      <p>Company Name</p>
                    </div>
                    <div className="right flex flex-col gap-2 w-3/5">
                      <h3 className="">Senior UX DEsigner</h3>
                      <p>
                        Lorem ipsum dolor sit amet is simply dump offered the
                        printing and typesetting industry.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default Detail;
