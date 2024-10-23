"use client";
import AzImg from "@/components/ui/AzImg";
import ChatIcon from "@/components/ui/ChatIcon";
import DownArrow from "@/components/ui/DownArrow";
import Notification from "@/components/ui/Notification";
import PlusIcon from "@/components/ui/PlusIcon";
import SearchIcon from "@/components/ui/SearchIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import { getUserData, getUserDataById, User } from "@/redux/slice/auth/auth";
import { AppDispatch, RootState } from "@/redux/store/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const heroLinks = ["Explore", "My Community", "Event", "Settings"];

const Navbar = () => {
  const [channelModal, setchannelModal] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  const [isActive, setIsActive] = useState(0);
  const [luserData, setUserData] = useState<User>();
const router = useRouter()

  const addChannelModal = () => {
    setchannelModal(!channelModal);
  };
  const logoutModal = () => {
    setLogOutModal(!logOutModal);
  };

  const handlelinkHover = (i:number) => {
      setIsActive(i)
  }

  const users = useSelector((state: RootState) => state.users.users);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);


  useEffect(() => {
    const confirmedEmail = localStorage.getItem("confirmEmail");
    if (confirmedEmail) {
      console.log(confirmedEmail)
      const filteredUser = users.find(user => user.email === confirmedEmail);
      console.log(filteredUser)
      if (filteredUser) {
          // const userData = dispatch(getUserDataById(filteredUser.user_id)); 
          // if (userData) {
            setUserData(filteredUser); 
            localStorage.setItem("userInfo", JSON.stringify(filteredUser));
          // }
        };

      }
  }, [users])
  

  const fullName = luserData ? luserData.name.split(' ')[0] : "User";

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
              <div className="text">{fullName}</div>
              <Image
                alt="user_img"
                src={"/images/hamida.jpg"}
                width={30}
                height={30}
                className="rounded-lg"
              />
              <div className={`cursor-pointer ${logOutModal && "relative"}`}  onClick={() => logoutModal()}>
                <DownArrow />
              </div>
              {logOutModal && (
              <div className="cursor-pointer p-4 pr-1 absolute top-16 right-14 w-48 border rounded-xl bg-[#f9f9f9] flex gap-2 items-center" onClick={()=> {
                localStorage.clear()
                router.push("/login")
              }}>
              <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={14} height={14}><path fill="#000000" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg>
                </div> log out
              </div>
            )}

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
