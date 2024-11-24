import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/screens/default/footer/footer";
import Faqs from "@/components/screens/faqs/faqs";
import React from "react";

const FaqContainer = () => {
  return (
    <main>
      <Navbar url="/terms-and-conditions" />
      <div
        className="bg-whitesecond pt-20 !important"
      >
       <Faqs/>
      </div>
      <Footer color="bg-whitesecond" />
    </main>
  );
};

export default FaqContainer;
