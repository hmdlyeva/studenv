"use client";

import Navbar from "@/components/layout/navbar/Navbar";
import LeftSection from "@/components/screens/companies/leftSection/LeftSection";
import MiddSection from "@/components/screens/companies/middSection/MiddSection";
import { getCompanyData } from "@/redux/slice/companies/companies";
import { AppDispatch, RootState } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Companies = () => {
  const [theme, setTheme] = useState("white");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const companies = useSelector((state: RootState) => state.companies.companies);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyData());
  }, []);
  const [clickedCompany, setClickedCompany] = useState("")
  return (
    <>
      <Navbar url="/companies" />
      <div
        className={`events ${
          theme === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container w-full flex flex-col md:flex-row justify-between">
        <LeftSection theme={theme} companies={companies} setClickedCompany={setClickedCompany}/>
          <MiddSection theme={theme} clickedCompany={clickedCompany}/>
        </div>
      </div>
    </>
  );
};

export default Companies;
