import { getCompanies, getDiscussions, getEvents, getUsers } from "@/api/common";
import { apiConfig } from "@/apiConfig";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";


export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("home");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Companies",
    metaDescription:"Companies Environment",
    metaKeyword:"Companies Environment",
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

const CompanyContainer = dynamic(() => import("@/container/companyContainer"), {
  loading: () => <LoadingContainer />,
});

export default async function Companies() {
  const usersDataPromise = await getUsers();
  const eventsDataPromise = await getEvents();
  const discussionsDataPromise = await getDiscussions();
  const companiesDataPromise = await getCompanies();
  const [users, events, discussions, companies] = await Promise.all([usersDataPromise, eventsDataPromise, discussionsDataPromise, companiesDataPromise]) 
  return (
      <CompanyContainer users={users} events={events} discussions={discussions} companies={companies}/>
  );
}
