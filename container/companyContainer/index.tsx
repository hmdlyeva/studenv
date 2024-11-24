"use client"
import Navbar from "@/components/layout/navbar/Navbar";
import React, { useEffect, useState } from "react";
import { ICompany } from "@/types/common.type";
import LeftSection from "@/components/screens/companies/leftSection/LeftSection";
import MiddSection from "@/components/screens/companies/middSection/MiddSection";
import { getCompanyByIdInCompany } from "@/api/common";

interface IProps {
  companies: ICompany[];
}

const CompanyContainer = ({
  companies,
}: IProps) => {
    const [clickedCompany, setClickedCompany] = useState<string>("");
    const [companyDetails, setCompanyDetails] = useState<ICompany | null>(null); 
  
    useEffect(() => {
      let isMounted = true; 
    
      const fetchCompanyDetails = async () => {
        if (clickedCompany) {
          const resp = await getCompanyByIdInCompany(clickedCompany);
          if (resp && isMounted) {
            setCompanyDetails(resp.data);
          }
        }
      };
    
      fetchCompanyDetails();
    
      return () => {
        isMounted = false; // Bileşen unmount edildiğinde istek sonuçlarını işlemeyi durdurur.
      };
    }, [clickedCompany]);

  return (
    <main>
      <Navbar url="/" />
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
