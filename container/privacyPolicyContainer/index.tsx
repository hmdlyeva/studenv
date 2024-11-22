import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/screens/default/footer/footer";
import React from "react";

type Props = {};

const PrivacyPolicyContainer = (props: Props) => {
  return (
    <main>
      <Navbar url="/privacy-policy" users={[]} />
      <div
        className={`h-[100vh] w-full flex flex-col justify-center items-center ${
          "white" === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container">
          <h1 className="text-5xl text-blue-500 mt-20">Privacy and Terms Policy</h1>
          <ul className="w-full mx-auto flex flex-col gap-4 mt-4">
            <li>
              1. <strong>Introduction</strong>
              <p>This Privacy and Terms Policy outlines the rules
              for the collection, use, and protection of user data in the
              StudentV project. Our goal is to provide a secure and transparent
              service while safeguarding users' personal information.</p>
              
            </li>
            <li>
              2. <strong>Collected Data</strong> 
              <p>Within the scope of our project, we may collect
              the following information: Personal Information: Name, surname,
              email address, and other contact details. Technical Information:
              Device type, IP address, browser type, and operating system. Usage
              Information: Activities and preferences on the platform.</p>
            </li>

            <li>
              3. <strong>Use of Data</strong> 
              <p>The collected data is used for the following
              purposes: Improving the service; Communicating with users;
              Conducting research and analysis; Ensuring security and meeting
              legal requirements.</p>
            </li>

            <li>
              4. <strong>Sharing Data with Partners</strong>  
              <p>We only share your data in the
              following cases: To comply with legal requirements; With technical
              support providers of the project; For analysis and statistical
              purposes in an anonymized form.</p>
            </li>

            <li>
              5. <strong>Data Protection</strong> 
              <p>To ensure the security of your data, we: Use
              encryption and security protocols; Grant access to data only to
              authorized personnel; Delete data when it is no longer necessary.</p>
            </li>
            <li>
              6. <strong>User Rights</strong> 
              <p>You have the following rights: Access your
              collected data; Request corrections or deletion of your data; Ask
              questions about our privacy policy.</p>
            </li>
            <li>
              7. <strong>Policy Changes</strong> 
              <p>This policy may be updated periodically. Any
              changes will be announced on our website or via email
              notifications.</p>
            </li>

            <li>
              8. <strong>Contact</strong> 
              <p>If you have any questions or suggestions, feel free to
              contact us:</p>
            </li>
            <li>
              <strong>Email</strong>: info@studentv.az 
              <p>Thank you for trusting the StudentV project. We are committed to protecting your privacy rights!</p>
            </li>
          </ul>
        </div>
      </div>
      <Footer color="bg-whitesecond" />
    </main>
  );
};

export default PrivacyPolicyContainer;
