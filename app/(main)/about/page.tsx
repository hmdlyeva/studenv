import { apiConfig } from "@/apiConfig";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("about");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "About Us",
    metaDescription:"About Us",
    metaKeyword:"About Us",
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
      canonical: `${apiConfig.mainUrl}/about`,
    },
  };
}

const AboutContainer = dynamic(() => import("@/container/aboutContainer"), {
  loading: () => <LoadingContainer />,
});

const About = async () => {

  return (
    <AboutContainer
    />
  );
};

export default About;
