import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] text-center bg-blue-500 text-white flex flex-col justify-center">
      <h1 className="text-6xl font-bold w-1/2 mx-auto">Student Community Base Digital Environment</h1>
      <p className="text-md text-blue-100 text-sm">GROW TOGETHER</p>
      <button className="w-[220px] h-10 mx-auto border bg-white rounded-lg text-blue-600 hover:text-white mt-8 hover:border-white hover:bg-transparent">JOIN US</button>
    </div>
  );
};

export default Hero;
