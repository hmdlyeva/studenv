import { getCommunitiesPopular, getDiscussions, getEvents, getLatestEvents, getUpcomingEvents, getUsers, getWeeklyPopularTags } from "@/api/common";
import { apiConfig } from "@/apiConfig";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";


export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("home");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Studenv",
    metaDescription:"Student Environment",
    metaKeyword:"Student Environment",
  }
  return {
    title: meta?.metaTitle ?? "",
    description: meta?.metaDescription ?? "",
    keywords: meta?.metaKeyword ?? "",
    openGraph: {
      title: meta?.metaTitle ?? "",
      description: meta?.metaDescription ?? "",
      type: "website",
      // images: ["/"],
    },
    twitter: {
      card: "summary_large_image",
      creator: "StudenV",
      title: meta?.metaTitle ?? "",
      description: meta?.metaDescription ?? "",
      // images: ["/"],
    },
    alternates: {
      canonical: `${apiConfig.mainUrl}`,
    },
  };
}

const HomeContainer = dynamic(() => import("@/container/homeContainer"), {
  loading: () => <LoadingContainer />,
});

export default async function Home() {
  const usersDataPromise = await getUsers();
  const eventsDataPromise = await getEvents();
  const communitiesPopularDataPromise = await getCommunitiesPopular();
  const discussionsDataPromise = await getDiscussions();
  const latestEventsDataPromise = await getLatestEvents();
  const upcomingEventsDataPromise = await getUpcomingEvents();
  const weeklyPopularTagsDataPromise = await getWeeklyPopularTags();
  const [upcomingEvents, weeklyPopularTags, latestEvents, users, events, discussions, communitiesPopular] = await Promise.all([upcomingEventsDataPromise, weeklyPopularTagsDataPromise,latestEventsDataPromise,usersDataPromise, eventsDataPromise, discussionsDataPromise, communitiesPopularDataPromise]) 
  return (
      <HomeContainer upcomingEvents={upcomingEvents} weeklyPopularTags={weeklyPopularTags} users={users} events={events} discussions={discussions} communitiesPopular={communitiesPopular} latestEvents={latestEvents}/>
  );
}
