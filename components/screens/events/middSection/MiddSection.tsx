"use client";
import CommentIcon from "@/components/ui/CommentIcon";
import LikedIcon from "@/components/ui/LikedIcon";
import LikeIcon from "@/components/ui/LikeIcon";
import SavedIcon from "@/components/ui/SavedIcon";
import SaveIcon from "@/components/ui/SaveIcon";
import ShareIcon from "@/components/ui/ShareIcon";
import {  IEvent, IUser } from "@/types/common.type";
import React, { useState } from "react";
interface IProps {
  theme: string;
  users:IUser[];
  events:IEvent[];
};

const MiddSection = ({ theme, users, events }: IProps) => {

  const [likePost, setLikePost] = useState(false);
  const [savePost, setSavePost] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      // hour: "2-digit",
      // minute: "2-digit",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .replace(",", "");
  };

  return (
    <div className="middle md:w-4/5 flex flex-col gap-6 h-full pb-6 w-[95%] mx-auto">
      <div className="h-[77vh] overflow-y-auto scrollbar-none grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events &&
          events.map((post, i) => {
            const userContent = users.find((us) => us.user_id === post.user_id);

            return (
              <div
                key={i}
                className={`post border rounded-2xl p-4 flex flex-col gap-4 h-96 ${
                  theme === "white" ? "bg-white" : "bg-black border-gray-600"
                }`}
              >
                <div className="post_hero flex justify-between">
                  <div className="left flex gap-4">
                    <div className="img w-14 h-14 rounded-lg bg-slate-400 cursor-pointer"></div>
                    <div className="detail flex flex-col justify-between">
                      <h1
                        className={`text-sm font-medium ${
                          theme === "white" ? "text-black" : "text-white"
                        }`}
                      >
                        {post.title}
                      </h1>
                      <div className="user flex gap-2 items-center">
                        <div className="img w-6 h-6 rounded-lg bg-slate-400 cursor-pointer"></div>
                        <p className="text-blue-600 cursor-pointer">
                          {userContent ? userContent.name : "Unknown User"}
                        </p>
                        <p className="text-sm text-gray-400">
                          | Just {formatDate(post.date_of_created)}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <div className="rotate-90 pr-10 cursor-pointer">
                    <ThreeDot />
                  </div> */}
                </div> 
                <h1
                  className={`text-sm ${
                    theme === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {post.description}
                </h1>
                {/* <ul className="text-gray-500 flex gap-8 lg:gap-5 md:gap-3 sm:gap-2">
                  <li>#{post.tag}</li>
                </ul> */}
                <div className="img w-full h-[250px] rounded-lg bg-slate-400"></div>
                <div className="post_footer flex justify-between text-gray-500">
                  <ul className="flex gap-1 md:gap-2">
                    <li
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => setLikePost(!likePost)}
                    >
                      {likePost ? <LikedIcon /> : <LikeIcon />}
                      
                    </li>
                    <li className="flex items-center gap-2 cursor-pointer">
                      <CommentIcon /> 
                    </li>
                    <li
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => setSavePost(!savePost)}
                    >
                      {savePost ? <SavedIcon /> : <SaveIcon />}
                    </li>
                  </ul>
                  <p className="flex items-center gap-2 cursor-pointer">
                    <ShareIcon /> 
                  </p>
                </div>
              </div>
            );
          })}

        {/* {postData.map((p, i) => (
          <div
            key={i}
            className={`"post border rounded-2xl p-4 flex flex-col gap-6" ${
              theme === "white" ? "bg-white" : "bg-black border-gray-600"
            }`}
          >
            <div className="post_hero flex justify-between">
              <div className="left flex gap-4">
                <div className="img w-14 h-14 rounded-lg bg-slate-400 cursor-pointer"></div>
                <div className="detail flex flex-col justify-between">
                  <h1
                    className={`text-xl font-medium ${
                      theme === "white" ? "text-black" : "text-white"
                    }`}
                  >
                    topic
                  </h1>
                  <div className="user flex gap-2 items-center">
                    <div className="img w-6 h-6 rounded-lg bg-slate-400 cursor-pointer"></div>
                    <p className="text-blue-600 cursor-pointer">Unknown User</p>
                    <p className="text-sm text-gray-400">| Just Now</p>
                  </div>
                </div>
              </div>
              <div className="rotate-90 pr-10 cursor-pointer">
                <ThreeDot />
              </div>
            </div>
            <h1
              className={`${theme === "white" ? "text-black" : "text-white"}`}
            >
              content texti
            </h1>
            <ul className="text-gray-500 flex gap-8 lg:gap-5 md:gap-3 sm:gap-2">
              <li>#tags</li>
            </ul>
            {/* <div className="img w-full h-[600px] rounded-lg bg-slate-400"></div> */}
        {/*
            <div className="post_footer flex justify-between text-gray-500">
              <ul className="flex gap-2 md:gap-8">
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setLikePost(!likePost)}
                >
                  {likePost ? <LikedIcon /> : <LikeIcon />}
                  Like
                </li>
                <li className="flex items-center gap-2 cursor-pointer">
                  <CommentIcon /> Comment
                </li>
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setSavePost(!savePost)}
                >
                  {savePost ? <SavedIcon /> : <SaveIcon />}
                  Save
                </li>
              </ul>
              <p className="flex items-center gap-2 cursor-pointer">
                <ShareIcon /> Share
              </p>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default MiddSection;
