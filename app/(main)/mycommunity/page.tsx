import { getCommunities, getDiscussions, getEvents, getUsers } from "@/api/common";
import { apiConfig } from "@/apiConfig";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";


export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("home");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Community",
    metaDescription:"Community Environment",
    metaKeyword:"Community Environment",
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

const MyCommunityContainer = dynamic(() => import("@/container/myCommunityContainer"), {
  loading: () => <LoadingContainer />,
});

export default async function Home() {
  const usersDataPromise = await getUsers();
  const communitiesDataPromise = await getCommunities();
  const discussionsDataPromise = await getDiscussions();
  const [users, communities, discussions] = await Promise.all([usersDataPromise,communitiesDataPromise, discussionsDataPromise]) 
  return (
      <MyCommunityContainer users={users} discussions={discussions} communities={communities}/>
  );
}
