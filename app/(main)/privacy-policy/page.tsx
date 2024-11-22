import { apiConfig } from "@/apiConfig";
// import { getCommon, getMetaInfo } from "@/api/common";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("privacyPolicy");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Privacy And Terms Policy",
    metaDescription:"Privacy Policy",
    metaKeyword:"Privacy Policy",
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
      canonical: `${apiConfig.mainUrl}/privacyPolicy`,
    },
  };
}

const PrivacyPolicyContainer = dynamic(() => import("@/container/privacyPolicyContainer"), {
  loading: () => <LoadingContainer />,
});

const PrivacyPolicyPage = async () => {
  // const commonPromise = await getCommon("privacy-policy");
  // const [common] = await Promise.all([commonPromise]);

  return  <PrivacyPolicyContainer  />
};

export default PrivacyPolicyPage;
