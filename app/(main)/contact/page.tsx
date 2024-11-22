import { apiConfig } from "@/apiConfig";
// import { getContactUs, getMetaInfo } from "@/api/common";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("contact");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Contact Us",
    metaDescription:"Contact Us",
    metaKeyword:"Contact Us",
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
      canonical: `${apiConfig.mainUrl}/contact`,
    },
  };
}

const ContactContainer = dynamic(() => import("@/container/contactContainer"), {
  loading: () => <LoadingContainer />,
});

const Contact = async () => {
  // const contactPromise = await getContactUs();
  // const contact = await Promise.all([contactPromise]);

  return  <ContactContainer/>
};

export default Contact;
