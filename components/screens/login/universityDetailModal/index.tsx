import { postProfile } from "@/api/common";
import DownArrow from "@/components/ui/DownArrow";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
  setUniversityDetailModal: (value: boolean) => void;
  setCreateModal: (value: boolean) => void;
  setUniversity: (value: string) => void;
  setYearOfStudy: (value: string) => void;
  setStudyLang: (value: string) => void;
  createModal: boolean;
  dateOfBirth: string;
  newPostImage: string;
  userId: string;
}

const UniversityDetailModal = ({
  setUniversityDetailModal,
  setCreateModal,
  setUniversity,
  setYearOfStudy,
  setStudyLang,
  createModal,
  dateOfBirth,
  newPostImage,
  userId,
}: Props) => {
  const [universityName, setUniversityName] = useState<string>("");
  const [yearOfStudy, setYear] = useState<string>("");
  const [studyLanguage, setLanguage] = useState<string>("");
  const router = useRouter();

  const handleCreateProfile = async () => {
    setCreateModal(true);

    const resp = await postProfile({
      sex: "",
      study_language: studyLanguage || "",
      job_status: "",
      university: universityName || "",
      year_of_study: yearOfStudy || "",
      date_of_birth: dateOfBirth || "",
      bio: "",
      score: 0,
      phone_number: "",
      profile_photo: newPostImage || "",
      cv_url: "",
      address: "",
      social_links: "",
      user_id: userId,
    });

    if (resp.profile_photo) {
      setCreateModal(false);
      router.push("/");
    }
  };

  const handleNext = () => {
    setUniversity(universityName);
    setYearOfStudy(yearOfStudy);
    setStudyLang(studyLanguage);

    setUniversityDetailModal(false);
    setCreateModal(true);
    handleCreateProfile();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-10 z-50 w-full h-screen">
        <div className="flex flex-col items-center justify-around bg-white rounded-2xl h-full z-50 container relative">
          <div className="flex flex-col items-center gap-10 w-full">
            <div className="text-2xl">University Detail</div>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="University Name"
                value={universityName}
                onChange={(e) => setUniversityName(e.target.value)}
                className="p-2 border rounded-lg"
              />
              <select
                value={yearOfStudy}
                onChange={(e) => setYear(e.target.value)}
                className="p-2 border rounded-lg"
              >
                <option value="" disabled>
                  Select Year of Study
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select
                value={studyLanguage}
                onChange={(e) => setLanguage(e.target.value)}
                className="p-2 border rounded-lg"
              >
                <option value="" disabled>
                  Select Language
                </option>
                <option value="AZ">AZ</option>
                <option value="ENG">ENG</option>
                <option value="RUS">RUS</option>
              </select>
            </div>
          </div>

          <div className="sm:w-1/2 w-[95%]">
            <div
              className="flex items-center justify-end w-full cursor-pointer"
              onClick={handleNext}
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

export default UniversityDetailModal;
