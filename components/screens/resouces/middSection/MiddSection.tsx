"use client";
import Arrow from "@/components/ui/Arrow";
import { getUserData } from "@/redux/slice/auth/auth";
import { getDisData } from "@/redux/slice/discussion/discussion";
import { AppDispatch } from "@/redux/store/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
type Props = {
  theme: string;
};
const postData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const tags = [
  {
    title: "Safety & Security",
  },
  {
    title: "Physican Office Practice",
  },
  {
    title: "Clinical Practice",
  },
  {
    title: "Medical Staff",
  },
];

const MiddSection = ({ theme }: Props) => {
  // const user = useSelector((state: RootState) => state.users.users);
  // const dis = useSelector((state: RootState) => state.diss.diss);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getDisData());
  }, []);

  // const formatDate = (dateString: string) => {
  //   const options: Intl.DateTimeFormatOptions = {
  //     day: "numeric",
  //     month: "short",
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   };
  //   const date = new Date(dateString);
  //   return new Intl.DateTimeFormat("en-US", options)
  //     .format(date)
  //     .replace(",", "");
  // };

  return (
    <div className="middle w-full flex flex-col gap-6 h-full py-6">
      <div className="h-[80vh] max-w-[95%] mx-auto overflow-y-auto scrollbar-none flex flex-col gap-6">
        {/* {dis &&
          dis.map((post, i) => {
            const userContent = user.find((us) => us.user_id === post.user_id);

            return (
              <div
                key={i}
                className="post bg-white border rounded-2xl p-4 flex flex-col gap-6"
              >
                <div className="post_hero flex justify-between">
                  <div className="left flex gap-4">
                    <div className="img w-14 h-14 rounded-lg bg-slate-400 cursor-pointer"></div>
                    <div className="detail flex flex-col justify-between">
                      <h1 className="text-xl font-medium">{post.topic}</h1>
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
                <h1>{post.content}</h1>
                <ul className="text-gray-500 flex gap-8 lg:gap-5 md:gap-3 sm:gap-2">
                  <li>#{post.tag}</li>
                </ul>
                <div className="img w-full h-[600px] rounded-lg bg-slate-400"></div>
                <div className="post_footer flex justify-between text-gray-500">
                  <ul className="flex gap-8">
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
          })} */}

        {postData.map((p, i) => (
          <div
            key={i}
            className={`post border rounded-2xl p-4 flex md:flex-row flex-col justify-between items-center ${
              theme === "white"
                ? "bg-whitesecond"
                : "bg-secondblack border-gray-600"
            } ${theme === "white" ? "text-black" : "text-white"}`}
          >
            <div className="left flex md:flex-row flex-col gap-6">
              <div className="img w-14 h-12 rounded-lg bg-slate-400 cursor-pointer"></div>
              <div className="detail flex flex-col gap-2">
                <p>GUIDE</p>
                <h2 className="font-semibold text-2xl">
                  Adult Human Trafficking Screening Tool and Guide
                </h2>
                <p className="w-2/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae repellat cupiditate quisquam quidem ex velit
                  labore, incidunt deserunt quasi magnam numquam vero assumenda
                  autem a nisi, officiis provident harum nobis.
                </p>

                <p className="flex gap-2 items-center">
                  TOPIC:{" "}
                  <span className="text-blue-500">
                    How Human Trafficking is Related to Healthcare
                  </span>{" "}
                  <Arrow color="#3B82F6 " />
                </p>
                <div className="right lg:flex gap-2 md:w-1/3 w-full md:hidden block">
                  TAGS:
                  <div className="flex flex-col items-start">
                    <p> {tags[i % 4].title}</p>
                    <p>{tags[(i + 1) % 3].title}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right lg:flex gap-2 md:w-1/3 w-2/3  md:block hidden">
              TAGS:
              <div className="flex flex-col items-start">
                <p> {tags[i % 4].title}</p>
                <p>{tags[(i + 1) % 3].title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiddSection;
