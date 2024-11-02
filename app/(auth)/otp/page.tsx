"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { verifyOtp } from '@/api/auth';


const Otp = () => {
    const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
    const [otpInputFilled, setOtpInputFilled] = useState(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]); 
    const [confirmEmail, setConfirmEmail] = useState<string>("");

    useEffect(() => {
        if (typeof window !== "undefined") {
            const email = localStorage.getItem("confirmEmail");
            if (email) {
                setConfirmEmail(email); 
            }
          }
    }, []);

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

    const handleKeyDown = (index: number, event: { key: string; }) => {
        if (event.key === "Backspace" && otpCode[index] === "") {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError(null);
        const otpString = otpCode.join("");
        const result = await verifyOtp(confirmEmail, otpString);
        setLoading(false);
    
        if (result) {
            // localStorage.setItem("accessToken", JSON.stringify(result.access_token));
            router.push("/login");
        } else {

            console.log("Error");
        }
    };
    return (
        <div className='bg-[#f9f9f9] h-screen'>
            <div className='container flex justify-center items-center h-screen'>
               <div className='flex flex-col items-center bg-white p-10 rounded-2xl relative w-1/2'>

                <div onClick={()=> router.push("/register")} className='absolute left-10 cursor-pointer'><svg enableBackground="new 0 0 15 26" height="26px" id="Layer_1" version="1.1" viewBox="0 0 15 26" width="15px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><polygon fill="#231F20" points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 "/></svg></div>
                <Image
                    width={300}
                    height={300}
                    alt="logo"
                    src={"/images/logo.png"}
                />
                <h1>Please confirm your Email!</h1>
                <p>
                    We sent an OTP code to {formatEmail(confirmEmail)} right now.
                </p>

                <form onSubmit={handleSubmit}>
                    <div className='flex gap-1 py-5'>
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
                                className='border w-9 h-9 rounded-lg text-center focus:outline-none focus:ring-0 focus:border-blue-500'
                            />
                        ))}
                    </div>
                    {error && <span className="text-red-500">{error}</span>}
                    <div className='flex justify-center gap-1'>

                    <button type="submit" disabled={loading || !otpInputFilled} className='border w-2/3 py-1 rounded-lg'>
                        {loading ? "Sending..." : "Confirm"}
                    </button>
                    <button
                        type="button"
                        onClick={() => router.push("/register")}
                        className='border w-2/3 py-1 rounded-lg'
                    >
                        Cancel
                    </button>
                    </div>
                </form>


               </div>
               
               
            </div>
        </div>
    );
}

export default Otp;
