"use client";
import AzImg from "@/components/ui/AzImg";
import ChatIcon from "@/components/ui/ChatIcon";
import DownArrow from "@/components/ui/DownArrow";
import Notification from "@/components/ui/Notification";
import PlusIcon from "@/components/ui/PlusIcon";
import SearchIcon from "@/components/ui/SearchIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import Image from "next/image";
import React, { useState } from "react";

const heroLinks = ["Explore", "My Community", "Event", "Settings"];

const Navbar = () => {
  const [channelModal, setchannelModal] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const addChannelModal = () => {
    setchannelModal(!channelModal);
  };
  const handlelinkHover = (i:number) => {
      setIsActive(i)
  }
  return (
    <>
      <div className="up pt-4 pb-4 border-b-2">
        <div className="container flex justify-between">
          <div className="logo flex gap-1 items-center cursor-pointer">
            <Image width={50} height={30} alt="logo" src={"/images/logo.png"} />
            <h1 className="font-bold text-lg ">StudenV</h1>
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
            <div className="language border p-1 rounded-3xl flex gap-1 items-center cursor-pointer">
              <div className="">
                <AzImg />
              </div>
              <div className="text font-medium">AZ</div>
              <div className="arrow ps-2">
                <DownArrow />
              </div>
            </div>
            <div className="cursor-pointer">
              <ChatIcon />
            </div>
            <div className="cursor-pointer">
              <Notification />
            </div>

            <div className="user flex gap-2 items-center">
              <div className="text">Hamida</div>
              <Image
                alt="user_img"
                src={"/images/hamida.jpg"}
                width={30}
                height={30}
                className="rounded-lg"
              />
              <div className="cursor-pointer">
                <DownArrow />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="down pt-6 border-b-2">
        <div className="container flex justify-between items-center">
          <div className="left flex gap-24 items-center">
            <h1 className="font-semibold text-3xl mt-[-20px]">Community</h1>

            <ul className="flex gap-6 text-[18px] font-medium">
              {heroLinks.map((link, i) => (
                <li key={i} className={`cursor-pointer ${isActive === i && "text-blue-700 flex flex-col justify-between"}`} onClick={()=> handlelinkHover(i)}>
                  {link}
                  <div className={`w-auto h-[2px] ${isActive === i && "bg-blue-700 mt-6"}`}></div>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`threedot cursor-pointer ${channelModal && "relative"}`}
            onClick={() => addChannelModal()}
          >
            <ThreeDot />
            {channelModal && (
              <div className="p-4 pr-8 absolute top-6 right-0 w-48 border rounded-xl bg-[#f9f9f9] flex gap-2 items-center">
                <PlusIcon /> add channel
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
