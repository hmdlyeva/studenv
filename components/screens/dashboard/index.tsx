"use client";
import LeftSection from "@/components/screens/home/leftSection/LeftSection";
import MiddSection from "@/components/screens/home/middSection/MiddSection";
import RightSection from "@/components/screens/home/rightSection/RightSection";
import {
  ICommunityPopular,
  IDiscussion,
  IEvent,
  ITag,
  IUser,
} from "@/types/common.type";
import React, { useEffect, useState } from "react";
import Hero from "../default/hero/hero";
import Whoweare from "../default/whoweare/whoweare";
import Whatwedo from "../default/whatwedo/whatwedo";
import Proplan from "../default/proplan/proplan";
import Footer from "../default/footer/footer";

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
  const [userData, setUserData] = useState<IUser>();
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const confirmedEmail = localStorage.getItem("confirmEmail");
    if (confirmedEmail) {
      const filteredUser = users.find((user) => user.email === confirmedEmail);
      if (filteredUser) {
        // const userData = dispatch(getUserDataById(filteredUser.user_id));
        // if (userData) {
        setUserData(filteredUser);
        localStorage.setItem("userInfo", JSON.stringify(filteredUser));
        // }
      }
    }
  }, [users]);

  {
    return userData ? (
      <div
        className={`pt-40 dashboard ${
          theme === "white" ? "bg-whitesecond" : "bg-secondblack"
        } `}
      >
        <div className="container w-full flex justify-between gap-2 md:gap-6 items-start">
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
          />
        </div>
      </div>
    ) : (
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
