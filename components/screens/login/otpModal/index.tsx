import React, { useRef, useState } from "react";
import Image from "next/image";
import { verifyOtp, verifyOtpResend } from "@/api/auth";
import { useRouter } from "next/navigation";

interface Props {
  setIsModalOpen: (value: boolean) => void;
  confirmEmail: string;
  setNotVerifyed: (value: boolean) => void;
  setErrorLogin: (value: string) => void;
  setResetModal: (value: boolean) => void;
  token: string;
}

const OtpModal = ({
  setIsModalOpen,
  confirmEmail,
  setNotVerifyed,
  setErrorLogin,
  setResetModal,
  token,
}: Props) => {
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
  const [otpInputFilled, setOtpInputFilled] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const formatEmail = (email: string) => {
    if (!email) return "";
    const [username, domain] = email.split("@");
    return `${username.slice(0, 2)}**@${domain.slice(-1)}`;
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtpCode = [...otpCode];
    newOtpCode[index] = value.slice(-1);
    setOtpCode(newOtpCode);
    setOtpInputFilled(newOtpCode.every((digit) => digit !== ""));

    if (value && index < otpCode.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, event: { key: string }) => {
    if (event.key === "Backspace" && otpCode[index] === "") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmitOtp = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    const otpString = otpCode.join("");
    const result = await verifyOtp(confirmEmail, otpString);
    setLoading(false);
    if (token) {
      if (result?.status === 200) {
        //   router.refresh();
        setResetModal(true);
      } else if (result.status !== 200) {
        setError(result.response.data.detail);
      } else {
        console.log("Error");
      }
    } else {
      if (result?.status === 200) {
        router.refresh();
      } else if (result.status !== 200) {
        setError(result.response.data.detail);
      } else {
        console.log("Error");
      }
    }
  };

  const handleVerify = async () => {
    setErrorLogin("");
    setError(null);
    setOtpCode(["", "", "", "", "", ""]);
    const response = await verifyOtpResend(confirmEmail);
    if (response?.status === 200) {
      setIsModalOpen(true);
    } else {
      setErrorLogin("Something went wrong. Please try later");
      setNotVerifyed(true);
    }
  };
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="flex flex-col items-center bg-white p-10 rounded-2xl z-50 lg:w-1/2 md:w-2/3 sm:w-3/4 w-4/5 relative">
        <div
          onClick={() => setIsModalOpen(false)}
          className="absolute top-6 left-6 cursor-pointer"
        >
          <svg
            enableBackground="new 0 0 15 26"
            height="20px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 15 26"
            width="12px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon
              fill="#747474"
              points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5"
            />
          </svg>
        </div>

        <Image
          width={300}
          height={300}
          alt="logo"
          src={"/images/biglogo.png"}
        />

        <h1 className="sm:text-lg text-base font-bold">
          Please Confirm Your Email
        </h1>
        <p className="text-center">
          We sent an OTP code to {formatEmail(confirmEmail)} right now.
        </p>

        <form onSubmit={handleSubmitOtp}>
          <div className="flex gap-1 py-5">
            {otpCode.map((digit, index) => (
              <input
                key={index}
                ref={(el: HTMLInputElement | null): void => {
                  inputRefs.current[index] = el;
                }}
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                maxLength={1}
                className="border w-9 h-9 rounded-lg text-center focus:outline-none focus:ring-0 focus:border-blue-500"
              />
            ))}
          </div>
          {error && (
            <div className="text-red-500 text-center mx-auto w-full">
              {error}
            </div>
          )}

          <div className="flex justify-center gap-1">
            {error ? (
              <div
                className="text-center cursor-pointer border w-2/3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
                onClick={handleVerify}
              >
                Resend
              </div>
            ) : (
              <button
                type="submit"
                disabled={loading || !otpInputFilled}
                className="border w-2/3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
              >
                {loading ? "Sending..." : "Confirm"}
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="border w-2/3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpModal;
