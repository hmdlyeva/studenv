import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/screens/default/footer/footer";
import Terms from "@/components/screens/terms/terms";
import React from "react";


const TermsContainer = () => {
  return (
    <main>
      <Navbar url="/terms-and-conditions" />
      <div
        className={`bg-whitesecond`}
      >
       <Terms/>
      </div>
      <Footer color="bg-whitesecond" />
    </main>
  );
};

export default TermsContainer;
