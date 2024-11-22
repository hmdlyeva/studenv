import { apiConfig } from "@/apiConfig";
import {
  getProfileByIdInProfile,
  getUserFollowers,
  getUserFollowings,
} from "@/api/common";
import LoadingContainer from "@/container/loadingContainer";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  // const getMetaPromise = getMetaInfo("home");
  // const [meta] = await Promise.all([getMetaPromise]);
  const meta = {
    metaTitle: "Studenv",
    metaDescription: "Student Environment",
    metaKeyword: "Student Environment",
  };
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

const ProfileContainer = dynamic(() => import("@/container/profileContainer"), {
  loading: () => <LoadingContainer />,
});

interface ProfilePageParams {
  params: {
    id: string;
  };
}

const ProfileContainerPage = async ({ params }: ProfilePageParams) => {
  const profilePromise = await getProfileByIdInProfile(params.id);
  const userFollowersPromise = await getUserFollowers(params.id);
  const userFollowingsPromise = await getUserFollowings(params.id);

  const [ profile, followers, followings] = await Promise.all([
    profilePromise,
    userFollowersPromise,
    userFollowingsPromise,
  ]);
  return (
    <ProfileContainer
      profile={profile}
      followers={followers}
      followings={followings}
    />
  );
};

export default ProfileContainerPage;
