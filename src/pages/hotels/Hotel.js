import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import './hotel.css'

export default function Hotel() {
  return (
    <div>
     <div className='hotel'>
        <Navbar/>
        <Header type="checked"/>
     </div>
    </div>
  )
}
