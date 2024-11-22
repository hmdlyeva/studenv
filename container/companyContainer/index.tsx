"use client"
import Navbar from "@/components/layout/navbar/Navbar";
import React, { useEffect, useState } from "react";
import { ICompany, IDiscussion, IEvent, IUser } from "@/types/common.type";
import LeftSection from "@/components/screens/companies/leftSection/LeftSection";
import MiddSection from "@/components/screens/companies/middSection/MiddSection";
import { getCompanyById } from "@/api/common";

interface IProps {
  users: IUser[];
  events: IEvent[];
  discussions: IDiscussion[];
  companies: ICompany[];
}

const CompanyContainer = ({
  users,
  events,
  discussions,
  companies,
}: IProps) => {
    const [clickedCompany, setClickedCompany] = useState<string>("");
    const [companyDetails, setCompanyDetails] = useState<ICompany | null>(null); 
  
    useEffect(() => {
      if (clickedCompany) {
        getCompanyById(clickedCompany)
          .then((data) => setCompanyDetails(data)) 
          .catch((error) => console.error("Error fetching company details:", error));
      }
    }, [clickedCompany]);

  return (
    <main>
      <Navbar url="/" users={users} />
      <div
        className={`events ${
          "white" === "white" ? "bg-whitesecond" : "bg-secondblack"
        }`}
      >
        <div className="container w-full flex flex-col md:flex-row justify-between">
          <LeftSection
            theme={"white"}
            companies={companies}
            setClickedCompany={setClickedCompany}
          />
          <MiddSection theme={"white"} clickedCompany={companyDetails} />
        </div>
      </div>
    </main>
  );
};

export default CompanyContainer;
