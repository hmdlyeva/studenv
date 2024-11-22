import React from "react";


const months = [
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Now",
  "Dec",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
];
type Props = {
  theme:string;
}
const days = 52 * 7;

const Strike = ({theme}:Props) => {
  return (
    <div className={`strike p-4 mb-8 nax-w-[95%] mx-auto rounded-xl ${theme === "white" ? "bg-whitesecond text-black": "bg-black text-white border border-gray-600"}`}>
      <h2 className="font-semibold text-lg my-2 mb-8">1,390 strike in the last month</h2>

      <div className="strikes my-4">
        <div className="months flex gap-16">
          {months.map((m, i) => (
            <p key={i}>{m}</p>
          ))}
        </div>

        <div className="days flex gap-1 flex-wrap">
          {Array.from({ length: days }).map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-sm ${
                i % 4 == 3 || i % 3 == 1
                  ? "bg-green-300"
                  : i % 5 == 3
                  ? "bg-green-500"
                  : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strike;
