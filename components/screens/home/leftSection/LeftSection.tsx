import { ICommunityPopular, IEvent } from "@/types/common.type";
import React from "react";

interface IProps {
  theme: string;
  communitiesPopular: ICommunityPopular[];
  latestEvents: IEvent[];
}
const LeftSection = ({ theme, communitiesPopular, latestEvents }: IProps) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  return (
    <div className="left w-1/4 lg:flex flex-col gap-6 md:visible hidden sticky top-40 h-[80vh] overflow-y-auto scrollbar-none">
      <div
        className={`card border rounded-2xl w-full flex flex-col justify-center ${
          theme === "white" ? "bg-white" : "bg-dark border-gray-600"
        }`}
      >
        <h1
          className={`font-semibold p-4 ${
            theme === "white" ? "text-black" : "text-white"
          }`}
        >
          Popular Community
        </h1>
        <div
          className={`${
            theme === "white" ? "bg-gray-300 h-[1px]" : "bg-gray-600 h-[1px]"
          }`}
        />
        <div className="channels pt-2 pb-2">
          {communitiesPopular?.map((chanel, i) => (
            <div
              key={i}
              className="channel p-4 flex flex-col gap-3 md:flex-row cursor-pointer w-full items-center hover:bg-[#f9f9f9]"
            >
              <div className="img bg-slate-300 rounded-md w-1/3 h-16 overflow-hidden">
                <img
                  src={chanel.img_url || "images/Image-not-found.png"}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="detail w-2/3 mt-2">
                <p className="text-[10px] text-gray-400 leading-3 -mt-1 truncate">
                  {chanel.description}
                </p>
                <h3
                  className={`"text-sm truncate leading-[15px] pt-1 " ${
                    theme === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {chanel.name}
                </h3>
                <p className="text-sm text-gray-400 pt-3">
                  {chanel.member_count} Member
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="rounded-3xl border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 w-[90%] mx-auto mb-4">
          See All
        </button>
      </div>

      <div
        className={`card border rounded-2xl ${
          theme === "white" ? "bg-white" : "bg-dark border-gray-600"
        }`}
      >
        <h1
          className={`font-semibold p-4 ${
            theme === "white" ? "text-black" : "text-white"
          }`}
        >
          Latest Event
        </h1>
        <div
          className={`${
            theme === "white" ? "bg-gray-300 h-[1px]" : "bg-gray-600 h-[1px]"
          }`}
        />
        <div className="events pt-2 pb-2 ">
          {latestEvents?.map((event, i) => (
            <div
              key={i}
              className="event p-4 flex flex-col gap-3 md:flex-row cursor-pointer hover:bg-[#f9f9f9]"
            >
              <div className="img bg-slate-300 rounded-md w-16 h-16 overflow-hidden">
                <img
                  src={event.img_url || "images/Image-not-found.png"}
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="detail">
                <p className="text-[10px] text-gray-400">
                  {formatDate(event.date_of_created)}
                </p>
                <h3
                  className={`"text-sm" ${
                    theme === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {event.title}
                </h3>
                <p className="text-sm text-gray-400 pt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
