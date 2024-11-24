import { ICompany } from "@/types/common.type";
import React from "react";

// const companiesData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
interface IProps {
  theme: string;
  companies: ICompany[];
  setClickedCompany: React.Dispatch<React.SetStateAction<string>>;
};
const LeftSection = ({ theme , companies, setClickedCompany}: IProps) => {

  return (
    <div className="left w-[95%] md:w-2/5 mx-auto flex flex-col">
      <div
        className={`card border border-t-0 ${
          theme === "white" ? "bg-white" : "bg-dark border-gray-600"
        }`}
      >
        <div className="channels h-auto max-h-[93vh] md:h-auto md:overflow-y-auto overflow-x-auto flex md:flex-col flex-row md:gap-1 gap-1">
          {companies && companies?.map((comp, i) => (
            <div
              key={i} onClick={()=>setClickedCompany(comp.id)}
              className={`channel p-4 ps-6 min-w-[160px] flex flex-col items-center gap-4 md:flex-row cursor-pointer ${theme === "white" ? "hover:bg-slate-50": "hover:bg-zinc-900"}`}
            >
              <div className="img bg-slate-300 rounded-full w-12 h-12"></div>
              <div className="detail">
                <h3
                  className={`text-sm ${
                    theme === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {comp.name}
                </h3>
                <p className="text-sm text-gray-400 pt-2">
                 {comp.industry}
                </p>
              </div>
              <div
                className={`${
                  theme === "white"
                    ? "bg-gray-300 h-[1px]"
                    : "bg-gray-600 h-[1px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
