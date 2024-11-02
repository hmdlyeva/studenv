"use client";

import Navbar from "@/components/layout/navbar/Navbar";
import LeftSection from "@/components/screens/events/leftSection/LeftSection";
import MiddSection from "@/components/screens/events/middSection/MiddSection";
import React, { useEffect, useState } from "react";

const Events = () => {
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  return (
    <>
      <Navbar url="/events" />
      <div
        className={`events pt-10 ${
          theme === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container w-full flex flex-col md:flex-row justify-between gap-2 md:gap-6">
          <MiddSection theme={theme} />
          <LeftSection theme={theme} />
        </div>
      </div>
    </>
  );
};

export default Events;
