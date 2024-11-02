"use client";
import AzImg from "@/components/ui/AzImg";
import DownArrow from "@/components/ui/DownArrow";
import Notification from "@/components/ui/Notification";
import PlusIcon from "@/components/ui/PlusIcon";
import ProfileIcon from "@/components/ui/ProfileIcon";
import SearchIcon from "@/components/ui/SearchIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import { getUserData, User } from "@/redux/slice/auth/auth";
import { AppDispatch, RootState } from "@/redux/store/store";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const heroLinks = [
  { title:"Explore", url:"/"},{ title:"My Community", url:"/mycommunity"},{ title:"Events", url:"/events"} ,{ title:"Companies", url:"/companies"},{ title:"Resouces", url:"/resources"} ,{ title:"Settings", url:"/profile"} ];
type Props = {
  url: string;
};
const Navbar = ({ url }: Props) => {
  const [channelModal, setchannelModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  // const [isActive, setIsActive] = useState(0);
  const [userData, setUserData] = useState<User>();
  const router = useRouter();
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "white" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const pathname = usePathname()

  const addChannelModal = () => {
    setchannelModal(!channelModal);
  };
  const userProfileModal = () => {
    setUserModal(!userModal);
  };

  const handlelinkHover = (i: number, url:string) => {
    // setIsActive(i);
    router.push(url)
  };

  const users = useSelector((state: RootState) => state.users.users);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  useEffect(() => {
    const confirmedEmail = localStorage.getItem("confirmEmail");
    if (confirmedEmail) {
      console.log(confirmedEmail);
      const filteredUser = users.find((user) => user.email === confirmedEmail);
      console.log(filteredUser);
      if (filteredUser) {
        // const userData = dispatch(getUserDataById(filteredUser.user_id));
        // if (userData) {
        setUserData(filteredUser);
        localStorage.setItem("userInfo", JSON.stringify(filteredUser));
        // }
      }
    }
  }, [users]);

  const fullName = userData ? userData.name.split(" ")[0] : "User";

  return (
    <>
      <div className={`up pt-4 pb-4 border-b-2 ${theme === "white" ? "bg-white": "bg-dark border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}>
        <div className="container flex justify-between">
          <div
            className="logo flex gap-1 items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image width={50} height={30} alt="logo" src={"/images/logo.png"} />
            <h1 className="font-bold text-lg ">StudenV</h1>
          </div>

          <div className="sm:block hidden search_bar lg:flex relative w-1/2">
            <div className="icon absolute top-4 left-3">
              <SearchIcon />
            </div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className={`border-2 p-2 ps-10 rounded-lg w-full ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}
            />
          </div>

          <div className="right flex gap-5 items-center">

            <div className={`md:visible hidden language border p-1 rounded-3xl lg:flex gap-1 items-center cursor-pointer ${theme === "white" ? "bg-white": "bg-dark border-gray-600"}`}>
              <div className="">
                <AzImg />
              </div>
              <div className="text font-medium">AZ</div>
              <div className="arrow ps-2">
                <DownArrow />
              </div>
            </div>
            {/* <div className="cursor-pointer">
              <ChatIcon />
            </div> */}
            <div className="cursor-pointer md:block hidden">
              <Notification />
            </div>

            {userData ? (
              <div className="user flex gap-2 items-center relative">
                <div className="text">{fullName}</div>
                <Image
                  alt="user_img"
                  src={"/images/hamida.jpg"}
                  width={30}
                  height={30}
                  className="rounded-lg"
                />
                <div
                  className={`cursor-pointer ${userModal && "relative"}`}
                  onClick={() => userProfileModal()}
                >
                  <DownArrow />
                </div>
                {userModal && (
                  <div className={`cursor-pointer z-10 p-4 pr-1 absolute top-[50px] right-0 w-64 border rounded-xl flex flex-col gap-3 ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}>
                    <div
                      className="flex gap-4 items-center"
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 512 512"
                      >
                        <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
                      </svg>
                      Email configs
                    </div>
                    <div
                      className="flex gap-4 items-center"
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 512 512"
                      >
                        <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9l.3-.5z" />
                      </svg>
                      Notifications
                    </div>
                    <div
                      className="flex gap-4 items-center"
                      onClick={toggleTheme}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 128 512"
                      >
                        <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z" />
                      </svg>
                      Theme {theme}
                    </div>

                    <hr />

                    <div
                      className="flex gap-4 items-center text-blue-600"
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#285db8"
                        width={18}
                        height={18}
                        viewBox="0 0 512 512"
                      >
                        <path d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16zM232 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
                      </svg>
                      Upgrade account
                    </div>
                    <div
                      className="flex gap-2 items-center"
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 576 512"
                      >
                        <path d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l50.7 0L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3l0 50.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L160 0zM576 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM448 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm128 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM272 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM576 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                      </svg>
                      Contributions
                    </div>
                    <div
                      className="flex gap-4 items-center"
                      onClick={() => {
                        router.push("/profile");
                      }}
                    >
                      <ProfileIcon />
                      Edit profile
                    </div>
                    <hr />
                    <div
                      className="flex gap-4 items-center"
                      onClick={() => {
                        localStorage.clear();
                        router.push("/login");
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width={14}
                        height={14}
                      >
                        <path
                          fill="#000000"
                          d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"
                        />
                      </svg>
                      log out
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="cursor-pointer">login</div>
            )}

          </div>

        </div>
      </div>

      {url !== "profile" && (
        <div className={`down pt-6 border-b-2 ${theme === "white" ? "bg-white": "bg-dark border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}>
          <div className="container flex justify-between items-center">
            <div className="left flex gap-24 items-center w-full">
              <h1 className="font-semibold text-3xl mt-[-20px] md:visible hidden">Community</h1>

              <ul className="flex gap-6 text-[18px] font-medium max-w-[80%] overflow-x-auto scrollbar-none pe-4 me-6 md:ms-0 ms-4">
                {heroLinks.map((link, i) => (
                  <li
                    key={i}
                    className={`cursor-pointer shrink-0 ${
                      link.url === pathname &&
                      "text-blue-700 flex flex-col justify-between"
                    }`}
                    onClick={() => handlelinkHover(i, link.url)}
                  >
                    {link.title}
                    <div
                      className={`w-auto h-[2px] ${
                        link.url === pathname && "bg-blue-700 mt-6"
                      }`}
                    ></div>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`threedot cursor-pointer -mt-4 -ms-4 ${
                channelModal && "relative"
              }`}
              onClick={() => addChannelModal()}
            >
              <ThreeDot />
              {channelModal && (
                <div className={`p-4 pr-8 absolute top-6 right-0 w-48 border rounded-xl flex gap-2 items-center ${theme === "white" ? "bg-white": "bg-dark border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}>
                  <PlusIcon /> add channel
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
