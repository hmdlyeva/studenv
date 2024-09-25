import AzImg from "@/components/ui/AzImg";
import ChatIcon from "@/components/ui/ChatIcon";
import DownArrow from "@/components/ui/DownArrow";
import Notification from "@/components/ui/Notification";
import SearchIcon from "@/components/ui/SearchIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import Image from "next/image";
import React from "react";


const Navbar = () => {
  return (
    <>
      <div className="up pt-4 pb-4 border-b-2">
        <div className="container flex justify-between">
          <div className="logo flex gap-1 items-center">
            <Image width={50} height={30} alt="logo" src={"/images/logo.png"} />
            <h1 className="font-bold text-lg">StudenV</h1>
          </div>

          <div className="search_bar flex relative w-1/2">
            <div className="icon absolute top-4 left-3">
              <SearchIcon />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className="border-2 p-2 ps-10 rounded-lg w-full bg-[#f9f9f9]"
            />
          </div>
          <div className="right flex gap-5 items-center">
            <div className="language border p-1 rounded-3xl flex gap-1 items-center">
              <div className="">
                <AzImg />
              </div>
              <div className="text font-medium">AZ</div>
              <div className="arrow ps-2">
                <DownArrow />
              </div>
            </div>
            <ChatIcon />
            <Notification />

            <div className="user flex gap-2 items-center">
              <div className="text">Hamida</div>
              <div className="img w-7 h-7 rounded-lg bg-slate-400"></div>
              <DownArrow />
            </div>
          </div>
        </div>
      </div>

      <div className="down pt-6 pb-6 border-b-2">
        <div className="container flex justify-between items-center">
          <div className="left flex gap-24 items-center">
            <h1 className="font-semibold text-3xl">Community</h1>

            <ul className="flex gap-6 text-[18px] font-medium">
              <li className="text-blue-700">Explore</li>
              <li>My Community</li>
              <li>Event</li>
              <li>Settings</li>
            </ul>
          </div>

          <div className="threedot">
            <ThreeDot />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
