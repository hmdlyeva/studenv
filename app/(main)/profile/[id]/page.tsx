import { apiConfig } from "@/apiConfig";
import {
  getProfileById,
  getUserFollowers,
  getUserFollowings,
  getUsers,
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
  const usersDataPromise = await getUsers();
  const profilePromise = await getProfileById(params.id);
  const userFollowersPromise = await getUserFollowers(params.id);
  const userFollowingsPromise = await getUserFollowings(params.id);

  const [users, profile, followers, followings] = await Promise.all([
    usersDataPromise,
    profilePromise,
    userFollowersPromise,
    userFollowingsPromise,
  ]);
  return (
    <ProfileContainer
      users={users}
      profile={profile}
      followers={followers}
      followings={followings}
    />
  );
};

export default ProfileContainerPage;
