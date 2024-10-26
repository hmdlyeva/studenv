"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "@/api/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
const router = useRouter()
  const texts = ["Student", "Environment", "Discussion", "Platform"];
  useEffect(() => {
    let typingTimeout: NodeJS.Timeout;
    let textChangeTimeout: NodeJS.Timeout;

    const typeText = (text: string) => {
      let index = 0;
      setDisplayedText("");

      const typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text[index - 1]);
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);

      return typingInterval;
    };

    const changeText = () => {
      typingTimeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 3000);

      textChangeTimeout = setTimeout(() => {
        typeText(texts[currentTextIndex]);
      }, 3000);
    };

    changeText();

    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(textChangeTimeout);
    };
  }, [currentTextIndex, texts]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log("Form data:", values);
      try {
        const data = {
          ...values,
        };
        console.log(data)
        const response = await login(data);
        if (response) {
          localStorage.setItem("accessToken", response.access_token);
          localStorage.setItem("confirmEmail", values.email)

          router.push("/")
        }
        console.log("Login successful");
      } catch (error) {
        console.error("Login failed", error);
      }
    },
  });

  return (
    <div className="register bg-[#f9f9f9] h-screen flex items-center justify-center">
      <div className="w-2/3 flex justify-center items-center h-3/4">
        <div className="bg-white rounded-3xl w-full h-full p-5 m-auto flex gap-8">
        <div className="bg-blue-600 h-full w-1/2 rounded-2xl text-white text-6xl text-center flex flex-col items-center">
            <div className="logo flex gap-1 items-center mt-[10%]">
              <Image
                width={200}
                height={200}
                alt="logo"
                src={"/images/logo.png"}
              />
            </div>
            <p className="mt-[10%]">{displayedText}</p>
          </div>
          
          <div className="left h-full w-1/2 p-[3%] relative">
            <p className="font-bold text-8xl rotate-45 w-1 h-14 flex absolute right-16 top-0">&quot;</p>
            <h1 className="text-3xl font-medium pt-2">Get Started Now</h1>
            <p className="font-medium py-1">
              Enter your credentials to access your account
            </p>

            <div className="auth_btns flex justify-center gap-4 py-5">
              <button className="flex justify-center gap-3 items-center border w-3/5 p-2 border-gray-100 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="23"
                  height="23"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>{" "}
                Login with Google
              </button>
              <button className="flex justify-center gap-3 items-center border w-3/5 p-2 border-gray-100 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="52 42 88 66"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#4285f4"
                    d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"
                  />
                  <path
                    fill="#34a853"
                    d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"
                  />
                  <path
                    fill="#fbbc04"
                    d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"
                  />
                  <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
                  <path
                    fill="#c5221f"
                    d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"
                  />
                </svg>{" "}
                Login with Email
              </button>
            </div>

            <div className="font-thin h-[0.3px] bg-gray-100" />

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4 pt-4"
            >

              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="cursor-pointer border p-2 pl-3 rounded-xl w-full focus:outline-none focus:ring-0 focus:border-blue-500"
                  placeholder="Email"
                />
                {/* {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null} */}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="cursor-pointer border p-2 pl-3 rounded-xl w-full focus:outline-none focus:ring-0 focus:border-blue-500"
                  placeholder="Password"
                />
                {/* {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null} */}
              </div>

              <div className="flex gap-2 cursor-pointer font-medium">
                <input
                  checked={checked}
                  onChange={(e) => setChecked(e.target.checked)}
                  type="checkbox"
                  id="agree"
                  name="agree"
                />
                <p>
                  <>
                    {`I agree to the `}
                    <span className="underline text-blue-400 cursor-pointer">
                      Terms & Privacy
                    </span>
                  </>
                </p>
              </div>

              <button
                className="bg-blue-600 hover:bg-blue-800 p-2 mt-3 text-white rounded-xl"
                type="submit"
              >
                Login
              </button>
              <div className="flex gap-1">
                <span>Don&apos;t have an account ?</span>
                <span className="text-blue-600 cursor-pointer hover:text-blue-800" onClick={()=> router.push("/register")}>
                  Sign up
                </span>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
