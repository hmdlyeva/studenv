import { getResources } from "@/api/common";
import { apiConfig } from "@/apiConfig";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";


export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("home");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Resources",
    metaDescription:"Resources Environment",
    metaKeyword:"Resources Environment",
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

const ResourceContainer = dynamic(() => import("@/container/resourceContainer"), {
  loading: () => <LoadingContainer />,
});

export default async function Home() {
  const resourcesDataPromise = await getResources();
  const [ resources] = await Promise.all([ resourcesDataPromise]) 
  return (
      <ResourceContainer  resources={resources}/>
  );
}
