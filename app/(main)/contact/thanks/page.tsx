import LoadingContainer from "@/container/loadingContainer";
import dynamic from "next/dynamic";
import React from "react";

const SuccesContainer = dynamic(
  () => import("@/container/successContainer"),
  {
    loading: () => <LoadingContainer />,
  }
);
const SuccessPage = () => {
  return <SuccesContainer />;
};

export default SuccessPage;
