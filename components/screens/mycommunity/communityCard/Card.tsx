"use client";
import {
  getCommunityMembers,
  getCompanyById,
  getProfileById,
  getUserById,
  leaveCommunity,
  postUserToCommunity,
} from "@/api/common";
import ThreeDot from "@/components/ui/ThreeDot";
import { ICommunity, ICompany, IProfile, IUser } from "@/types/common.type";
import React, { useEffect, useState } from "react";

interface IProps {
  chanel: ICommunity;
  theme: string;
  setSelectedCommunity: React.Dispatch<React.SetStateAction<string>>;
  selectedCommunity: string;
}

const Card = ({
  chanel,
  theme,
  setSelectedCommunity,
  selectedCommunity,
}: IProps) => {
  const [userData, setUserData] = useState<ICompany | IProfile | IUser>();
  // const [userRole, setUserRole] = useState<string>("");
  const [joinCommunityModal, setJoinCommunityModal] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      const userRole = localStorage.getItem("userRole");

      if (userId && userRole) {
        try {
          let resp;
          // setUserRole(userRole);

          if (userRole === "Student") {
            resp = await getProfileById(userId);
            if (resp && resp.status === 200) {
              setUserData(resp.data);
            } else {
              console.log("profile yoxdu bu studentin?", resp);
            }
          } else if (userRole === "Company") {
            resp = await getCompanyById(userId);
            if (resp && resp.status === 200) {
              setUserData(resp.data);
            } else {
              console.log("company datasi yoxdu bu companynin?", resp);
            }
          } else if (userRole === "Guest") {
            resp = await getUserById(userId);
            if (resp && resp.status === 200) {
              setUserData(resp.data);
            } else {
              console.log("user datasi yoxdu bu guestin?", resp);
            }
          }
        } catch (error) {
          console.error("Data fetch sırasında hata:", error);
        }
      } else {
      }
    };

    fetchUserData();
  }, []);

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

  const communityActions = async (id: string) => {
    setSelectedCommunity(id);

    const resp = await getCommunityMembers(id);
    if (resp) {
      console.log("membersleri aldi");
      const ismember = resp.find(
        (member: string) => member === userData?.user_id
      );
      if (!ismember) {
        setJoinCommunityModal(true);
      }
    } else {
      setJoinCommunityModal(true);
    }
  };

  const joinCommunity = async (id: string) => {
    console.log("member deyildi deye girdi");
    const data = {
      user_id: userData?.user_id,
      community_id: id,
    };
    const resp = await postUserToCommunity(data);
    console.log("folow eledi gua", resp);
    if (resp) {
      fetchLikesCount(chanel.community_id);
    }
  };

  const removeUserFromCommunity = async (id: string) => {
    alert("You are going to leave this community..")
    const data = {
      user_id: userData?.user_id,
      community_id: id,
    };
    const resp = await leaveCommunity(data);
    if (resp) {
      fetchLikesCount(chanel.community_id);
    }
  };

  return (
    <div
      className={`channel p-4 min-w-[140px] flex flex-col gap-3 md:flex-row cursor-pointer hover:bg-[#f9f9f9] ${
        selectedCommunity === chanel.community_id ? "bg-[#f9f9f9]" : ""
      }`}
      onClick={() => {
        communityActions(chanel.community_id);
      }}
    >
      <div className="img bg-slate-300 rounded-md w-16 h-16"></div>
      <div className="detail w-full relative">
        <div
          className="absolute right-1 rotate-90"
          onClick={() => {
            removeUserFromCommunity(chanel.community_id);
          }}
        >
          <ThreeDot />
        </div>
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
      {joinCommunityModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

          <div className="flex flex-col items-center bg-white p-10 rounded-2xl z-50 lg:w-1/2 md:w-2/3 sm:w-3/4 w-4/5 relative">
            <div
              onClick={() => setJoinCommunityModal(false)}
              className="absolute top-6 left-6 cursor-pointer"
            >
              <svg
                enableBackground="new 0 0 15 26"
                height="20px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 15 26"
                width="12px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <polygon
                  fill="#747474"
                  points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5"
                />
              </svg>
            </div>
            <h1 className="sm:text-lg text-base font-bold">
              Do You Want To Join To This Community?
            </h1>
            <p className="text-center">
              You are not a member of this community
            </p>
            <div className="flex items-center w-40 gap-4 mt-6">
              <button
                className="border w-2/3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
                onClick={() => {
                  joinCommunity(chanel.community_id);
                }}
              >
                {"Join"}
              </button>

              <button
                onClick={() => setJoinCommunityModal(false)}
                className="border w-2/3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
