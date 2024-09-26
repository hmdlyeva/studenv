import LeftSection from "@/components/screens/home/leftSection/LeftSection";
import MiddSection from "@/components/screens/home/middSection/MiddSection";
import RightSection from "@/components/screens/home/rightSection/RightSection";
import React from "react";

const Dashboard = () => {
  return (
    <div className="dashboard bg-[#f9f9f9] pt-10">
      <div className="container w-full flex justify-between gap-2 md:gap-6">
        <LeftSection />
        <MiddSection />
        <RightSection />
      </div>
    </div>
  );
};

export default Dashboard;
