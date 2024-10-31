"use client"
import LeftSection from "@/components/screens/home/leftSection/LeftSection";
import MiddSection from "@/components/screens/home/middSection/MiddSection";
import RightSection from "@/components/screens/home/rightSection/RightSection";
import React, { useEffect, useState } from "react";

const Dashboard = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <div className={`pt-10 dashboard ${theme === "white" ? "bg-whitesecond": "bg-secondblack"} `}>
      <div className="container w-full flex justify-between gap-2 md:gap-6 items-start">
        <LeftSection theme={theme}/>
        <MiddSection theme={theme}/>
        <RightSection theme={theme}/>
      </div>
    </div>
  );
};

export default Dashboard;
