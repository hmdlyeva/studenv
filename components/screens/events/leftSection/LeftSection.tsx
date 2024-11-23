import React from "react";

const eventData = [1, 2, 3, 4, 5, 6, 7, 8];
interface IProps {
  theme: string;
};
const LeftSection = ({ theme }: IProps) => {
  return (
    <div className="left w-[95%] md:w-1/5 mx-auto flex flex-col">
      <div
        className={`card  border rounded-2xl ${
          theme === "white" ? "bg-white" : "bg-dark border-gray-600"
        }`}
      >
        <h1
          className={`font-semibold p-4 ${
            theme === "white" ? "text-black" : "text-white"
          }`}
        >
          All Types
        </h1>
        <div
          className={`${
            theme === "white" ? "bg-gray-300 h-[1px]" : "bg-gray-600 h-[1px]"
          }`}
        />
        <div className="channels max-h-[20vh] md:max-h-[66vh] md:overflow-y-auto overflow-x-auto scrollbar-none flex md:flex-col flex-row">
          {eventData.map((event, i) => (
            <div
              key={i}
              className={`channel px-4 py-4 min-w-[140px] flex flex-col gap-3 md:flex-row cursor-pointer ${theme === "white" ? "hover:bg-slate-50": "hover:bg-zinc-900"}`}
            >
              {/* <div className="img bg-slate-300 rounded-md w-16 h-16"></div> */}
              <div className="detail">
                {/* <p className="text-[10px] text-gray-400">19 DECEMBER 2022</p> */}
                <h3
                  className={`text-sm ${
                    theme === "white" ? "text-black" : "text-white"
                  }`}
                >
                 {i%4 === 0 ? "Education" : i%4 === 1 ? "StartUp" : i%4 === 2 ? "Hackaton" : "Job Application"}
                </h3>
                <p className="text-sm text-gray-400">
                  912 People has join this event
                </p>
              </div>
            </div>
          ))}
        </div>
        <button className="rounded-3xl border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 p-1 m-4 w-[90%] ">
          See All
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
