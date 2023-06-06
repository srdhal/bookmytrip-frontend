import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './home.css'
import Featured from '../../components/featured/Featured'
import Property from '../../components/property/Property'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailingList from '../../components/mailingList/MailingList'

export default function Home() {
  return (
    <div>
     <div className='home'>
        <Navbar/>
        <Header/>
        <div className='home-content'>
          <h2 className='home-title'>Browse different properties</h2>
          <Property/>
          <Featured/>
          <h2 className='home-title'>Home guests love</h2>
          <FeaturedProperties/>
          <MailingList/>
        </div>

     </div>
    </div>
  )
}
