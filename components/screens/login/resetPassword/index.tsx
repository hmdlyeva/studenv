import React, {  useState } from "react";
import Image from "next/image";
import { resetPassword } from "@/api/auth";
import { useRouter } from "next/navigation";

interface Props {
  setResetModal: (value: boolean) => void;
  error: string | null; 
  setToken: (value: string) => void; 
  token: string; 
}

const ResetModal = ({
  setResetModal,
  error,
  setToken,
  token,
}: Props) => {
  const [newPassword, setNewPassword] = useState("");
  const router = useRouter();
  const handleResendPasswordEmail = async () => {
    const resp = await resetPassword(newPassword, token);
    setNewPassword("");
    setToken("");
    if (resp.status === 200) {
        router.refresh()
    } else {
      console.log(resp);
    }
  };
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

      <div className="flex flex-col items-center bg-white p-10 rounded-2xl z-50 lg:w-1/2 md:w-2/3 sm:w-3/4 w-4/5 relative">
        <div
          onClick={() => setResetModal(false)}
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
          Please Reset Your Password
        </h1>

        <div className="flex gap-1 py-5">
          <div className="flex flex-col gap-1 sm:px-3">
            <input
              id="password"
              name="password"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              value={newPassword}
              className="cursor-pointer border p-2 pl-3 rounded-xl w-full focus:outline-none focus:ring-0 focus:border-blue-500"
              placeholder="New Password"
            />
          </div>
        </div>
        {error && (
          <div className="text-red-500 text-center mx-auto w-full">{error}</div>
        )}

        <div className="flex justify-center gap-1 h-10 w-1/2">
          {error ? (
            <div className="text-center cursor-pointer border w-2/3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300">
              Error Occured
            </div>
          ) : (
            <button
              onClick={handleResendPasswordEmail}
              className="border w-2/3 py-1 rounded-lg bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300"
            >
              {"Reset"}
            </button>
          )}

          <button
            type="button"
            onClick={() => setResetModal(false)}
            className="border w-2/3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetModal;
