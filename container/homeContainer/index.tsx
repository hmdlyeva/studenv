import Dashboard from "@/components/screens/dashboard";
import Navbar from "@/components/layout/navbar/Navbar";
import React from "react";
import { ICommunityPopular, IDiscussion, IEvent, ITag, IUser } from "@/types/common.type";

interface IProps {
  users: IUser[];
  events:IEvent[];
  discussions:IDiscussion[];
  communitiesPopular: ICommunityPopular[];
  latestEvents:IEvent[];
  weeklyPopularTags:ITag[];
  upcomingEvents:IEvent[];
}

const HomeContainer = ({users, events, discussions, communitiesPopular, latestEvents, weeklyPopularTags, upcomingEvents}: IProps) => {
  return (
    <main>
      <Navbar url="/" users={users}/>
      <Dashboard upcomingEvents={upcomingEvents} users={users} discussions={discussions} events={events} communitiesPopular={communitiesPopular} latestEvents={latestEvents} weeklyPopularTags={weeklyPopularTags}/>
    </main>
  );
};

export default HomeContainer;
