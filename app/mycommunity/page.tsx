"use client"

import Navbar from "@/components/layout/navbar/Navbar";
import LeftSection from "@/components/screens/mycommunity/leftSection/LeftSection";
import MiddSection from "@/components/screens/mycommunity/middSection/MiddSection";
import React, { useEffect, useState } from "react";

const MyCommunity = () => {
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <>
    <Navbar url="/mycommunity"/>
    <div className={`mycommunity pt-10 ${theme === "white" ? "bg-whitesecond": "bg-secondblack"}`}>
      <div className="container w-full flex flex-col md:flex-row justify-between gap-2 md:gap-6">
        <LeftSection theme={theme}/>
        <MiddSection theme={theme}/>
      </div>
    </div>
    </>
  );
};

export default MyCommunity;
