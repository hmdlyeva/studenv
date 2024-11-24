import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/screens/default/footer/footer";
import Form from "@/components/screens/contact/form/Form";
interface IProps {}

const ContactContainer = ({}: IProps) => {
  return (
    <main>
      <Navbar url="/contact" />
      <div
        className={`h-[100vh] w-full flex flex-col justify-center items-center text-center ${
          "white" === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container">
          <h1 className="text-5xl text-blue-500">Contact Us</h1>

          <Form/>
        </div>
      </div>
      <Footer color="bg-whitesecond" />
    </main>
  );
};

export default ContactContainer;
