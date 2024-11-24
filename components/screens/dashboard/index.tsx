"use client";
import LeftSection from "@/components/screens/home/leftSection/LeftSection";
import MiddSection from "@/components/screens/home/middSection/MiddSection";
import RightSection from "@/components/screens/home/rightSection/RightSection";
import {
  ICommunityPopular,
  IDiscussion,
  IEvent,
  ITag,
} from "@/types/common.type";
import React, { useEffect, useState } from "react";
import Hero from "../default/hero/hero";
import Whoweare from "../default/whoweare/whoweare";
import Whatwedo from "../default/whatwedo/whatwedo";
import Proplan from "../default/proplan/proplan";
import Footer from "../default/footer/footer";
import { getCompanyById, getProfileById, getUserById } from "@/api/common";
import { ICompany, IProfile, IUser } from "@/types/common.type";

interface IProps {
  users: IUser[];
  events: IEvent[];
  discussions: IDiscussion[];
  communitiesPopular: ICommunityPopular[];
  latestEvents: IEvent[];
  weeklyPopularTags: ITag[];
  upcomingEvents: IEvent[];
}
const Dashboard = ({
  users,
  events,
  discussions,
  communitiesPopular,
  latestEvents,
  weeklyPopularTags,
  upcomingEvents,
}: IProps) => {
  const [theme, setTheme] = useState("white");
  const [userData, setUserData] = useState<ICompany | IProfile | IUser>();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      const userRole = localStorage.getItem("userRole");

      if (userId && userRole) {
        try {
          let resp;

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
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  {
    return !loading && userData ? (
      <div
        className={`dashboard ${
          theme === "white" ? "bg-whitesecond" : "bg-secondblack"
        } `}
      >
        <div className="container w-full relative flex justify-between gap-2 lg:gap-6 items-start">
          <LeftSection
            theme={theme}
            communitiesPopular={communitiesPopular}
            latestEvents={latestEvents}
          />
          <MiddSection theme={theme} users={users} discussions={discussions} />
          <RightSection
            theme={theme}
            events={events}
            weeklyPopularTags={weeklyPopularTags}
            upcomingEvents={upcomingEvents}
            communitiesPopular={communitiesPopular}
          />
        </div>
      </div>
    ) : !loading && (
      <div
        className={`dashboard ${
          theme === "white" ? "bg-whitesecond" : "bg-secondblack"
        } `}
      >
        <Hero />
        <Whoweare/>
        <Whatwedo/>
        <Proplan/>
        <Footer/>
      </div>
    );
  }
};

export default Dashboard;
