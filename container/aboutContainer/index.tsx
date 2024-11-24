import React from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/screens/default/footer/footer";

const AboutContainer = () => {
  return (
    <main>
      <Navbar url="/about" />
      <div
        className={`h-[100vh] w-full flex flex-col justify-center items-center text-center ${
          "white" === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container">
        <h1 className="text-5xl text-blue-500">About Us</h1>
        <p className="mt-10">
          StudenV is a unique platform created for university students in
          Azerbaijan. Our primary goal is to facilitate the exchange of
          knowledge and experiences among students, support their development,
          and establish a hub for connecting them with the business world. Here,
          students can engage in discussions, ask questions, gain information
          about internships and scholarship programs, and showcase their
          personal skills.
        </p>
        <br />
        <p>
          On our platform, students can not only participate in various events
          and opportunities but also use the points they accumulate to access
          premium events and resources. Companies can join our system to observe
          active students, explore their skills, and invite them for future
          collaborations.
        </p>
        <br />
        <p>
          As the StudenV team, we aim to contribute to students' academic and
          personal growth by providing them with an innovative environment. We
          are here to create a community where every student can share their
          ideas and develop their skills.
        </p>
        </div>


      </div>
      <Footer color="bg-whitesecond"/>
    </main>
  );
};

export default AboutContainer;
