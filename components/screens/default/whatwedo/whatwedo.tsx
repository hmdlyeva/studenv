import React from "react";

const Whatwedo = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] container gap-20">
      <div className="left md:w-3/5 w-full flex flex-col gap-4">
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg h-32">
        <h3 className="text-2xl">Post Discussion</h3>
          <p>Login as a University Student and enjoy discussions section</p>
        </div>
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg h-32">
        <h3 className="text-2xl">Post Discussion</h3>
          <p>Login as a University Student and enjoy discussions section</p>
        </div>
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg h-32">
        <h3 className="text-2xl">Post Discussion</h3>
          <p>Login as a University Student and enjoy discussions section</p>
        </div>
        <div className="flex flex-col gap-2 p-4 bg-gray-100 rounded-lg h-32">
        <h3 className="text-2xl">Post Discussion</h3>
          <p>Login as a University Student and enjoy discussions section</p>
        </div>
      </div>
      <div className="right md:w-1/4 w-full text-center">
      <h2 className="text-5xl text-blue-500">What We Do ?</h2>
        <p className="mt-4">
          We collect all university students data for creating individual
          discussion platform.
        </p>
      </div>
    </div>
  );
};

export default Whatwedo;
