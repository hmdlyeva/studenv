import { upload } from "@/api/common";
import DownArrow from "@/components/ui/DownArrow";
import React, { useRef, useState } from "react";

interface Props {
  setDateOfBirthModal: (value: boolean) => void;
  setProfileModal: (value: boolean) => void; 
  setPostImage: (value: string) => void; 
  newPostImage: string; 
}


const ProfileModal = ({
  setDateOfBirthModal,
  setProfileModal,
  setPostImage,
  newPostImage
}: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
      setSelectedImage("");
    }
  };

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPostImage("")

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

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-10 z-50 w-full h-screen">
        <div className="flex flex-col items-center justify-around bg-white rounded-2xl h-full z-50 container relative">
          <div className="flex flex-col items-center gap-10">
            <div className="upload border sm:w-64 w-40 sm:h-64 h-40 rounded-full relative">
              <input
                ref={imageInputRef}
                type="file"
                accept="image/*"
                className="w-full h-full rounded-full cursor-pointer opacity-0"
                onChange={handleImageChange}
              />
              {selectedImage ? (
                <div
                  className="w-full h-full  rounded-full absolute top-0"
                  onClick={handleImageClick}
                >
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              ) : (
                <div
                  className="w-full h-full  rounded-full absolute top-0 cursor-pointer"
                  onClick={handleImageClick}
                >
                  <img
                    src="/images/Image-not-found.png"
                    alt="Selected"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="text-2xl">Upload Photo</div>
            {
              !newPostImage && selectedImage && <div>Uploading...</div>
            }
          </div>

          <div className="sm:w-1/2 w-[95%]">
            <div
              className="flex items-center justify-end w-full cursor-pointer"
              onClick={() => {
                if (newPostImage) {
                  setProfileModal(false);
                  setDateOfBirthModal(true);
                }
              }}
            >
              Next
              <div className="-rotate-90">
                <DownArrow />
              </div>
            </div>
            <div className="progress w-full bg-gray-100 h-1 rounded-md overflow-hidden mt-2">
              <div className="sm:w-40 w-20 bg-blue-500 h-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
