import React from "react";


const months = [
  "May",
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
];

const days = 52 * 7;

const Strike = () => {
  return (
    <div className="strike bg-[#f9f9f9] p-4 mb-8 rounded-xl">
      <h2 className="font-semibold text-lg my-2 mb-8">1,390 strike in the last month</h2>

      <div className="strikes my-4">
        <div className="months flex gap-4">
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
