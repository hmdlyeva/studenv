"use client";
import Camera from "@/components/ui/Camera";
import CommentIcon from "@/components/ui/CommentIcon";
import FolderIcon from "@/components/ui/FolderIcon";
import ImageIcon from "@/components/ui/ImageIcon";
import LikedIcon from "@/components/ui/LikedIcon";
import LikeIcon from "@/components/ui/LikeIcon";
import LocationIcon from "@/components/ui/LocationIcon";
import SavedIcon from "@/components/ui/SavedIcon";
import SaveIcon from "@/components/ui/SaveIcon";
import ShareIcon from "@/components/ui/ShareIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import VideoIcon from "@/components/ui/VideoIcon";
import { getUserData } from "@/redux/slice/auth/auth";
import { getDisData, postDisData } from "@/redux/slice/discussion/discussion";
import { AppDispatch, RootState } from "@/redux/store/store";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const postData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
type Props = {
  theme: string;
};
const MiddSection = ({ theme }: Props) => {
  const user = useSelector((state: RootState) => state.users.users);
  const dis = useSelector((state: RootState) => state.diss.diss);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getDisData());
  }, []);

  const [likePost, setLikePost] = useState(false);
  const [savePost, setSavePost] = useState(false);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .replace(",", "");
  };

  return (
    <div className="middle md:w-4/5 flex flex-col gap-6 h-full pb-6 w-[95%] mx-auto">
      <div className="h-[89vh] overflow-y-auto scrollbar-none flex flex-col gap-6">
        {dis &&
          dis.map((post, i) => {
            const userContent = user.find((us) => us.user_id === post.user_id);

            return (
              <div
                key={i}
                className={`post border rounded-2xl p-4 flex flex-col gap-6 ${
                  theme === "white" ? "bg-white" : "bg-dark border-gray-600"
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
                        {post.topic}
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
                  <div className="rotate-90 pr-10 cursor-pointer">
                    <ThreeDot />
                  </div>
                </div>
                <h1
                  className={`${
                    theme === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {post.content}
                </h1>
                <ul className="text-gray-500 flex gap-8 lg:gap-5 md:gap-3 sm:gap-2">
                  <li>#{post.tag}</li>
                </ul>
                <div className="img w-full h-[600px] rounded-lg bg-slate-400"></div>
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
            );
          })}

        {postData.map((p, i) => (
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
            <div className="img w-full h-[600px] rounded-lg bg-slate-400"></div>
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
        ))}
      </div>
    </div>
  );
};

export default MiddSection;
