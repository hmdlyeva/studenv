import { apiConfig } from "@/apiConfig";
// import { getFaq, getMetaInfo } from "@/api/common";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("faq");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Frequently Asked Questions",
    metaDescription:"Frequently Asked Questions",
    metaKeyword:"Frequently Asked Questions",
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
      creator: "Kenwoodbuilders",
      title: meta?.metaTitle ?? "",
      description: meta?.metaDescription ?? "",
      // images: ["/"],
    },
    alternates: {
      canonical: `${apiConfig.mainUrl}/faq`,
    },
  };
}

const FaqContainer = dynamic(() => import("@/container/faqContainer"), {
  loading: () => <LoadingContainer />,
});

const FaqPage = async () => {
  // const faqPromise = await getFaq();
  // const [faq] = await Promise.all([faqPromise]);

  return  <FaqContainer />;
};

export default FaqPage;
