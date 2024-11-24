import React from "react";


const CreatingModal = () => {

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="flex flex-col items-center bg-white p-10 z-50 w-full h-screen">
        <div className="flex flex-col items-center justify-center bg-white rounded-2xl h-full z-50 container relative">
          <div className="flex items-center justify-center gap-10">
            <div className="text-2xl">Profile Creating...</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatingModal;
