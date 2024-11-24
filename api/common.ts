import { api } from "@/apiConfig";

export const getCommon = async (code?: string) => {
  try {
    const res = await api.get(`common-page/code/${code}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Faq

export const getFaq = async () => {
  try {
    const res = await api.get(`faq`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Contact

export const getContactUs = async () => {
  try {
    const res = await api.get(`contact-us`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Redirect

export const getRedirectUrls = async () => {
  try {
    const res = await api.get(`redirect`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Team

export const getOurTeam = async () => {
  try {
    const res = await api.get(`team-member`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Work Process

export const getWorkProcess = async () => {
  try {
    const res = await api.get(`work-process`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Inspiration

export const getInspiration = async (searchParams?: any, size?: number) => {
  const params = new URLSearchParams();
  params.set("size", `${size}`);
  if (searchParams?.page) {
    params.set("page", searchParams.page);
  }
  try {
    const res = await api.get(
      `inspiration?size=${size || 12}&page=${searchParams?.page || 1}`
    );
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getInspirationBySlug = async (slug: string) => {
  try {
    const res = await api.get(`inspiration/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getLatestInspiration = async (slug:string) => {
  try {
    const res = await api.get(`inspiration/latest/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getLatestInspirationHome = async () => {
  try {
    const res = await api.get(`inspiration/latest/home`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Project

export const getProjects = async (searchParams?: any) => {
  const params = new URLSearchParams();
  if (searchParams?.size) {
    params.set("size", searchParams.size);
  }
  if (searchParams?.page) {
    params.set("page", searchParams.page);
  }
  if (searchParams?.slug) {
    params.set("slug", searchParams.slug);
  }
  try {
    const res = await api.get(`project?${params}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getProjectBySlug = async (slug: string) => {
  try {
    const res = await api.get(`project/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getProjectSimilarBySlug = async (slug: string) => {
  try {
    const res = await api.get(`project/similar/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Service

export const getServices = async () => {
  try {
    const res = await api.get(`service`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getServiceBySlug = async (slug: string) => {
  try {
    const res = await api.get(`service/${slug}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getLatestServices = async () => {
  try {
    const res = await api.get(`service/latest`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Slide

export const getSlide = async () => {
  try {
    const res = await api.get(`slide`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// consultation

export const getTimes = async (
  consultationDate: string,
  workStyleId: number
) => {
  try {
    const res = await api.get(
      `consultation-request/get-times/${consultationDate}/${workStyleId}`
    );
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Meta info

export const getMetaInfo = async (code: string) => {
  try {
    const res = await api.get(`meta/${code}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};


// Users

export const getUsers = async () => {
  try {
    const res = await api.get(`users`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getUserById = async (id:string) => {
  try {
    const res = await api.get(`users/${id}`);
    return res;
  } catch (error: any) {
    return null;
  }
};

// Communities

export const getCommunities = async () => {
  try {
    const res = await api.get(`communities`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Community Members

export const getCommunityMembers = async (id:string) => {
  try {
    const res = await api.get(`community/${id}/members`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Community Discussions

export const discussionCommunity = async (id:string) => {
  try {
    const res = await api.get(`communities/${id}/discussions`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Discussions

export const getDiscussions = async () => {
  try {
    const res = await api.get(`discussions`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const postDiscussions = async (data:any) => {
  try {
    const res = await api.post(`discussions`, data);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Discussions Responses

export const postDiscussionResponses = async (data:any) => {
  try {
    const res = await api.post(`discussion-responses`, data);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getDiscussionResponses = async (id:string) => {
  try {
    const res = await api.get(`discussion-responses/discussion/${id}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const deleteDiscussion = async (id:string) => {
  try {
    const res = await api.delete(`discussions/${id}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Events

export const getEvents = async () => {
  try {
    const res = await api.get(`events`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getLatestEvents = async () => {
  try {
    const res = await api.get(`events/latest`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getUpcomingEvents = async () => {
  try {
    const res = await api.get(`events/upcoming`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Companies

export const getCompanies = async () => {
  try {
    const res = await api.get(`companies`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getCompanyById = async (id:string) => {
  try {
    const res = await api.get(`companies/${id}`);
    return res;
  } catch (error: any) {
    return null;
  }
};

export const getCompanyByIdInCompany = async (id:string) => {
  try {
    const res = await api.get(`companies/${id}`);
    return res;
  } catch (error: any) {
    return null;
  }
};

export const postCompanies = async (data:any) => {
  try {
    const res = await api.post(`companies`,data);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Resources

export const getResources = async () => {
  try {
    const res = await api.get(`resources`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const getResourceTags = async (id:string) => {
  try {
    const res = await api.get(`resource/${id}/tags`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Profile

export const getProfileById = async (id:string) => {
  try {
    const res = await api.get(`profiles/${id}`);
    return res;
  } catch (error: any) {
    return null;
  }
};

export const getProfileByIdInProfile = async (id:string) => {
  try {
    const res = await api.get(`profiles/${id}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

export const postProfile = async (data:any) => {
  try {
    const res = await api.post(`profiles`, data);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Communities

export const getCommunitiesPopular = async () => {
  try {
    const res = await api.get(`communities/popular`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// tags

export const getWeeklyPopularTags = async () => {
  try {
    const res = await api.get(`tags/weekly_popular`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};


// Followers

export const getUserFollowers = async (id:string) => {
  try {
    const res = await api.get(`users/${id}/followers`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Following

export const getUserFollowings = async (id:string) => {
  try {
    const res = await api.get(`users/${id}/following`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Like Discussion

export const userLikeDiscussion = async (id:string,dis_id:string) => {
  try {
    const res = await api.post(`users/${id}/like_discussion/${dis_id}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Unlike Discussion

export const userUnlikeDiscussion = async (id:string,dis_id:string) => {
  try {
    const res = await api.delete(`users/${id}/unlike_discussion/${dis_id}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Liked Discussion By User

export const userAllLikedDiscussion = async (id:string) => {
  try {
    const res = await api.get(`users/${id}/liked_discussions`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Discussion Likes

export const discussionlikes = async (id:string) => {
  try {
    const res = await api.get(`discussions/${id}/liking_users`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Save Discussion

export const userSaveDiscussion = async (id:string,dis_id:string) => {
  try {
    const res = await api.post(`users/${id}/save_discussion/${dis_id}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Unsave Discussion

export const userUnSaveDiscussion = async (id:string,dis_id:string) => {
  try {
    const res = await api.delete(`users/${id}/unsave_discussion/${dis_id}`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Saved Discussion By User

export const userAllSavedDiscussion = async (id:string) => {
  try {
    const res = await api.get(`users/${id}/saved_discussions`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Discussion Saves

export const discussionSaves = async (id:string) => {
  try {
    const res = await api.get(`discussions/${id}/saving_users`);
    return res.data;
  } catch (error: any) {
    return null;
  }
};

// Upload

export const upload = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const res = await api.post(`/upload`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data?.url;
  } catch (error: any) {
    console.error("Upload failed:", error);
    return null;
  }
};
