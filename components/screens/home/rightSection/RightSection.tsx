import ThreeDot from "@/components/ui/ThreeDot";
import React from "react";

type Props = {};

const hastagData = [1, 2, 3];
const otherEventData = [1, 2, 3];

const RightSection = (props: Props) => {
  return (
    <div className="right w-1/4 flex flex-col gap-6">
      <div className="card bg-white border rounded-2xl">
        <h1 className="font-semibold p-4">Popular Hastag on This Day</h1>
        <hr />
        <div className="hastags p-4 flex flex-col gap-4">
          {hastagData.map((hastag, i) => (
            <div key={i} className="hastag flex justify-between items-center">
              <div className="left flex flex-col justify-between gap-2">
                <h3 className="text-sm font-semibold">
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
        <button className="rounded-3xl border-2 border-blue-500 text-blue-500 p-1 m-4 w-[90%]">
          See All
        </button>
      </div>

      <div className="card bg-white border rounded-2xl">
        <h1 className="font-semibold p-4">Other Event</h1>
        <hr />
        <div className="events pt-2 pb-2">
          {otherEventData.map((event, i) => (
            <div key={i} className="event p-4 flex flex-col gap-3 md:flex-row cursor-pointer">
              <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
              <div className="detail">
                <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p>
                <h3 className="text-sm">We The Fest (Wtf)</h3>
                <p className="text-sm text-gray-400 pt-2">
                  912 People has jointhis event
                </p>
              </div>
            </div>
          ))}

          <button className="rounded-3xl border-2 border-blue-500 text-blue-500 p-1 m-4 w-[90%]">
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
