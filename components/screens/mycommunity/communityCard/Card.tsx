"use client"
import { getCommunityMembers } from "@/api/common";
import { ICommunity } from "@/types/common.type";
import React, { useEffect, useState } from "react";

interface IProps {
  chanel: ICommunity;
  theme: string;
  setSelectedCommunity: React.Dispatch<React.SetStateAction<string>>;
}

const Card = ({ chanel, theme,setSelectedCommunity}: IProps) => {
  const [membersCount, setMembersCount] = useState<Record<string, number>>({});
  const fetchLikesCount = async (communityId: string) => {
    try {
      const resp = await getCommunityMembers(communityId);
      if (resp) {
        setMembersCount((prev) => ({
          ...prev,
          [communityId]: resp.length,
        }));
      }
    } catch (error) {
      console.error("Beğeni sayısı alınırken hata oluştu:", error);
    }
  };
  useEffect(() => {
    fetchLikesCount(chanel.community_id);
  }, [chanel.community_id]);
  return (
    <div className="channel p-4 min-w-[140px] flex flex-col gap-3 md:flex-row cursor-pointer hover:bg-[#f9f9f9]" onClick={()=> setSelectedCommunity(chanel.community_id)}>
      <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
      <div className="detail w-full">
        <p className="text-[10px] text-gray-400">
          {chanel.visibility.toUpperCase()} COMMUNITY
        </p>
        <h3
          className={`text-sm ${
            theme === "white" ? "text-black" : "text-white"
          }`}
        >
          {chanel.name}
        </h3>
        <p className="text-[10px] text-gray-400">{chanel.description}</p>
        <p className="text-[14px] text-gray-400 right-0 top-0">
        {membersCount[chanel.community_id] || 0} Member
        </p>
      </div>
    </div>
  );
};

export default Card;
