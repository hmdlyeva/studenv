import { ICommunity } from "@/types/common.type";
import React from "react";
import Card from "../communityCard/Card";

interface IProps {
  theme: string;
  communities: ICommunity[];
  setSelectedCommunity: React.Dispatch<React.SetStateAction<string>>;
}
const LeftSection = ({ theme, communities, setSelectedCommunity }: IProps) => {
  return (
    <div className="left w-[95%] md:w-2/5 mx-auto flex flex-col pt-32">
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
          My Community
        </h1>
        <div
          className={`${
            theme === "white" ? "bg-gray-300 h-[1px]" : "bg-gray-600 h-[1px]"
          }`}
        />
        <div className="channels max-h-[20vh] md:max-h-[66vh] md:overflow-y-auto overflow-x-auto scrollbar-none flex md:flex-col flex-row">
          {communities.map((chanel, i: number) => (
            <div key={i}>
              <Card
                chanel={chanel}
                theme={theme}
                setSelectedCommunity={setSelectedCommunity}
              />
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
