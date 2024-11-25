import { ICommunity, ICompany, IProfile, IUser } from "@/types/common.type";
import React, { useEffect, useRef, useState } from "react";
import Card from "../communityCard/Card";
import { useStore } from "@/hooks/store/store";
import {
  createCommunity,
  getCompanyById,
  getProfileById,
  getUserById,
  upload,
} from "@/api/common";
interface IProps {
  theme: string;
  communities: ICommunity[];
  setSelectedCommunity: React.Dispatch<React.SetStateAction<string>>;
  selectedCommunity: string;
}
const LeftSection = ({
  theme,
  communities,
  setSelectedCommunity,
  selectedCommunity,
}: IProps) => {
  const { addChannel, setFields } = useStore();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [newPostImage, setPostImage] = useState("");
  const [userData, setUserData] = useState<ICompany | IProfile | IUser>();
  // const [userRole, setUserRole] = useState<string>("");
  const [communityName, setCommunityName] = useState("");
  const [communityDescription, setCommunityDescription] = useState("");
  const [communitiesData, setCommunitiesData] = useState<ICommunity[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      const userRole = localStorage.getItem("userRole");

      if (userId && userRole) {
        try {
          let resp;
          // setUserRole(userRole);

          if (userRole === "Student") {
            resp = await getProfileById(userId);
            if (resp && resp.status === 200) {
              setUserData(resp.data);
            } else {
              console.log("profile yoxdu bu studentin?", resp);
            }
          } else if (userRole === "Company") {
            resp = await getCompanyById(userId);
            if (resp && resp.status === 200) {
              setUserData(resp.data);
            } else {
              console.log("company datasi yoxdu bu companynin?", resp);
            }
          } else if (userRole === "Guest") {
            resp = await getUserById(userId);
            if (resp && resp.status === 200) {
              setUserData(resp.data);
            } else {
              console.log("user datasi yoxdu bu guestin?", resp);
            }
          }
        } catch (error) {
          console.error("Data fetch sırasında hata:", error);
        }
      } else {
      }
    };

    fetchUserData();
    setCommunitiesData(communities);
  }, []);

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
      setSelectedImage("");
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
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

  const addCommunity = async () => {
    const data = {
      user_id: userData?.user_id,
      name: communityName,
      img_url: newPostImage,
      description: communityDescription,
      visibility: "public",
    };
    const resp = await createCommunity(data);
    if (resp) {
      setCommunitiesData((prev) => [...prev, resp]);
    }
  };

  return (
    // <div className="left w-[95%] md:w-2/5 mx-auto flex flex-col pt-32 sticky top-40">
    <div className="left w-[95%] md:w-2/5 mx-auto flex flex-col sticky md:top-40 top-24 h-[80vh] overflow-y-auto scrollbar-none">
      <div
        className={`card border rounded-2xl ${
          theme === "white" ? "bg-white" : "bg-dark border-gray-600"
        }`}
      >
        <h1
          className={`font-semibold p-4 ${
            theme === "white" ? "text-black" : "text-white"
          }`}
        >
          My Community
        </h1>
        <div
          className={`${
            theme === "white" ? "bg-gray-300 h-[1px]" : "bg-gray-600 h-[1px]"
          }`}
        />
        <div className="channels max-h-[20vh] md:max-h-[66vh] md:overflow-y-auto overflow-x-auto scrollbar-none flex md:flex-col flex-row">
          {communitiesData?.map((chanel, i: number) => (
            <div key={i}>
              <Card
                chanel={chanel}
                theme={theme}
                setSelectedCommunity={setSelectedCommunity}
                selectedCommunity={selectedCommunity}
              />
            </div>
          ))}
        </div>
        <button className="rounded-3xl border-2 border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 p-1 m-4 w-[90%] ">
          See All
        </button>
      </div>

      {addChannel && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

          <div className="flex flex-col items-center bg-white p-10 rounded-2xl z-50 lg:w-1/2 md:w-2/3 sm:w-3/4 w-4/5 relative">
            <div
              onClick={() => setFields({ addChannel: false })}
              className="absolute top-6 left-6 cursor-pointer"
            >
              <svg
                enableBackground="new 0 0 15 26"
                height="20px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 15 26"
                width="12px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <polygon
                  fill="#747474"
                  points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5"
                />
              </svg>
            </div>
            <h1 className="sm:text-lg text-base font-bold">Create Community</h1>
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="h-32 w-32 rounded-full overflow-hidden cursor-pointer border">
                {!selectedImage && (
                  <input
                    ref={imageInputRef}
                    type="file"
                    accept="image/*"
                    style={{ opacity: "0" }}
                    className="w-full h-full"
                    onChange={handleImageChange}
                  />
                )}

                {selectedImage && (
                  <div
                    className="image-preview w-32 h-32 mx-auto"
                    onClick={handleImageClick}
                  >
                    <img
                      src={newPostImage}
                      alt="Selected"
                      className="object-cover w-full h-full rounded-full cursor-pointer"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 ">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Community Name"
                  onChange={(e) => setCommunityName(e.target.value)}
                  className="border p-2 rounded-lg"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Description"
                  onChange={(e) => setCommunityDescription(e.target.value)}
                  className="border p-2 rounded-lg"
                />
              </div>
            </div>
            <div className="flex items-center w-40 gap-4 mt-6">
              <button
                className="border w-2/3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
                onClick={() => {
                  addCommunity();
                }}
              >
                {"Create"}
              </button>

              <button
                onClick={() => setFields({ addChannel: false })}
                className="border w-2/3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftSection;
