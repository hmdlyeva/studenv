"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { forgotPassword, login, verifyOtpResend } from "@/api/auth";
import { useRouter } from "next/navigation";
import {
  getProfileByIdInProfile,
  postCompanies,
  postProfile,
} from "@/api/common";
import OtpModal from "@/components/screens/login/otpModal";
import ResetModal from "@/components/screens/login/resetPassword";
import ProfileModal from "@/components/screens/login/profileModal";
import DateOfBirthModal from "@/components/screens/login/dateOfBirthModal";
import UniversityDetailModal from "@/components/screens/login/universityDetailModal";
import CreatingModal from "@/components/screens/login/creatingModal";

const Login = () => {
  const [errorLogin, setErrorLogin] = useState("");
  const [notVerifyed, setNotVerifyed] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [dateOfBirthModal, setDateOfBirthModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [universityDetailModal, setUniversityDetailModal] = useState(false);
  const [university, setUniversity] = useState("");
  const [yearOfStudy, setYearOfStudy] = useState("");
  const [studyLang, setStudyLang] = useState("");

  const [createModal, setCreateModal] = useState(false);
  const [newPostImage, setPostImage] = useState("");
  const [resetModal, setResetModal] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("")
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const data = {
          ...values,
          grant_type: "password",
          scope: "scope",
          client_id: "string",
          client_secret: "string",
        };
        const response = await login(data);
        if (response?.status === 200) {
          if (typeof window !== "undefined") {
            localStorage.setItem("accessToken", response.data.access_token);
            localStorage.setItem("userId", response.data.user_id);
            localStorage.setItem("userRole", response.data.role);
          }

          if (response.data.role === "Student") {
            const isProfiled = await getProfileByIdInProfile(
              response.data.user_id
            );
            if (isProfiled) {
              router.push("/");
            } else {
              setProfileModal(true);
              setUserId(response.data.user_id)
              if (createModal) {
               const resp =  await postProfile({
                  sex: "",
                  study_language: studyLang || "",
                  job_status: "",
                  university: university || "",
                  year_of_study: yearOfStudy || "",
                  date_of_birth: dateOfBirth || "",
                  bio: "",
                  score: 0,
                  phone_number: "",
                  profile_photo: newPostImage || "",
                  cv_url: "",
                  address: "",
                  social_links: "",
                  user_id: response.data.user_id,
                });
                if (resp.status === 200) {
                  setCreateModal(false);
                  router.push("/");
                }
              }
            }
          } else if (response.data.role === "Company") {
            await postCompanies({
              name: "",
              img_url: "",
              industry: "",
              description: "",
              address: "",
              website: "",
              contact: "",
              user_id: response.data.user_id,
            });
            router.push("/");
          } else {
            router.push("/");
          }
        } else if (response.status === 403) {
          setErrorLogin(response.response.data.detail);
          setConfirmEmail(values.username);
          setNotVerifyed(true);
        } else if (response.status !== 200) {
          setErrorLogin(response.response.data.detail);
          setConfirmEmail(values.username);
        }
      } catch (error) {
        console.error("Login failed", error);
      }
    },
  });

  const handleVerify = async () => {
    setErrorLogin("");
    setError(null);
    const response = await verifyOtpResend(confirmEmail);
    if (response?.status === 200) {
      setIsModalOpen(true);
    } else {
      setErrorLogin("Something went wrong. Please try later");
      setNotVerifyed(true);
    }
  };

  const handleResendPassword = async () => {
    console.log(confirmEmail);
    const resp = await forgotPassword(confirmEmail);
    console.log(resp);
    setToken("");
    if (resp.status === 200) {
      setIsModalOpen(true);
      setToken(resp.data.access_token);
      // setResetModal(true);
    } else {
      console.log(resp);
    }
  };

  return (
    <div className="register bg-[#f9f9f9] h-full min-h-screen flex items-center justify-center">
      <div className="sm:w-2/3 mx-auto w-screen flex justify-center items-center sm:h-3/4 h-screen">
        <div className="bg-white sm:rounded-3xl rounded-none w-full h-auto sm:p-5 p-10 m-auto flex gap-8">
          <div className="bg-blue-600 lg:block hidden h-auto w-1/2 rounded-2xl text-white text-6xl text-center "></div>

          <div className="left h-full lg:w-1/2 w-full relative">
            <p className="font-bold text-8xl rotate-45 w-1 h-14 flex absolute xl:right-14 sm:right-8 right-2 -top-1 px-3">
              &quot;
            </p>
            <h1 className="text-3xl font-medium pt-2 px-3">Get Started Now</h1>
            <p className="font-medium py-1 px-3">
              Enter your credentials to access your account
            </p>

            <div
              className={`flex justify-center gap-4 py-5 px-3 text-sm 
                  flex-col md:flex-row lg:flex-row xl:flex-row
               `}
            >
              <button className="flex justify-center gap-3 items-center border xl:w-3/5 w-full p-2 border-gray-100 rounded-2xl">
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
                </svg>
                <p className="xl:hidden lg:block md:hidden sm:hidden block">
                  Google
                </p>
                <p className="xl:block lg:hidden md:block sm:block hidden">
                  Login with Google
                </p>
              </button>
              <button className="flex justify-center gap-3 items-center border xl:w-3/5 w-full p-2 border-gray-100 rounded-2xl">
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
                </svg>
                <p className="xl:hidden lg:block md:hidden sm:hidden block">
                  Email
                </p>
                <p className="xl:block lg:hidden md:block sm:block hidden">
                  Login with Email
                </p>
              </button>
            </div>

            <div className="font-thin h-[0.3px] bg-gray-100" />

            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-4 pt-4 h-auto overflow-y-auto"
              style={{
                overflowY: "auto",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              <div className="flex flex-col gap-1 sm:px-3">
                <label htmlFor="username">Email</label>
                <input
                  id="username"
                  name="username"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  className="cursor-pointer border p-2 pl-3 rounded-xl w-full focus:outline-none focus:ring-0 focus:border-blue-500"
                  placeholder="Email"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500">{formik.errors.username}</div>
                ) : null}
              </div>

              <div className="flex flex-col gap-1 sm:px-3">
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
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500">{formik.errors.password}</div>
                ) : null}
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="flex gap-1">
                  <span>Forgot Your Password ?</span>
                  <span
                    className="text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={handleResendPassword}
                  >
                    Reset
                  </span>
                </div>

                <div className="text-red-500">{errorLogin && errorLogin}</div>
                {notVerifyed ? (
                  <div
                    className="cursor-pointer text-center bg-blue-600 hover:bg-blue-800 p-2 mt-3 text-white rounded-xl w-full"
                    onClick={handleVerify}
                  >
                    Verify Now
                  </div>
                ) : (
                  <button
                    className="bg-blue-600 hover:bg-blue-800 p-2 mt-3 text-white rounded-xl w-full"
                    type="submit"
                  >
                    Login
                  </button>
                )}
                <div className="flex gap-1">
                  <span>Don&apos;t have an account ?</span>
                  <span
                    className="text-blue-600 cursor-pointer hover:text-blue-800"
                    onClick={() => router.push("/register")}
                  >
                    Sign up
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <OtpModal
          token={token}
          setIsModalOpen={setIsModalOpen}
          confirmEmail={confirmEmail}
          setNotVerifyed={setNotVerifyed}
          setErrorLogin={setErrorLogin}
          setResetModal={setResetModal}
        />
      )}

      {resetModal && (
        <ResetModal
          setToken={setToken}
          token={token}
          setResetModal={setResetModal}
          error={error}
        />
      )}

      {profileModal && (
        <ProfileModal
          setDateOfBirthModal={setDateOfBirthModal}
          setProfileModal={setProfileModal}
          setPostImage={setPostImage}
          newPostImage={newPostImage}
        />
      )}

      {dateOfBirthModal && (
        <DateOfBirthModal
          dateOfBirth={dateOfBirth}
          setDateOfBirth={setDateOfBirth}
          setDateOfBirthModal={setDateOfBirthModal}
          setUniversityDetailModal={setUniversityDetailModal}
        />
      )}

      {universityDetailModal && (
        <UniversityDetailModal
          setUniversityDetailModal={setUniversityDetailModal}
          setCreateModal={setCreateModal}
          setUniversity={setUniversity}
          setYearOfStudy={setYearOfStudy}
          setStudyLang={setStudyLang}
          dateOfBirth={dateOfBirth}
          newPostImage={newPostImage}
          userId={userId}
        />
      )}
      {createModal && <CreatingModal />}
    </div>
  );
};

export default Login;
