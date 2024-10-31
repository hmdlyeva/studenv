"use client"
import Navbar from '@/components/layout/navbar/Navbar'
import About from '@/components/screens/profile/about/About'
import Detail from '@/components/screens/profile/detail/Detail'
import Hero from '@/components/screens/profile/hero/Hero'
import Strike from '@/components/screens/profile/strike/Strike'
import React, { useEffect, useState } from 'react'


const Profile = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "white");
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  return (
    <div className={`profile ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}>
        <Navbar url="profile"/>
      <div className="container">
       <Hero theme={theme}/>
       <Detail theme={theme}/>
       <About theme={theme}/>
       <Strike theme={theme}/>
      </div>
    </div>
  )
}

export default Profile