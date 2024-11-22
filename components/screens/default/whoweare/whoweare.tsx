import Righticon from "@/components/ui/Righticon";
import React from "react";

type Props = {};

const Whoweare = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] container">
      <h2 className="text-5xl text-blue-500">Who We Are ?</h2>
      <div className="flex flex-col gap-4 w-full mt-14">
        <div className="border p-6 h-36 w-full relative rounded-lg">
          <h3 className="text-2xl">
            Unique Environment for all University Student
          </h3>
          <p className="mb-4">
            We make a unique environment for all university students that they
            can discuss what they want
          </p>
          <div className="absolute bottom-[10px] right-8 flex items-center text-sm gap-1 cursor-pointer">
            explore <Righticon />
          </div>
        </div>
        <div className="border p-6 h-36 w-full relative rounded-lg text-end">
          <h3 className="text-2xl">
            Unique Environment for all University Student
          </h3>
          <p className="mb-4">
            We make a unique environment for all university students that they
            can discuss what they want
          </p>
          <div className="absolute bottom-[10px] left-6 flex items-center text-sm gap-1 cursor-pointer">
            explore <Righticon />
          </div>
        </div>
        <div className="border p-6 h-36 w-full relative rounded-lg">
          <h3 className="text-2xl">
            Unique Environment for all University Student
          </h3>
          <p className="mb-4">
            We make a unique environment for all university students that they
            can discuss what they want
          </p>
          <div className="absolute bottom-[10px] right-8 flex items-center text-sm gap-1 cursor-pointer">
            explore <Righticon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
