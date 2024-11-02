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

// const postData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
type Props = {
  theme:string;
}

const MiddSection = ({theme}:Props) => {
  const user = useSelector((state: RootState) => state.users.users);
  const dis = useSelector((state: RootState) => state.diss.diss);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getDisData());
  }, []);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoSource, setVideoSource] = useState<string | null>(null);
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [pdfFileName, setPdfFileName] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [showYtInp, setShowYtInp] = useState(false);
  const [content, setContent] = useState("");

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

  const handleCameraAccess = async () => {
    if (isActive) {
      setShowYtInp(false)
      setShowMap(false)
      setPdfFileName("");
      setSelectedImage("");
      if (cameraStream) {
        cameraStream.getTracks().forEach((track) => track.stop());
        setCameraStream(null);
      }
      setIsActive(false);
    } else {
      setShowYtInp(false)
      setShowMap(false)
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

  useEffect(() => {
    if (cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream]);

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const videoInputRef = useRef<HTMLInputElement | null>(null);
  const pdfInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoSource("");
    setShowMap(false)
    setPdfFileName("");
    setShowYtInp(false)
    setIsActive(false);
    const files = event.target.files;
    if (files && files.length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      setSelectedImage(imageUrl);
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage("");
    setShowMap(false)
    setPdfFileName("");
    setIsActive(false);
    const files = event.target.files;
    if (files && files.length > 0) {
      const videoUrl = URL.createObjectURL(files[0]);
      setVideoSource(videoUrl);
      setShowYtInp(false)
    }
    else{
      setVideoSource("");
    }
  };

  const handlePdfChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage("");
    setVideoSource("");
    setShowYtInp(false)
    setShowMap(false)
    setIsActive(false);
    const files = event.target.files;
    if (files && files.length > 0) {
      setPdfFileName(files[0].name);
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
    setShowMap(false)
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
    setShowMap(false)
    setShowYtInp(false)
    setIsActive(false);
    if (pdfInputRef.current) {
      pdfInputRef.current.click();
    }
  };

  const handleYoutubeUrlChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedImage("");
    setPdfFileName("");
    setVideoSource("");
    setShowMap(false)
    setIsActive(false);
    setYoutubeUrl(event.target.value);
  };

  const handleLocationClick = () => {
    setSelectedImage("");
    setPdfFileName("");
    setVideoSource("");
    setShowYtInp(false)
    setIsActive(false);
    setShowMap((prevState) => !prevState);
  };

  const handleSubmit = async () => {
    if (content.trim() === "") return;

    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    const userId = userInfo.user_id;

    const newDiscussion = {
      topic: "Default Topic",
      content: content,
      tag: "Default Tag",
      discussion_score: 0,
      question: true,
      answered: true,
      user_id: userId,
    };

    await dispatch(postDisData(newDiscussion));
    setContent("");
  };

  return (
    <div className="middle flex flex-col gap-6 h-screen pb-8 overflow-y-auto scrollbar-none mx-auto px-4 lg:px-0">

      <div className={`card p-4 border rounded-2xl ${theme === "white" ? "bg-white": "bg-dark border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}>
        <div className="up flex gap-4 items-center">
          <div className="img w-10 h-10 rounded-lg bg-slate-400 cursor-pointer"></div>
          <input
            type="text"
            name=""
            id=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Share or ask something to everyone!"
            className={`border-2 p-2 ps-4 rounded-lg w-full ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}
          />
          <button
            onClick={handleSubmit}
            className={`border-2 p-2 rounded-lg ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600 text-white"}`}
          >
            add
          </button>
        </div>
        <div className="icons pt-2 pb-2">
          <ul className={`max-w-[90%] m-auto overflow-x-auto scrollbar-none flex gap-4 lg:gap-10 md:gap-6 sm:gap-3 p-3 pb-0 justify-start ${theme === "white" ? "text-black": "text-white"}`}>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleCameraAccess}
            >
              <Camera /> Camera
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleImageClick}
            >
              <ImageIcon /> Image
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleVideoClick}
            >
              <VideoIcon /> Video
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={handlePdfClick}
            >
              <FolderIcon /> File
            </li>
            <li
              className="flex items-center gap-2 cursor-pointer"
              onClick={handleLocationClick}
            >
              <LocationIcon /> Location
            </li>
          </ul>

          {cameraStream && isActive && (
            <div className="camera-preview rounded-2xl">
              <video
                ref={videoRef}
                style={{
                  width: "100%",
                  margin:"auto",
                  height: "400px",
                  borderRadius: 20,
                  marginTop: 10,
                }}
                autoPlay
                playsInline
                muted
              />
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
            <div className="image-preview mt-4 w-[95%] mx-auto" onClick={handleImageClick}>
              <img
                src={selectedImage}
                alt="Selected"
                className="object-cover h-[400px] w-full rounded-2xl cursor-pointer"
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
              <video controls className="w-[95%] mx-auto h-[400px] rounded-2xl">
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {showYtInp && (
            <div className="youtube-url-input mt-4">
              <input
                type="text"
                placeholder="Enter YouTube video URL"
                value={youtubeUrl}
                onChange={handleYoutubeUrlChange}
                className={`border-2 p-2 ps-4 rounded-lg w-full ${theme === "white" ? "bg-[#f9f9f9]": "bg-dark border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}
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
          )}

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
      
      <div className="h-[80vh] overflow-y-auto scrollbar-none flex flex-col gap-6">
        {dis &&
          dis.map((post, i) => {
            const userContent = user.find((us) => us.user_id === post.user_id);

            return (
              <div
                key={i}
                className={`"post border rounded-2xl p-4 flex flex-col gap-6" ${theme === "white" ? "bg-white": "bg-black border-gray-600"}`}
              >
                <div className="post_hero flex justify-between">
                  <div className="left flex gap-4">
                    <div className="img w-14 h-14 rounded-lg bg-slate-400 cursor-pointer"></div>
                    <div className="detail flex flex-col justify-between">
                      <h1 className={`text-xl font-medium ${theme === "white" ? "text-black": "text-white"}`}>{post.topic}</h1>
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
                <h1 className={`${theme === "white" ? "text-black": "text-white"}`}>{post.content}</h1>
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
      </div>
    </div>
  );
};

export default MiddSection;
