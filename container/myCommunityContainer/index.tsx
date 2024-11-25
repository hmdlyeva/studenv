"use client"
import Navbar from "@/components/layout/navbar/Navbar";
import React, { useState } from "react";
import { ICommunity, IProfile, IUser } from "@/types/common.type";
import LeftSection from "@/components/screens/mycommunity/leftSection/LeftSection";
import MiddSection from "@/components/screens/mycommunity/middSection/MiddSection";
interface IProps {
  users: IUser[];
  communities:ICommunity[];
  profiles:IProfile[];
}

const MyCommunityContainer = ({ users,communities ,profiles}: IProps) => {
  const [selectedCommunity, setSelectedCommunity] = useState<string>("")
  return (
    <main>
      <Navbar url="/mycommunity"/>
      <div
        className={`mycommunity ${
          "white" === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container w-full h-full flex flex-col md:flex-row justify-between gap-2 md:gap-6">
          <LeftSection theme={"white"} communities={communities} setSelectedCommunity={setSelectedCommunity} selectedCommunity={selectedCommunity}/>
          <MiddSection theme={"white"} users={users} selectedCommunity={selectedCommunity} profiles={profiles}/>
        </div>
      </div>
    </main>
  );
};

export default MyCommunityContainer;
