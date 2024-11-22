import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/screens/default/footer/footer";
import Faqs from "@/components/screens/faqs/faqs";
import React from "react";

type Props = {};

const FaqContainer = (props: Props) => {
  return (
    <main>
      <Navbar url="/terms-and-conditions" users={[]} />
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
