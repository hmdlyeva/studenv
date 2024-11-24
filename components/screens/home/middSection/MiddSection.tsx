"use client";
import { postDiscussions, upload } from "@/api/common";
import DiscussionPost from "@/components/common/discussionPost";
import Camera from "@/components/ui/Camera";
import FolderIcon from "@/components/ui/FolderIcon";
import ImageIcon from "@/components/ui/ImageIcon";
import LocationIcon from "@/components/ui/LocationIcon";
import VideoIcon from "@/components/ui/VideoIcon";
import { useStore } from "@/hooks/store/store";
import { IDiscussion, IUser } from "@/types/common.type";
import React, { useEffect, useRef, useState } from "react";

interface Props {
  theme: string;
  users: IUser[];
  discussions: IDiscussion[];
}

const MiddSection = ({ theme, users, discussions }: Props) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoSource, setVideoSource] = useState<string | null>(null);
  const [pdfFileName, setPdfFileName] = useState<string | null>(null);
  const [uploadedFileUrl, setUploadedFileUrl] = useState("");
  const [showMap, setShowMap] = useState(false);
  const [showYtInp, setShowYtInp] = useState(false);
  const [content, setContent] = useState("");
  const [newPostImage, setPostImage] = useState("");
  const { searchedItem } = useStore();

  const handleCameraAccess = async () => {
    if (isActive) {
      setShowYtInp(false);
      setShowMap(false);
      setPdfFileName("");
      setSelectedImage("");

      setPostImage("");
      setUploadedFileUrl("");
      setVideoSource(null);
      setIsActive(false);
      setCameraStream(null);
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
        setCameraStream(null);
      }
      setIsActive(false);
    } else {
      setShowYtInp(false);
      setShowMap(false);
      setPdfFileName("");
      setSelectedImage("");
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setCameraStream(stream);
        setIsActive(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Never gonna give you up!", error);
      }
    }
  };

  const handleCaptureImage = async () => {
    if (!videoRef.current) return;

    const canvas = document.createElement("canvas");
    const video = videoRef.current;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(async (blob) => {
        if (blob) {
          const file = new File([blob], "captured-image.jpg", {
            type: "image/jpeg",
          });

          const uploadedUrl = await upload(file);
          if (uploadedUrl) {
            setIsActive(false);
            setPostImage(uploadedUrl);
            setSelectedImage(uploadedUrl);
          }
        }
      }, "image/jpeg");
    }
  };

  useEffect(() => {
    if (cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream]);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);
  const pdfInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVideoSource("");
    setShowMap(false);
    setPdfFileName("");
    setShowYtInp(false);
    setIsActive(false);

    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);

      // Upload the file
      const uploadedUrl = await upload(file);
      if (uploadedUrl) {
        setPostImage(uploadedUrl);
      }
    }
  };

  const handleVideoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedImage("");
    setShowMap(false);
    setPdfFileName("");
    setIsActive(false);

    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      const uploadedUrl = await upload(file);
      if (uploadedUrl) {
        setVideoSource(uploadedUrl);
        setShowYtInp(false);
      }
    } else {
      setVideoSource("");
    }
  };

  const handlePdfChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedImage("");
    setVideoSource("");
    setShowYtInp(false);
    setShowMap(false);
    setIsActive(false);
    const files = event.target.files;
    if (files && files.length > 0) {
      const uploadedUrl = await upload(files[0]);
      if (uploadedUrl) {
        setPdfFileName(files[0].name);
        setUploadedFileUrl(uploadedUrl);
      }
    }
  };

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
      setSelectedImage("");
    }
    setIsActive(false);
  };

  const handleVideoClick = () => {
    setSelectedImage("");
    setPdfFileName("");
    setVideoSource("");
    setShowMap(false);
    setIsActive(false);
    setShowYtInp(!showYtInp);
    if (videoInputRef.current) {
      videoInputRef.current.click();
    }
  };

  const handlePdfClick = () => {
    setSelectedImage("");
    setPdfFileName("");
    setVideoSource("");
    setShowMap(false);
    setShowYtInp(false);
    setIsActive(false);
    if (pdfInputRef.current) {
      pdfInputRef.current.click();
    }
  };

  const handleLocationClick = () => {
    setSelectedImage("");
    setPdfFileName("");
    setVideoSource("");
    setShowYtInp(false);
    setIsActive(false);
    setShowMap((prevState) => !prevState);
  };

  const handleSubmit = async () => {
    if (content.trim() === "") return;

    const userId = localStorage.getItem("userId");

    const newDiscussion = {
      title: "Default Topic",
      content: content ? content : "",
      answered: true,
      user_id: userId,
      file_url: newPostImage
        ? newPostImage
        : videoSource
        ? videoSource
        : uploadedFileUrl
        ? uploadedFileUrl
        : "",
    };

    await postDiscussions(newDiscussion);
    setContent("");
    setPostImage("");
    setShowYtInp(false);
    setShowMap(false);
    setPdfFileName(null);
    setUploadedFileUrl("");
    setVideoSource(null);
    setSelectedImage(null);
    setIsActive(false);
    setCameraStream(null);
  };

  return (
    <div className="middle flex min-h-screen flex-col gap-6 pb-8 mx-auto px-4 lg:px-0 lg:w-1/2 tb:w-[68%] w-full">
      {/* <div
        className={`card pt-[28px] pb-4 z-10 ${
          theme === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      > */}
        <div
          className={`card md:mt-40 mt-24 p-4 border rounded-2xl ${
            theme === "white" ? "bg-white" : "bg-black border-gray-600"
          } ${theme === "white" ? "text-black" : "text-white"}`}
        >
          <div className="up flex gap-2">
            <div className="img rounded-lg h-[38px] mt-[1px] w-10 mini:block hidden bg-slate-400 cursor-pointer overflow-hidden">
              <img
                src={"/images/hamida.jpg"}
                alt=""
                className="object-cover h-full"
              />
            </div>
            <input
              type="text"
              name=""
              id=""
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share or ask something to everyone!"
              className={`border-2 pe-2 ps-4 py-[6px] rounded-lg w-full ${
                theme === "white"
                  ? "bg-whitesecond"
                  : "bg-secondblack border-gray-600"
              }`}
            />
            <button
              onClick={handleSubmit}
              className={`border-2 p-[12px] rounded-lg ${
                theme === "white"
                  ? "bg-whitesecond hover:bg-gray-200"
                  : "bg-secondblack border-gray-600 text-white"
              }`}
            >
              <img src="/images/icons/sendmsg.svg" alt="" />
            </button>
          </div>
          <div className="icons pt-2 pb-2">
            <ul
              className={`max-w-[90%] m-auto overflow-x-auto scrollbar-none flex gap-4 lg:gap-8 tb:gap-3 md:gap-5 p-3 pb-0 mini:justify-center justify-evenly ${
                theme === "white" ? "text-black" : "text-white"
              }`}
            >
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleCameraAccess}
              >
                <Camera />
                <div className="mini:block hidden">Camera</div>
              </li>
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleImageClick}
              >
                <ImageIcon />
                <div className="mini:block hidden">Photo</div>
              </li>
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleVideoClick}
              >
                <VideoIcon />
                <div className="mini:block hidden">Video</div>
              </li>
              <li
                className="flex items-center gap-2 cursor-pointer"
                onClick={handlePdfClick}
              >
                <FolderIcon />
                <div className="mini:block hidden">File</div>
              </li>
              <div className="xl:block lg:hidden mob:block hidden">
                <li
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={handleLocationClick}
                >
                  <LocationIcon /> Location
                </li>
              </div>
            </ul>

            {cameraStream && isActive && (
              <div className="w-full flex flex-col items-end">
                <div className="camera-preview rounded-2xl overflow-hidden mt-3">
                  <video
                    ref={videoRef}
                    className="w-full rounded-sm object-cover"
                    autoPlay
                    playsInline
                    muted
                  />
                </div>

                <button
                  onClick={handleCaptureImage}
                  className={`mt-4 border-2 p-2 rounded-lg right-0 flex items-center gap-1 ${
                    theme === "white" ? "bg-gray-100" : "bg-gray-800 text-white"
                  }`}
                >
                  take <Camera />
                </button>
              </div>
            )}

            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div
                className="image-preview mt-4 w-[95%] mx-auto"
                onClick={handleImageClick}
              >
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="object-cover w-full rounded-2xl cursor-pointer"
                />
              </div>
            )}

            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              style={{ display: "none" }}
              onChange={handleVideoChange}
            />
            {videoSource && (
              <div className="video-preview mt-4">
                <video
                  controls
                  className="w-[95%] mx-auto object-cover rounded-2xl"
                >
                  <source src={videoSource} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}

            {/* {showYtInp && (
              <div className="youtube-url-input mt-4">
                <input
                  type="text"
                  placeholder="Enter YouTube video URL"
                  value={youtubeUrl}
                  onChange={handleYoutubeUrlChange}
                  className={`border-2 p-2 ps-4 rounded-lg w-full ${
                    theme === "white"
                      ? "bg-[#f9f9f9]"
                      : "bg-dark border-gray-600"
                  } ${theme === "white" ? "text-black" : "text-white"}`}
                />
                {youtubeUrl && (
                  <div className="youtube-video-preview mt-2">
                    <iframe
                      width="100%"
                      height="300"
                      src={`https://www.youtube.com/embed/${new URL(
                        youtubeUrl
                      ).searchParams.get("v")}`}
                      title="YouTube video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            )} */}

            <input
              ref={pdfInputRef}
              type="file"
              accept=".pdf"
              style={{ display: "none" }}
              onChange={handlePdfChange}
            />
            {pdfFileName && (
              <div className="pdf-preview mt-4">
                <p>{pdfFileName} has been uploaded.</p>
              </div>
            )}

            {showMap && (
              <div className="map mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97210.33214846!2d49.9122176!3d40.412774399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1727381497381!5m2!1sen!2saz"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      {/* </div> */}

      <div className="flex flex-col gap-6 md:mb-0 mb-14">
        {discussions &&
          discussions
            .filter((post: IDiscussion) =>
              post.title.toLowerCase().includes(searchedItem.toLowerCase())
            )
            .map((post: IDiscussion, i: number) => {
              const userContent = users.find(
                (us: IUser) => us.user_id === post.user_id
              );
              return (
                <div key={i}>
                  <DiscussionPost
                    post={post}
                    userContent={userContent}
                    theme={theme}
                    users={users}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default MiddSection;
