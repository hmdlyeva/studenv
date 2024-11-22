import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/screens/default/footer/footer";
import Terms from "@/components/screens/terms/terms";
import React from "react";

type Props = {};

const TermsContainer = (props: Props) => {
  return (
    <main>
      <Navbar url="/terms-and-conditions" users={[]} />
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
