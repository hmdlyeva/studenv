"use client"
import Navbar from '@/components/layout/navbar/Navbar'
import About from '@/components/screens/profile/about/About'
import Detail from '@/components/screens/profile/detail/Detail'
import Hero from '@/components/screens/profile/hero/Hero'
import Strike from '@/components/screens/profile/strike/Strike'
import { getUserData, User } from '@/redux/slice/auth/auth'
import { getPrflData,Prfl } from '@/redux/slice/profile/profile'
import { AppDispatch, RootState } from '@/redux/store/store'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Profile = () => {
  const [theme, setTheme] = useState("white");
  const [userData, setUserData] = useState<User | null>(null); 
  const [prflData, setPrflrData] = useState<Prfl | null>(null); 
  const users = useSelector((state: RootState) => state.users.users);
  const profiles = useSelector((state: RootState) => state.profiles.prfls);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getPrflData());
  }, []);

  useEffect(() => {
    const confirmedEmail = localStorage.getItem("confirmEmail");
    if (confirmedEmail) {
      console.log(confirmedEmail);
      const filteredUser = users.find((user) => user.email === confirmedEmail);
      console.log(filteredUser);
      if (filteredUser) {
        setUserData(filteredUser);
        localStorage.setItem("userInfo", JSON.stringify(filteredUser));
        const profile = profiles.find((p)=>p.user_id == filteredUser.user_id)
      if (profile) {
        setPrflrData(profile)
      }
      }
    }
  }, [users]);


  return (
    <div className={`profile ${theme === "white" ? "bg-whitesecond": "bg-secondblack border-gray-600"}`}>
        <Navbar url="profile"/>
      <div className="container">
       <Hero theme={theme} userData={userData} profile={prflData}/>
       <Detail theme={theme} userData={userData} profile={prflData}/>
       <About theme={theme} userData={userData} profile={prflData}/>
       <Strike theme={theme}/>
      </div>
    </div>
  )
}

export default Profile