"use client";
import SaveIcon from "@/components/ui/SaveIcon";
import { ICompany } from "@/types/common.type";
import React, {  useState } from "react";

const postData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
type Props = {
  theme: string;
  clickedCompany: ICompany | null;
};

const links = ["Şirkət haqqında", "Son iş elanları"];
const MiddSection = ({ theme, clickedCompany }: Props) => {


  const [clickledBtn, setclickledBtn] = useState(0);

  return (
    <div className="middle md:w-4/5 h-full w-[95%] mx-auto">
      <div className="h-full flex flex-col">
        <div className="bg-slate-200 w-full h-64 relative">
          <div className="bg-slate-300 w-32 h-32 rounded-lg absolute -bottom-4 left-8"></div>
        </div>

        <div className="detail p-8">
          <h1
            className={`text-xl font-medium ${
              theme === "white" ? "text-black" : "text-white"
            }`}
          >
            {clickedCompany?.name}
          </h1>
          <p className="text-sm text-gray-400 underline cursor-pointer">
            {clickedCompany?.industry}
          </p>
        </div>

        <div
          className={`btns flex gap-10 p-8 pt-0 ${
            theme === "white" ? "text-black" : "text-white"
          }`}
        >
          {links.map((link, i) => (
            <div key={i}>
              <p
                className={`cursor-pointer hover:text-blue-600 duration-500 h-1 ${
                  clickledBtn === i && "text-blue-600"
                }`}
                onClick={() => setclickledBtn(i)}
              >
                {link}
              </p>
              <div
                className={`w-auto h-[2px] ${
                  clickledBtn === i && "bg-blue-700 mt-6 duration-300"
                }`}
              ></div>
            </div>
          ))}
        </div>

        <div className="content h-[49vh] overflow-y-auto scrollbar-none">
          {clickledBtn === 0 ? (
            <div className="flex px-8 flex-col gap-4">
              <h3
                className={`font-semibold ${
                  theme === "white" ? "text-black" : "text-white"
                }`}
              >
                Şirkət haqqında
              </h3>
              <p className="text-sm text-gray-500">{clickedCompany?.description}</p>

              <div className="detail flex gap-8">
                <div className="left w-1/2">
                  <div className="map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d97210.33214846!2d49.9122176!3d40.412774399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2saz!4v1727381497381!5m2!1sen!2saz"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="right flex flex-col gap-3 w-1/2">
                  <h3>Ünvan</h3>
                  <p className="text-sm text-gray-400">
                    AZ1005, Bakı ş., Səbail r-nu, Yusif Məmmədəliyev küç. 13
                  </p>
                  <h3>Əlaqə nömrəsi</h3>
                  <p className="text-sm text-gray-400">
                    *8123 / (+994 12) 496 50 04 , (+994 12) 496 51 00
                  </p>
                  <h3>Vebsayt</h3>
                  <p className="text-sm text-gray-400">
                    www.pashabank.az/lang ,az/
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              {postData?.map((p, i) => (
                <div
                  key={i}
                  className={`p-4 ps-6 border border-l-0 border-r-0 flex flex-col items-center justify-between md:flex-row cursor-pointer ${
                    theme === "white"
                      ? "hover:bg-slate-100 border-slate-100"
                      : "hover:bg-zinc-800 border-zinc-800"
                  }`}
                >
                  <div className="left">
                    <h3
                      className={`text-sm font-bold ${
                        theme === "white" ? "text-black" : "text-white"
                      }`}
                    >
                      Müştəri Meneceri (Korporativ & Insitutsional Bankçılıq)
                    </h3>
                    <p className="text-sm text-gray-400 pt-2">PASHA Bank</p>
                  </div>
                  <div className="right">
                    <ul className="flex items-center text-sm text-gray-400 gap-4">
                      <li>
                        {/* <svg
                          width="16"
                          height="9"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon sprite-icons"
                        >
                          <use href="/_nuxt/251380778e318449ea4ad951e8a03ee9.svg#i-view-count" />
                        </svg> */}
                        <p>576</p>
                      </li>
                      <li>
                        <p>30 Okt</p>
                      </li>
                      <li>
                        <SaveIcon color="#A2A2A2" width="20" />
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiddSection;
