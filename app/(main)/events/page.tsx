import { getDiscussions, getEvents, getUsers } from "@/api/common";
import { apiConfig } from "@/apiConfig";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";


export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("home");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Events",
    metaDescription:"Events Environment",
    metaKeyword:"Events Environment",
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

const EventContainer = dynamic(() => import("@/container/eventContainer"), {
  loading: () => <LoadingContainer />,
});

export default async function Home() {
  const usersDataPromise = await getUsers();
  const eventsDataPromise = await getEvents();
  const discussionsDataPromise = await getDiscussions();
  const [users, events, discussions] = await Promise.all([usersDataPromise, eventsDataPromise, discussionsDataPromise]) 
  return (
      <EventContainer users={users} events={events} discussions={discussions}/>
  );
}
