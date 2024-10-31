"use client"
import Navbar from '@/components/layout/navbar/Navbar'
import FilterSection from '@/components/screens/resouces/filtersection/FilterSection'
import MiddSection from '@/components/screens/resouces/middSection/MiddSection'
import React, { useEffect, useState } from 'react'

type Props = {}

const Resources = (props: Props) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");
    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        setTheme(storedTheme);
      }
    }, []);
  return (
    <>
    <Navbar url="/resources"/>
    <div className={`resouces ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}>
        <FilterSection theme={theme}/>
      <div className="container w-full mt-10">
        <MiddSection theme={theme}/>
      </div>
    </div>
    </>
  )
}

export default Resources