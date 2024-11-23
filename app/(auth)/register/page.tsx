"use client";
import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  registerCompany,
  registerGuest,
  registerStudent,
  verifyOtp,
  verifyOtpResend,
} from "@/api/auth";
import CustomSelect from "@/components/common/customSelect";
import Link from "next/link";

const specialities: string[] = [
  "Aviasiya istehsalatının təşkili mühəndisliyi",
  "Aviasiya texnikasının texniki istismarı mühəndisliyi",
  "Aviasiya vasitələri və texnologiyası mühəndisliyi",
  "Biotibbi texnologiya mühəndisliyi",
  "Çihazqayırma mühəndisliyi",
  "Çıxarış qazıyıcı mühəndisliyi",
  "Dağ-mədən mühəndisliyi",
  "Dəniz naviqasiyası mühəndisliyi",
  "Ekologiya mühəndisliyi",
  "Elektrik energetikası mühəndisliyi",
  "Elektrik mühəndisliyi",
  "Elektronika mühəndisliyi",
  "Elektronika, telekommunikasiya və radiotexnika mühəndisliyi",
  "Enerji maşınqayırması mühəndisliyi",
  "Fövqəladə hallar və həyat fəaliyyətinin təhlükəsizliyi mühəndisliyi",
  "Fizika müəllimliyi",
  "Gəmi energetik qurğularının istismarı mühəndisliyi",
  "Gəmiqayırma və gəmi təmiri mühəndisliyi",
  "Geodeziya və xəritəçilik mühəndisliyi",
  "Geofizika mühəndisliyi",
  "Geologiya",
  "Geologiya mühəndisliyi",
  "Hidrogeologiya mühəndisliyi",
  "Hidrotexniki mühəndislik",
  "Hidrotexniki infrastruktur",
  "Hava nəqliyyatı texnologiyaları mühəndisliyi",
  "İnformasiya texnologiyaları",
  "İnformasiya təhlükəsizliyi",
  "İstilik energetikası mühəndisliyi",
  "İnşaat mühəndisliyi",
  "Kimya mühəndisliyi",
  "Kompüter elmləri",
  "Kompüter mühəndisliyi",
  "Kompozisiya materiallarının layihələndirilməsi və istehsalı",
  "Kosmik texnika mühəndisliyi",
  "Logistika və nəqliyyat texnologiyaları mühəndisliyi",
  "Materialşünaslıq mühəndisliyi",
  "Maşın mühəndisliyi",
  "Məktəbəqədər təhsil",
  "Memarlıq",
  "Meliorasiya və su təsərrüfatı tikintisi mühəndisliyi",
  "Mexanika mühəndisliyi",
  "Mexatronika və robototexnika mühəndisliyi",
  "Metrolojiya, standartlaşdırma və sertifikasiya mühəndisliyi",
  "Metallurgiya mühəndisliyi",
  "Riyaziyyat müəllimi",
  "İnformatika müəllimi",
  "Fizika müəllimi",
  "Texnologiya müəllimi",
  "Mühəndis sistemlərinin və qurğularının istismarı mühəndisliyi",
  "Neft-qaz mühəndisliyi",
  "Neft-qaz qurğuları mühəndisliyi",
  "Nəqliyyat mühəndisliyi",
  "Nəqliyyatda daşımaların və idarəetmənin təşkili mühəndisliyi",
  "Optoelektronika",
  "Poliqrafiya mühəndisliyi",
  "Proseslərin avtomatlaşdırılması mühəndisliyi",
  "Qida məhsulları mühəndisliyi",
  "Qida məhsulları texnologiyası mühəndisliyi",
  "Sertifikatlaşma, standartlaşdırma və metrologiya mühəndisliyi",
  "Sənaye və mülki tikinti mühəndisliyi",
  "Sənaye mühəndisliyi",
  "Səhiyyə müəssisələrinin iqtisadiyyatı",
  "Sistem mühəndisliyi",
  "Şəhərsalma",
  "Təkrar emal və bərpa texnologiyaları mühəndisliyi",
  "Texnoloji maşın və avadanlıqlar mühəndisliyi",
  "Tikinti materialları və məmulatlarının texnologiyası mühəndisliyi",
  "Uçuş mühəndisliyi",
  "Yer quruluşu, torpaq və şəhər kadastr",
  "Yerüstü nəqliyyat vasitələrinin mühəndisliyi",
  "Yüksək napyaj tikinti mühəndisliyi",
  "Şərabçılıq",
  "Meşəçilik",
  "Radiotexnika və telekommunikasiya mühəndisliyi",
  "Mühəndis Fizikası",
  "Əkinçilik mühəndisliyi",
  "Elektrik və Elektronika mühəndisliyi",
  "Enerji mühəndisliyi",
  "Əməyin Mühafizəsi mühəndisliyi",
  "İnformasiya Texnologiyaları mühəndisliyi",
  "Kompüter mühəndisliyi",
  "Maşınqayırma mühəndisliyi",
  "Meliorasiya və Hidrotexniki mühəndislik",
  "Proseslərin Avtomatlaşdırılması mühəndisliyi",
  "Qida mühəndisliyi",
  "Aqronomiya",
  "Peşə təhsili",
  "Heyvandarlıq",
  "Üzümçülük və Enologiya",
  "Torpaqşünaslıq və Aqrokimya",
  "Beynəlxalq Ticarət və Logistika",
  "Biznesin İdarəedilməsi",
  "Marketinq",
  "Menecment",
  "Maliyyə",
  "Mühasibat",
  "Marketinq (ingilis dilində)",
  "Statistika",
  "Sosiologiya",
  "Avtomobil mühəndisliyi",
  "Mexanika mühəndisliyi",
  "Dayanıqlı İnkişafın İdarəedilməsi",
  "Dövlət və bələdiyyə idarə olunması",
  "Nəqliyyatda servis",
  "Logistika",
  "Hidrometeorologiya",
  "Coğrafiya müəllimliyi",
  "Tarix və Coğrafiya müəllimliyi",
  "Tarix müəllimliyi",
  "Turizm işinin təşkili",
  "Turizm bələdçiliyi",
  "Dövlət və Bələdiyyə İdarəetməsi",
  "İqtisadiyyat",
  "İdman menecmenti və kommunikasiyası",
  "Azərbaycan dili və ədəbiyyatı müəllimliyi",
  "Koreya dili müəllimliyi",
  "Tarix müəllimliyi",
  "Təhsildə sosial və psixoloji xidmət",
  "Sosial iş",
  "Fəlsəfə və dini elmlər",
  "Politologiya",
  "Sosiologiya",
  "Psixologiya",
  "Kitabxanaçılıq və informasiya elmi",
  "Tərcümə (Ərəb dili)",
  "Tərcümə (Çin dili)",
  "Tərcümə (Fransız dili)",
  "Tərcümə (Alman dili)",
  "Tərcümə (İngilis dili)",
  "Azərbaycan filologiyası",
  "Filologiya (Rus dili)",
  "Filologiya (Alman dili)",
  "Filologiya (Fransız dili)",
  "Filologiya (Ərəb dili)",
  "Filologiya (Fars dili)",
  "Filologiya (İngilis dili)",
  "Filologiya (İtalyan dili)",
  "Jurnalistika",
  "İlahiyyat",
  "İbtidai sinif müəllimliyi",
  "İngilis dili müəllimliyi",
  "Fransız dili müəllimliyi",
  "Alman dili müəllimliyi",
  "Tərcümə (İspan dili)",
  "Tərcümə (Koreya dili)",
  "Beynəlxalq münasibətlər",
  "Regionşünaslıq (ABŞ)",
  "Regionşünaslıq (Yaxın Şərq)",
  "Məktəbəqədər təhsil",
  "Xarici dil müəllimliyi",
  "Xarici dil müəllimliyi (fransız dili üzrə)",
  "Sosial iş",
  "Azərbaycan dili və ədəbiyyatı müəllimliyi",
  "İbtidai sinif müəllimliyi",
  "Məktəbəqədər təhsil",
  "Təhsildə sosial-psixoloji xidmət",
  "Xarici dil müəllimliyi (ingilis dili üzrə)",
  "Beynəlxalq münasibətlər",
  "Filologiya (ingilis dili və ədəbiyyatı)",
  "Filologiya (fransız dili və ədəbiyyatı)",
  "Filologiya (alman dili və ədəbiyyatı)",
  "Regionşünaslıq (Azərbaycan üzrə)",
  "Regionşünaslıq (Böyük Britaniya üzrə)",
  "Regionşünaslıq (Almaniya üzrə)",
  "Regionşünaslıq (Fransa üzrə)",
  "Regionşünaslıq (Norveç üzrə)",
  "Regionşünaslıq (Şərqi Asiya üzrə)",
  "Regionşünaslıq",
];

const Register = () => {
  const [checked, setChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
  const [otpInputFilled, setOtpInputFilled] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [confirmEmail, setConfirmEmail] = useState<string>("");
  const [role, setRole] = useState("");
  const [selectedSpeciality, setSelectedSpeciality] = useState("");
  const [errorRegister, setErrorRegister] = useState("");
  const [notVerifyed, setNotVerifyed] = useState(false);

  const roles = ["Student", "Company", "Guest"];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      speciality: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      speciality:
        role === "Student"
          ? Yup.string().required("Speciality is required")
          : Yup.string(),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      if (checked) {
        setErrorRegister("");
        try {
          const data = {
            ...values,
            role: role ? role : "",
          };
          const studentData = {
            ...values,
            role: "Student",
            speciality: selectedSpeciality ? selectedSpeciality : "",
          };

          let response;
          switch (role) {
            case "Student":
              response = await registerStudent(studentData);
              break;
            case "Company":
              response = await registerCompany(data);
              break;
            case "Guest":
              response = await registerGuest(data);
              break;
            default:
              throw new Error("Invalid role");
          }

          if (response?.status === 200) {
            if (typeof window !== "undefined") {
              localStorage.setItem("confirmEmail", values.email);
            }
            setConfirmEmail(values.email);
            setIsModalOpen(true);
          }

          // bunu sonradan response.status === 403 et
          else if (
            response &&
            response.response.data.detail ===
              "Email already registered but not verified. Check your email."
          ) {
            setErrorRegister(response.response.data.detail);
            setConfirmEmail(values.email);
            setNotVerifyed(true);
          } else if (response && response?.status !== 200) {
            setErrorRegister(response.response.data.detail);
          } else {
            setErrorRegister("Something went wrong. Please try later");
          }
        } catch (error) {
          console.error("Register failed", error);
        }
      } else {
        setErrorRegister(
          "Please Confirm our Terms & Privacy Policy conditions"
        );
      }
    },
  });

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

    if (result?.status === 200) {
      router.push("/login");
    } else if (result.status !== 200) {
      setError(result.response.data.detail);
    } else {
      console.log("Error");
    }
  };

  useEffect(() => {
    const body = document.body;
    if (body.hasAttribute("cz-shortcut-listen")) {
      body.removeAttribute("cz-shortcut-listen");
    }
  }, []);

  const handleVerify = async () => {
    setErrorRegister("")
    setError(null)
    setOtpCode(["", "", "", "", "", ""])
    const response = await verifyOtpResend(confirmEmail);
    if (response?.status === 200) {
      setIsModalOpen(true);
    }
    else{
      setErrorRegister("Something went wrong. Please try later")
      setNotVerifyed(true)
    }
  }

  return (
    <div
      className={` ${
        role ? "bg-[#f9f9f9]" : "bg-white"
      } "register h-full min-h-screen flex items-center justify-center" `}
    >
      {role ? (
        <div
          className={`md:w-2/3 mx-auto w-screen flex justify-center items-center ${
            role === "Student" ? "md:h-[82%] lg:h-[80%]" : "md:h-[82%] lg:h-3/4"
          }  h-screen`}
        >
          <div className="bg-white sm:rounded-3xl rounded-none w-full h-auto sm:p-5 p-10 m-auto flex gap-8">
            <div className="left h-full lg:w-1/2 w-full pt-20 relative">
              <p className="font-bold text-8xl -rotate-45 w-1 h-14 flex absolute xl:left-6 sm:left-2 -left-4 sm:top-1 -top-2 px-3">
                &quot;
              </p>
              <h1 className="text-3xl font-medium pt-0 absolute xl:right-4 sm:right-2 right-0 top-2 px-3 text-end">
                Get Started Now
              </h1>
              <p className="font-medium py-1 absolute xl:right-4 sm:right-2 right-0 top-[42px] text-end px-3">
                Enter your credentials to create your account
              </p>

              <div
                className={`flex justify-center gap-4 py-5 px-3 text-sm ${
                  role === "Student"
                    ? "flex-row md:flex-row xl:flex-row"
                    : "flex-col md:flex-row lg:flex-row xl:flex-row"
                }`}
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
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className="cursor-pointer border p-2 pl-3 rounded-xl w-full focus:outline-none focus:ring-0 focus:border-blue-500"
                    placeholder="Full name"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div className="text-red-500">{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="flex flex-col gap-1 sm:px-3">
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
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                  ) : null}
                </div>

                {role === "Student" && (
                  <div className="flex flex-col gap-1">
                    <CustomSelect
                      label="Speciality"
                      options={specialities}
                      value={selectedSpeciality}
                      onChange={(value) => {
                        setSelectedSpeciality(value);
                        formik.setFieldValue("speciality", value);
                      }}
                    />
                  </div>
                )}

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

                <div className="flex gap-2 font-medium sm:px-3">
                  <input
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                    type="checkbox"
                    id="agree"
                    name="agree"
                    className="cursor-pointer"
                  />
                  <p>
                    <>
                      {`I agree to the `}
                      <Link
                        href="/terms-and-conditions"
                        className="underline text-blue-400 cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Terms & Privacy
                      </Link>
                    </>
                  </p>
                </div>

                <div className="w-full flex flex-col gap-3 bg-white">
                  <div className="text-red-500">
                    {errorRegister && errorRegister}
                  </div>
                  {notVerifyed ? (
                    <div
                      className={`p-2 cursor-pointer mt-3 rounded-xl w-full bg-blue-600 hover:bg-blue-800 text-white text-center`}
                    onClick={handleVerify}
                    >
                      Verify Now
                    </div>
                  ) : (
                    <button
                      className={`p-2 mt-3 rounded-xl w-full ${
                        formik.isValid && !loading
                          ? "bg-blue-600 hover:bg-blue-800 text-white"
                          : "bg-gray-400 text-gray-200 cursor-not-allowed"
                      }`}
                      type="submit"
                      disabled={!formik.isValid || loading}
                    >
                      Register
                    </button>
                  )}

                  <div className="flex gap-1 mt-[-10px]">
                    <span>Already have an account ?</span>
                    <span
                      className="text-blue-600 cursor-pointer hover:text-blue-800"
                      onClick={() => router.push("/login")}
                    >
                      Sign in
                    </span>
                  </div>
                  <div></div>
                </div>
              </form>
            </div>
            <div className="bg-blue-600 lg:block hidden h-auto w-1/2 rounded-2xl text-white text-6xl text-center"></div>
          </div>
        </div>
      ) : (
        <div className="sm:w-2/3 mx-auto w-screen flex flex-col justify-center items-center md:h-3/4 h-screen">
          <Image
            width={300}
            height={300}
            alt="logo"
            className="-mb-10"
            src={"/images/biglogo.png"}
          />
          <div className="flex items-center mb-4 gap-1">
            <span className="text-lg">Register</span>
            <span>as a..</span>
          </div>
          <div className="sm:w-auto w-2/3 mx-auto flex gap-3 sm:flex-row flex-col">
            {roles.map((rol, i) => (
              <button
                key={i}
                className="py-2 px-10 mx-auto w-full sm:w-auto rounded-2xl border hover:bg-[#f9f9f9] hover:text-blue-500"
                onClick={() => setRole(rol)}
              >
                {rol}
              </button>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
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
              Please confirm your Email!
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
              {error && <span className="text-red-500">{error}</span>}

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
      )}
    </div>
  );
};

export default Register;
