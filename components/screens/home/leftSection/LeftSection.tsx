import React from "react";

const channelData = [1, 2, 3, 4];
const eventData = [1, 2, 3];
type Props = {
  theme:string;
}
const LeftSection = ({theme}:Props) => {
  return (
    <div className="left w-1/4 lg:flex flex-col gap-6 md:visible hidden">
      <div className={`card border rounded-2xl ${theme === "white" ? "bg-white": "bg-dark border-gray-600"}`}>
        <h1 className={`font-semibold p-4 ${theme === "white" ? "text-black": "text-white"}`}>My Community</h1>
        <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
        <div className="channels pt-2 pb-2">
          {channelData.map((chanel, i) => (
            <div
              key={i}
              className="channel p-4 flex flex-col gap-3 md:flex-row cursor-pointer"
            >
              <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
              <div className="detail">
                <p className="text-[10px] text-gray-400">PRIVATE COMMUNITY</p>
                <h3 className={`"text-sm" ${theme === "white" ? "text-black": "text-white"}`}>Designer Pemula</h3>
                <p className="text-sm text-gray-400 pt-2">48 Member</p>
              </div>
            </div>
          ))}
        </div>
        <button className="rounded-3xl border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 p-1 m-4 w-[90%] ">
          See All
        </button>
      </div>

      <div className={`card border rounded-2xl ${theme === "white" ? "bg-white": "bg-dark border-gray-600"}`}>
      <h1 className={`font-semibold p-4 ${theme === "white" ? "text-black": "text-white"}`}>My Event</h1>
      <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
        <div className="events pt-2 pb-2 ">
          {eventData.map((event, i) => (
            <div key={i} className="event p-4 flex flex-col gap-3 md:flex-row cursor-pointer">
              <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
              <div className="detail">
                <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                <h3 className={`"text-sm" ${theme === "white" ? "text-black": "text-white"}`}>We The Fest (Wtf)</h3>
                <p className="text-sm text-gray-400 pt-2">
                  912 People has jointhis event
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
