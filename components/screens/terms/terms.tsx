import React from "react";

const Terms = () => {
  return (
    <div className="container ">
      <h1 className="text-5xl text-blue-500 relative top-40">Terms and Conditions</h1>
      <ul className="w-full mx-auto flex flex-col gap-4 mt-44">
        <li>
          Welcome to the StudenV platform! By accessing and using our platform,
          you agree to comply with the following terms and conditions. Please
          read these carefully, as they define the rules for using our services.
        </li>
        <li>
          1. <strong>General Information</strong>
          <p>
            The StudenV platform is designed to provide students with valuable
            resources, services, and opportunities. These terms govern your use
            of the platform and establish the rights and responsibilities of
            both parties.
          </p>
        </li>
        <li className="flex flex-col gap-2">
          <p>
            2. <strong>User Rights and Responsibilities</strong>
          </p>
          <p>
            2.1. <strong>Registration</strong>:
          </p>
          <p>
            To use certain features of the platform, you may need to register.
            It is your responsibility to ensure the accuracy and completeness of
            the information you provide during registration.
          </p>
          <p>
            2.2. <strong>Account Security</strong>:
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. In the event of unauthorized access to your
            account, you must notify us immediately.
          </p>
          <p>
            2.3. <strong>Usage Restrictions</strong>:
          </p>
          <p>
            The platform may only be used for legal purposes. Transferring your
            account to another person or using the platform for prohibited
            activities is strictly forbidden.
          </p>
        </li>

        <li>
          3. <strong>Services</strong>
          <p>
            StudenV offers various services and resources for students, which
            may include educational tools, networking opportunities, and
            informational content. We reserve the right to update, modify, or
            discontinue any service at any time without prior notice.
          </p>
        </li>

        <li className="flex flex-col gap-2">
          <p>
            {" "}
            4. <strong>Privacy and Data Protection</strong>
          </p>
          <p>
            4.1. <strong>Personal Data Collection</strong>:
          </p>
          <p>
            We collect and process personal information in accordance with our
            Privacy Policy. Your data is used to enhance your experience and
            improve the platform’s services.
          </p>
          <p>
            4.2. <strong>Use of Information</strong>:
          </p>
          <p>
            The information provided by users is used for operational purposes,
            analytics, and to ensure a better experience on the platform.
          </p>
        </li>

        <li className="flex flex-col gap-2">
          <p>
            {" "}
            5. <strong>Payments and Refunds</strong>
          </p>
          <p>
            5.1. <strong>Payments</strong>:
          </p>
          <p>
            Some services may require payment. By completing a transaction, you
            agree to the pricing and payment terms specified at the time of
            purchase.
          </p>
          <p>
            5.2. <strong>Refund Policy</strong>:
          </p>
          <p>
            Refunds are only applicable under specific conditions, which will be
            detailed at the time of payment.
          </p>
        </li>
        <li>
          6. <strong>Intellectual Property</strong>
          <p>
            All content on the StudenV platform, including text, graphics,
            logos, and software, is protected by intellectual property laws. You
            may not reproduce, distribute, or modify any content without prior
            written consent.
          </p>
        </li>
        <li>
          7. <strong>Limitation of Liability</strong>
          <p>
            While we strive to ensure the platform operates smoothly, we do not
            guarantee uninterrupted or error-free services. StudenV is not
            liable for any technical issues, service disruptions, or
            user-generated content.
          </p>
        </li>

        <li>
          8. <strong>Prohibited Activities</strong>
          <p>Users are prohibited from:</p>
          <p>
            Engaging in illegal or harmful activities on the platform. Violating
            the rights of others, including intellectual property and privacy
            rights. Attempting to disrupt or harm the platform’s operations.
          </p>
        </li>
        <li>
          9. <strong>Amendments to Terms</strong>
          <p>
            StudenV reserves the right to update or modify these terms at any
            time. Users will be notified of any significant changes, and
            continued use of the platform indicates acceptance of the updated
            terms.
          </p>
        </li>

        <li>
          10. <strong>Contact Us</strong>
          <p>
            For any questions or concerns regarding these terms and conditions,
            please contact us:
          </p>
        </li>
        <li>
          <strong>Email</strong>: info@studenv.az
          <p>
            Thank you for trusting the StudenV project. We are committed to
            protecting your privacy rights!
          </p>
          <strong>Phone</strong>: +994 XX XXX XXXX
          <p>
            By using the StudenV platform, you agree to abide by these terms
            and conditions. Failure to comply may result in suspension or
            termination of access to the platform.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Terms;
