export interface IUser {
  company_name?:string;
  profile_photo?:string;
  img_url?:string;

  id: string;
  name: string;
  email: string;
  role: string;
  user_id: string;
  date_of_created: string;
  is_verified: boolean;
  otp_code: string;
  otp_expiry: string;
}

export interface IDiscussion {
  id: string;
  title: string;
  content: string;
  tag: string;
  discussion_score: number;
  question: boolean;
  answered: boolean;
  discussion_id: string;
  user_id: string;
  file_url: string;
  date_of_created: string;
  tags: string[];
}

export interface ICommunity {
  id: string;
  community_id: string;
  name: string;
  description: string;
  visibility: string;
  created_at: string;
}

export interface IEvent {
  title: string;
  description: string;
  type: string;
  location: string;
  event_id: string;
  user_id: string;
  img_url: string;
  date_of_created: string;
}

export interface ICompany {
  profile_photo?:string;

  id: string;
  name: string;
  img_url: string;
  industry: string;
  description: string;
  address: string;
  website: string;
  contact: string;
  user_id: string;
  date_of_created: string;
}

export interface IResource {
  id: string;
  title: string;
  description: string;
  file_url: string;
  topic: string;
  resource_id: string;
  date_of_created: string;
}

export interface IProfile {
  company_name?:string;
  img_url?:string

  sex: string;
  study_language: string;
  job_status: string;
  university: string;
  major: string;
  year_of_study: string;
  date_of_birth: string;
  bio: string;
  score: 0;
  phone_number: string;
  profile_photo: string;
  cv_url: string;
  address: string;
  social_links: string;
  profile_id: string;
  user_id: string;
  name: string;
  email: string;
  speciality: string;
}

export interface ICommunityPopular {
  community_id: string;
  name: string;
  img_url: string;
  description: string;
  member_count: number;
}

export interface ITag {
  tag_id: string;
  name: string;
  count: number;
}

export interface IComment {
  id: string;
  content: string;
  discussion_score: number;
  response_id: string;
  discussion_id: string;
  user_id: string;
  date_of_created: string;
}
