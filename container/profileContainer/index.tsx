import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import { IDiscussion, IEvent, IProfile, IResource, IUser } from "@/types/common.type";
import About from "@/components/screens/profile/about/About";
import Detail from "@/components/screens/profile/detail/Detail";
import Hero from "@/components/screens/profile/hero/Hero";
import Strike from "@/components/screens/profile/strike/Strike";
interface IProps {
  users: IUser[];
  profile: IProfile;
  followers:IUser[];
  followings:IUser[];
}

const ResourceContainer = ({ users, profile, followers, followings }: IProps) => {
  return (
    <main>
      <div
        className={`profile ${
          "white" === "white"
            ? "bg-whitesecond"
            : "bg-secondblack border-gray-600"
        }`}
      >
        <Navbar url="profile" users={users} />
        <div className="container">
          <Hero theme={"white"} profile={profile} followers={followers} followings={followings}/>
          <Detail theme={"white"} profile={profile}  />
          <About theme={"white"} profile={profile}  />
          <Strike theme={"white"} />
        </div>
      </div>
    </main>
  );
};

export default ResourceContainer;
