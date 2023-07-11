import React from 'react'
import './navbar.css'

export default function Navbar() {
  return (
      <div className='navbar'>
        <div className='navbar-container'>
            <span className='logo' ><a href='/' style={{color:'inherit',textDecoration:'none'}}>Expeditionary</a></span>
            <div className='navitems'>
                <button className='btn'>register</button>
                <button className='btn'>login</button>
            </div>
        </div>
      </div>
  )
}
