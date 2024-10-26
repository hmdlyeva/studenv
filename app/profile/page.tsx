import Navbar from '@/components/layout/navbar/Navbar'
import About from '@/components/screens/profile/about/About'
import Detail from '@/components/screens/profile/detail/Detail'
import Hero from '@/components/screens/profile/hero/Hero'
import Strike from '@/components/screens/profile/strike/Strike'
import React from 'react'


const Profile = () => {
  return (
    <div className="profile bg-[#fff]">
        <Navbar/>
      <div className="container">
       <Hero/>
       <Detail/>
       <About/>
       <Strike/>
      </div>
    </div>
  )
}

export default Profile