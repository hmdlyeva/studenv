"use client";
import Arrow from "@/components/ui/Arrow";
import { getUserData } from "@/redux/slice/auth/auth";
import { getResourceData } from "@/redux/slice/resource/resource";
import { AppDispatch, RootState } from "@/redux/store/store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
type Props = {
  theme: string;
};
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
  const resource = useSelector((state: RootState) => state.resources.resources);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getResourceData());
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
      <div className="h-[80vh] w-[95%] mx-auto overflow-y-auto scrollbar-none flex flex-col gap-6">
      {resource.map((p, i) => (
          <div
            key={i}
            className={`post border rounded-2xl p-4 flex md:flex-row flex-col justify-between items-center ${
              theme === "white"
                ? "bg-whitesecond"
                : "bg-secondblack border-gray-600"
            } ${theme === "white" ? "text-black" : "text-white"}`}
          >
            <div className="left flex md:flex-row flex-col gap-6 ps-4">
              {/* <div className="img w-14 h-12 rounded-lg bg-slate-400 cursor-pointer"></div> */}
              <div className="detail flex flex-col gap-2">
                <p>GUIDE</p>
                <h2 className="font-semibold text-2xl">
                 {p.title}
                </h2>
                <p className="w-2/3">
                  {p.description}
                </p>

                <p className="flex gap-2 items-center">
                  TOPIC:{" "}
                  <span className="text-blue-500">
                    How Human Trafficking is Related to Healthcare
                  </span>{" "}
                  <Arrow color="#3B82F6 " />
                </p>
                <div className="right flex gap-2 md:w-1/3 w-full md:hidden visible">
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

        {/* {postData.map((p, i) => (
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
        ))} */}
      </div>
    </div>
  );
};

export default MiddSection;
