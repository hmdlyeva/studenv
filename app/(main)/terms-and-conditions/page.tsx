import { apiConfig } from "@/apiConfig";
// import { getCommon, getMetaInfo } from "@/api/common";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("termsAndConditions");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Terms And Conditions",
    metaDescription:"Terms And Conditions",
    metaKeyword:"Terms And Conditions",
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
      canonical: `${apiConfig.mainUrl}/termsAndConditions`,
    },
  };
}

const TermsContainer = dynamic(() => import("@/container/termsContainer"), {
  loading: () => <LoadingContainer />,
});

const TermsAndConditionsPage = async () => {
  // const commonPromise = await getCommon("terms-and-conditions");
  // const [common] = await Promise.all([commonPromise]);

  return  <TermsContainer />;
};

export default TermsAndConditionsPage;
