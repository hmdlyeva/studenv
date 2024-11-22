"use client"
import ThreeDot from "@/components/ui/ThreeDot";
import { IEvent, ITag } from "@/types/common.type";
import React from "react";

const hastagData = [1, 2, 3];
// const otherEventData = [1, 2, 3];
// type Props = {
// };

interface IProps {
  theme : string;
  events: IEvent[];
  weeklyPopularTags:ITag[];
  upcomingEvents:IEvent[];
}

const RightSection = ({theme, events, weeklyPopularTags, upcomingEvents}:IProps) => {
  // const event = useSelector((state: RootState) => state.events.events);
  // const dispatch: AppDispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getEventData());
  // }, []);

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
    <div className="right w-1/4 lg:flex flex-col gap-6 md:visible hidden">
      <div className={`card  border rounded-2xl ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}>
        <h1 className={`font-semibold p-4 ${theme === "white" ? "text-black": "text-white"}`}>Popular Hastag on This Day</h1>
        <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
        <div className="hastags flex flex-col py-2">
          {weeklyPopularTags.map((hastag, i) => (
            <div key={i} className="hastag px-4 py-2 flex justify-between items-center hover:bg-[#f9f9f9] cursor-pointer">
              <div className="left flex flex-col justify-between gap-2">
                <h3 className={`text-sm font-semibold ${theme === "white" ? "text-black": "text-white"}`}>
                  #{hastag.name}
                </h3>
                <p className="text-sm text-gray-400">{hastag.count}rb posting</p>
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
        <h1 className={`font-semibold p-4 ${theme === "white" ? "text-black": "text-white"}`}>Upcoming Event</h1>
        <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
        <div className="events pt-2 pb-2 max-h-[33vh] overflow-y-auto ">
          {upcomingEvents && upcomingEvents.map((event, i) => (
            <div key={i} className="event p-4 flex flex-col gap-3 md:flex-row cursor-pointer hover:bg-[#f9f9f9]">
              {/* <div className="img bg-slate-300 rounded-md w-16 h-16"></div> */}
              <div className="detail">
                <p className="text-[10px] text-gray-400">{formatDate(event.date_of_created)}</p>
                <h3 className={`text-sm ${theme === "white" ? "text-black": "text-white"}`}>{event.title}</h3>
                <p className="text-sm text-gray-400 pt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}

        </div>
          <button className="rounded-3xl border-2 hover:bg-blue-500 hover:text-white border-blue-500 text-blue-500 p-1 m-4 w-[90%]">
            See All
          </button>
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
