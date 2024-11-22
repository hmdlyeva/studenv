"use client"
import Navbar from "@/components/layout/navbar/Navbar";
import React, { useState } from "react";
import { ICommunity, IDiscussion, IUser } from "@/types/common.type";
import LeftSection from "@/components/screens/mycommunity/leftSection/LeftSection";
import MiddSection from "@/components/screens/mycommunity/middSection/MiddSection";
interface IProps {
  users: IUser[];
  discussions:IDiscussion[];
  communities:ICommunity[];
}

const MyCommunityContainer = ({ users, discussions,communities }: IProps) => {
  const [selectedCommunity, setSelectedCommunity] = useState<string>("")
  return (
    <main>
      <Navbar url="/mycommunity" users={users} />
      <div
        className={`mycommunity pt-10 ${
          "white" === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container w-full flex flex-col md:flex-row justify-between gap-2 md:gap-6">
          <LeftSection theme={"white"} communities={communities} setSelectedCommunity={setSelectedCommunity}/>
          <MiddSection theme={"white"} users={users} selectedCommunity={selectedCommunity}/>
        </div>
      </div>
    </main>
  );
};

export default MyCommunityContainer;
