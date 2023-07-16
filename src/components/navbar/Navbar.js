import React from 'react'
import './navbar.css'
import { useAuthContext } from '../../contexts/AuthProvider'
import { redirect, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const {user,dispatch}=useAuthContext()

  const handleClick=()=>{
      dispatch({type:"LOGOUT"})
  }
  const navigate=useNavigate();
  const handleChange=()=>{
    navigate("/login")
  }

  return (
      <div className='navbar'>
        <div className='navbar-container'>
            <span className='logo' ><a href='/' style={{color:'inherit',textDecoration:'none'}}>Expeditionary</a></span>
            <div className='navitems'>
              {!user ? <>
                <button className='btn'>register</button>
                <button className='btn' onClick={handleChange}>login</button>
              </>: 
              <>
                  <div className="navdropdown">
                    <button className="navdropbtn">{user.username}</button>
                    <div className="navdropdown-content">
                      <a href="/profile">profile</a>
                      <a href="/" onClick={handleClick}>Logout</a>
                    </div>
                  </div>
                  {/* <div >good</div> */}
              </>}
            </div>
        </div>
      </div>
  )
}
