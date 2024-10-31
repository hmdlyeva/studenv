"use client"
import ThreeDot from "@/components/ui/ThreeDot";
import { getEventData } from "@/redux/slice/event/event";
import { AppDispatch, RootState } from "@/redux/store/store";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const hastagData = [1, 2, 3];
// const otherEventData = [1, 2, 3];
// type Props = {
// };

type Props = {
  theme : string;
}

const RightSection = ({theme}:Props) => {
  const event = useSelector((state: RootState) => state.events.events);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventData());
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  console.log(event)
  return (
    <div className="right w-1/4 lg:flex flex-col gap-6 md:visible hidden">
      <div className={`card  border rounded-2xl ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
        <h1 className={`font-semibold p-4 ${theme === "white" ? "text-black": "text-white"}`}>Popular Hastag on This Day</h1>
        <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
        <div className="hastags p-4 flex flex-col gap-4">
          {hastagData.map((hastag, i) => (
            <div key={i} className="hastag flex justify-between items-center">
              <div className="left flex flex-col justify-between gap-2">
                <h3 className={`text-sm font-semibold ${theme === "white" ? "text-black": "text-white"}`}>
                  #Baku State University
                </h3>
                <p className="text-sm text-gray-400">323rb posting</p>
              </div>
              <div className="rotate-90 pr-10 cursor-pointer">
                <ThreeDot />
              </div>
            </div>
          ))}
        </div>
        <button className="hover:bg-blue-500 hover:text-white rounded-3xl border-2 border-blue-500 text-blue-500 p-1 m-4 w-[90%]">
          See All
        </button>
      </div>

      <div className={`card  border rounded-2xl ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
        <h1 className={`font-semibold p-4 ${theme === "white" ? "text-black": "text-white"}`}>Other Event</h1>
        <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
        <div className="events pt-2 pb-2">
          {event && event.map((event, i) => (
            <div key={i} className="event p-4 flex flex-col gap-3 md:flex-row cursor-pointer">
              <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
              <div className="detail">
                <p className="text-[10px] text-gray-400">{formatDate(event.date_of_created)}</p>
                <h3 className={`text-sm ${theme === "white" ? "text-black": "text-white"}`}>{event.title}</h3>
                <p className="text-sm text-gray-400 pt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}

          <button className="rounded-3xl border-2 hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 p-1 m-4 w-[90%]">
            See All
          </button>
        </div>
      </div>

      <div className="footer p-4 text-gray-500">
        <ul className="flex flex-wrap gap-2 leading-none">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
          <li>Accessibility</li>
          <li>Ads info</li>
          <li>More...</li>
        </ul>
        <p className="pt-1">© 2024 StudenV. Inc.</p>
      </div>
    </div>
  );
};

export default RightSection;
