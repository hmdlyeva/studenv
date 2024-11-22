import {
  deleteDiscussion,
  discussionlikes,
  discussionSaves,
  getDiscussionResponses,
  postDiscussionResponses,
  userAllLikedDiscussion,
  userAllSavedDiscussion,
  userLikeDiscussion,
  userSaveDiscussion,
  userUnlikeDiscussion,
  userUnSaveDiscussion,
} from "@/api/common";
import CommentIcon from "@/components/ui/CommentIcon";
import FolderIcon from "@/components/ui/FolderIcon";
import LikedIcon from "@/components/ui/LikedIcon";
import LikeIcon from "@/components/ui/LikeIcon";
import ReplyIcon from "@/components/ui/ReplyIcon";
import SavedIcon from "@/components/ui/SavedIcon";
import SaveIcon from "@/components/ui/SaveIcon";
import ShareIcon from "@/components/ui/ShareIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import { IComment, IDiscussion, IProfile, IUser } from "@/types/common.type";
import React, { useEffect, useState } from "react";

interface IProps {
  post: IDiscussion;
  userContent: IProfile | undefined;
  theme: string;
  users: IUser[];
  userContentGuest: IUser | undefined;
  discussions: IDiscussion[];
  setDiscussions: React.Dispatch<React.SetStateAction<IDiscussion[]>>;
}

const DiscussionPost = ({
  post,
  userContent,
  theme,
  users,
  userContentGuest,
  discussions,
  setDiscussions
}: IProps) => {
  const [userData, setUserData] = useState<IUser>();
  const [selectedDiscussionId, setSelectedDiscussionId] = useState("");
  const [likesCount, setLikesCount] = useState<Record<string, number>>({});
  const [savesCount, setSavesCount] = useState<Record<string, number>>({});
  const [likedDiscussions, setLikedDiscussions] = useState<string[]>([]);
  const [savedDiscussions, setSavedDiscussions] = useState<string[]>([]);
  const [discussionComments, setDiscussionComments] = useState<
    Record<string, IComment[]>
  >({});
  const [contentByDiscussion, setContentByDiscussion] = useState<
    Record<string, string>
  >({});
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    };
    const date = new Date(dateString);
    date.setHours(date.getHours() + 15);
    return new Intl.DateTimeFormat("en-US", options)
      .format(date)
      .replace(",", "");
  };

  const isImage = (url: string) => {
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
    const extension = url.slice(-3).toLowerCase();
    return imageExtensions.includes(extension);
  };

  const isVideo = (url: string) => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    const extension = url.slice(-3).toLowerCase();
    return videoExtensions.includes(extension);
  };

  const isFile = (url: string) => {
    const fileExtensions = ["pdf", "doc", "docx", "txt"];
    const extension = url.slice(-3).toLowerCase();
    return fileExtensions.includes(extension);
  };

  const handleDelete = async (id: string) => {
    await deleteDiscussion(id);
    const newDiscussionsData = discussions.filter(
      (dis) => dis.discussion_id !== id
    );
    setDiscussions(newDiscussionsData);
  };
  const handleLikeDiscussionActions = async (userId: string, disId: string) => {
    const isLiked = likedDiscussions.includes(disId);
    if (!isLiked) {
      await userLikeDiscussion(userId, disId);
      setLikedDiscussions((prev) => prev.filter((id) => id !== disId));
      fetchLikedDiscussions(userId);
      fetchLikesCount(post.discussion_id);
    } else {
      await userUnlikeDiscussion(userId, disId);
      setLikedDiscussions((prev) => [...prev, disId]);
      fetchLikedDiscussions(userId);
      fetchLikesCount(post.discussion_id);
    }
  };
  const handleSaveDiscussionActions = async (userId: string, disId: string) => {
    const isSaved = savedDiscussions.includes(disId);
    if (!isSaved) {
      await userSaveDiscussion(userId, disId);
      setSavedDiscussions((prev) => prev.filter((id) => id !== disId));
      fetchSavesCount(post.discussion_id);
      fetchSavedDiscussions(userId);
    } else {
      await userUnSaveDiscussion(userId, disId);
      setSavedDiscussions((prev) => [...prev, disId]);
      fetchSavesCount(post.discussion_id);
      fetchSavedDiscussions(userId);
    }
  };
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      const filteredUser = users.find((user) => user.user_id === userId);
      if (filteredUser) {
        setUserData(filteredUser);
        (async () => {
          try {
            const likeData = await userAllLikedDiscussion(filteredUser.user_id);
            const saveData = await userAllSavedDiscussion(filteredUser.user_id);
            setLikedDiscussions(
              likeData?.map(
                (discussion: IDiscussion) => discussion.discussion_id
              )
            );
            setSavedDiscussions(
              saveData?.map(
                (discussion: IDiscussion) => discussion.discussion_id
              )
            );
          } catch (error) {
            console.error("Error fetching liked discussions:", error);
          }
        })();
      }
    }
  }, [users]);

  const fetchLikedDiscussions = async (userId: string) => {
    try {
      const resp = await userAllLikedDiscussion(userId);
      if (resp) {
        setLikedDiscussions(
          resp?.map((discussion: IDiscussion) => discussion.discussion_id)
        );
      }
    } catch (error) {
      console.error("Error fetching liked discussions:", error);
    }
  };

  const fetchSavedDiscussions = async (userId: string) => {
    try {
      const resp = await userAllSavedDiscussion(userId);
      if (resp) {
        setSavedDiscussions(
          resp?.map((discussion: IDiscussion) => discussion.discussion_id)
        );
      }
    } catch (error) {
      console.error("Saved sayısı alınırken hata oluştu:", error);
    }
  };

  const addComment = async (id: string) => {
    const content = contentByDiscussion[id]?.trim();
    if (!content) return;

    const userId = localStorage.getItem("userId");

    const newComment = {
      content,
      discussion_score: 0,
      discussion_id: id,
      user_id: userId || userContentGuest?.user_id,
    };

    try {
      const response = await postDiscussionResponses(newComment);
      if (response) {
        setContentByDiscussion((prev) => ({
          ...prev,
          [id]: "",
        }));
        await showComment(id);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
  const showComment = async (id: string) => {
    try {
      const resp = await getDiscussionResponses(id);
      if (resp) {
        setDiscussionComments((prevComments) => ({
          ...prevComments,
          [id]: resp,
        }));
        setSelectedDiscussionId(id);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };
  const handleContentChange = (id: string, value: string) => {
    setSelectedDiscussionId(id);
    setContentByDiscussion((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const fetchLikesCount = async (discussionId: string) => {
    try {
      const resp = await discussionlikes(discussionId);
      if (resp) {
        setLikesCount((prev) => ({
          ...prev,
          [discussionId]: resp.length,
        }));
      }
    } catch (error) {
      console.error("Beğeni sayısı alınırken hata oluştu:", error);
    }
  };
  const fetchSavesCount = async (discussionId: string) => {
    try {
      const resp = await discussionSaves(discussionId);
      if (resp) {
        setSavesCount((prev) => ({
          ...prev,
          [discussionId]: resp.length,
        }));
      }
    } catch (error) {
      console.error("Saved sayısı alınırken hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchLikesCount(post.discussion_id);
    fetchSavesCount(post.discussion_id);
  }, [post.discussion_id]);

  return (
    <div
      key={post.discussion_id}
      className={`"post border rounded-2xl p-4 flex flex-col gap-6" ${
        theme === "white" ? "bg-white" : "bg-black border-gray-600"
      }`}
    >
      <div className="flex justify-between">
        <div className="left flex sm:gap-4 gap-2">
          <div className="img w-14 h-14 rounded-lg bg-slate-400 cursor-pointer overflow-hidden">
            <img
              src={
                userContent && userContent.profile_photo
                  ? userContent.profile_photo
                  : userContentGuest && userContentGuest.img_url
                  ? userContentGuest.img_url
                  : "/images/student-no-image.webp"
              }
              alt=""
              className="object-cover w-full h-full"
            />
          </div>
          <div className="detail flex flex-col justify-between">
            <h1
              className={`text-xl font-medium ${
                theme === "white" ? "text-black" : "text-white"
              }`}
            >
              {post.title}
            </h1>
            <div className="user flex gap-2 items-center">
              <div className="flex flex-row items-center gap-1">
                <p className="text-blue-600 cursor-pointer truncate text-base mob:block hidden">
                  {userContent
                    ? userContent.name
                    : userContentGuest
                    ? userContentGuest.name
                    : "Unknown User"}
                </p>
                <p className="text-blue-600 cursor-pointer truncate text-base mob:hidden block">
                  {userContent
                    ? userContent.name.split(" ")[0]
                    : userContentGuest
                    ? userContentGuest.name.split(" ")[0]
                    : "Unknown User"}
                </p>
                <p className="text-sm text-gray-400">
                  | {formatDate(post.date_of_created)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sm:rotate-90 sm:pr-10 rotate-0 cursor-pointer"
          onClick={() => {
            setSelectedDiscussionId(post.discussion_id);
            if (
              post.user_id === userContent?.user_id ||
              userContentGuest?.user_id
            ) {
              alert("Are you sure? this post will be delete");
              handleDelete(post.discussion_id);
            } else {
              alert("You are not authorized to delete this post.");
            }
          }}
        >
          <ThreeDot />
        </div>
      </div>
      <h1 className={`py-2 ${theme === "white" ? "text-black" : "text-white"}`}>
        {post.content}
      </h1>
      <ul className="text-gray-500 flex gap-x-1 lg:gap-x-1 md:gap-x-1 sm:gap-x-1 flex-wrap">
        {post?.tags?.map((tag: string, i: number) => (
          <li key={i}>#{tag}</li>
        ))}
      </ul>
      {post.file_url && (
        <div
          className={`file w-full rounded-lg flex items-center ${
            isFile(post.file_url)
              ? "justify-start"
              : "sm:h-[400px] mini:h-[340px] h-[280px] bg-slate-400 justify-center"
          }`}
        >
          {isImage(post.file_url) ? (
            <img
              src={post.file_url}
              alt={post.id}
              className="img w-full h-full rounded-lg object-cover"
            />
          ) : isVideo(post.file_url) ? (
            <video
              src={post.file_url}
              controls
              className="video w-full h-full rounded-lg object-cover"
            />
          ) : isFile(post.file_url) ? (
            <a
              href={post.file_url}
              download
              className="shared-file flex items-center text-blue-400 hover:underline"
            >
              <FolderIcon />
              Shared File
            </a>
          ) : (
            ""
          )}
        </div>
      )}

      <div className="post_footer flex justify-between text-gray-500 my-2">
        <ul className="flex gap-2 md:gap-8">
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              handleLikeDiscussionActions(
                userData?.user_id || userContentGuest?.user_id || "",
                post.discussion_id
              );
            }}
          >
            {likedDiscussions?.includes(post.discussion_id) ? (
              <LikedIcon />
            ) : (
              <LikeIcon />
            )}
            <span>{likesCount[post.discussion_id] || 0}</span>
            <p className="sm:block hidden">Like</p>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              if (selectedDiscussionId) {
                setSelectedDiscussionId("");
              } else {
                showComment(post.discussion_id);
                setSelectedDiscussionId(post.discussion_id);
              }
            }}
          >
            <CommentIcon /> <p className="sm:block hidden">Comment</p>
          </li>
          <li
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
              handleSaveDiscussionActions(
                userData?.user_id || userContentGuest?.user_id || "",
                post.discussion_id
              );
            }}
          >
            {savedDiscussions?.includes(post.discussion_id) ? (
              <SavedIcon />
            ) : (
              <SaveIcon />
            )}
            <span>{savesCount[post.discussion_id] || 0}</span>
            <p className="sm:block hidden">Save</p>
          </li>
        </ul>
        <p className="flex items-center gap-2 cursor-pointer">
          <ShareIcon /> Share
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {post.discussion_id === selectedDiscussionId &&
          discussionComments[selectedDiscussionId]?.map((comment: IComment) => (
            <div key={comment.id} className="comment">
              <div className="w-full rounded-lg bg-[#f9f9f9] p-2 mt-1 flex justify-between items-end">
                <div className="detail flex gap-2 w-full items-start">
                  <div className="rounded-full overflow-hidden w-6 h-6">
                    <img
                      src="/images/hamida.jpg"
                      alt=""
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="w-[95%]">{comment.content}</p>
                </div>
                <div className="cursor-pointer">
                  <ReplyIcon />
                </div>
              </div>
            </div>
          ))}
      </div>
      {selectedDiscussionId && (
        <div className="up flex gap-4 items-center mt-2">
          <input
            type="text"
            name=""
            id=""
            value={contentByDiscussion[post.discussion_id] || ""}
            onChange={(e) =>
              handleContentChange(post.discussion_id, e.target.value)
            }
            placeholder="Write a comment..."
            className={`border-2 pe-2 ps-4 py-[7px] rounded-lg w-full ${
              theme === "white"
                ? "bg-whitesecond"
                : "bg-secondblack border-gray-600"
            }`}
          />
          <button
            onClick={async () => {
              setSelectedDiscussionId(post.discussion_id);
              await addComment(post.discussion_id);
            }}
            className={`border-2 p-[13px] rounded-lg ${
              theme === "white"
                ? "bg-whitesecond hover:bg-gray-200"
                : "bg-secondblack border-gray-600 text-white"
            }`}
          >
            <img src="/images/icons/sendmsg.svg" alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscussionPost;
