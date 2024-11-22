"use client";
import PlusIcon from "@/components/ui/PlusIcon";
import SearchIcon from "@/components/ui/SearchIcon";
import ThreeDot from "@/components/ui/ThreeDot";
import XIcon from "@/components/ui/XIcon";
import React, { useState } from "react";

// const channelData = [1, 2, 3, 4, 5, 6, 7, 8];
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
  {
    title: "IT School Materials",
  },
  {
    title: "Mathematics Teories",
  },
];
type Props = {
  theme:string;
}
type Tag = { title: string };
const FilterSection = ({theme}:Props) => {
  const [addModal, setAddModal] = useState(false);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);

  const handleTagClick = (tag: Tag) => {
    if (selectedTags.find((selectedTag) => selectedTag.title === tag.title)) {
      setSelectedTags(selectedTags.filter((selectedTag) => selectedTag.title !== tag.title));
    } 
    else {
      setSelectedTags([...selectedTags, tag]);
    }
  };


  const handleTagRemove = (tag: Tag) => {
    setSelectedTags(selectedTags.filter((selectedTag:Tag) => selectedTag.title !== tag.title));
  };
  return (
    <div className={`filter w-full ${theme === "white" ? "bg-white": "bg-dark border-gray-600"} ${theme === "white" ? "text-black": "text-white"}`}>
      <div className="up container flex justify-between items-center">
        <div className={`input md:w-2/5 w-[95%] mx-auto border rounded-sm flex items-center p-2 gap-2 my-6 ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Human Trafficking"
            className={`w-full ps-2 focus:outline-none ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}
          />
          <SearchIcon />
        </div>
        <p className="w-2/5 md:block hidden">
          Your search for <strong>&quot;Human Trafficking&quot;</strong> returns 0
          results
        </p>
      </div>
      <div className={`${theme === "white" ? "bg-gray-300 h-[1px]": "bg-gray-600 h-[1px]"}`}/>
      <div className="down container flex justify-between items-center">
        <div className="left flex items-center my-6">
          <ThreeDot />
          <p className="font-semibold text-xl">Filter Resources by:</p>
        </div>
        <div className="right flex items-center gap-4 mx-4">
          <div className="tags lg:flex flex-row items-center gap-4 md:visible hidden">
         {selectedTags.map((tag:{title:string}, i) => (
              <div
                key={i}
                className={`tag cursor-pointer gap-2 flex py-1 px-2 rounded-md items-center bg-blue-200 ${theme === "white" ? "text-white bg-blue-500": "text-black bg-blue-500"}`}
                onClick={() => handleTagRemove(tag)}
              >
                {tag.title}
                <XIcon color={`${theme === "white" ? "white": "#1e3a8a"}`} />
              </div>
            ))}
          </div>
          <div
            className={`plus cursor-pointer rounded-md border p-1 flex justify-center items-center relative ${theme === "white" ? "bg-white": "bg-dark border-gray-600"}`}
            onClick={() => setAddModal(!addModal)}
          >
            <PlusIcon />
            {addModal && (
              <div className={`tags flex flex-col w-60 absolute top-[42px] right-0 border rounded-xl px-2 h-52 overflow-y-auto scrollbar-none ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}>
                {tags.map((tag, i) => (
                  <div
                    key={i}
                    onClick={() => handleTagClick(tag)}
                    className={`py-2 px-4 my-2 rounded-md select-none cursor-pointer ${
                      selectedTags.find((selectedTag:{title:string}) => selectedTag.title === tag.title)
                        ? `${theme === "white" ? "text-white bg-blue-500": "text-black bg-blue-500"}`
                        : `${theme === "white" ? "bg-[#f9f9f9] hover:bg-[#f0f0f0]": "bg-[#787878] hover:bg-[#909090]"}`
                    }`}
                  >
                    {tag.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
