import React from 'react'
import logo from '../images/2022_01_24_10_44_IMG_8204 5.png'
import disc from '../images/Group 37.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
     <nav className='nav-bar'>
        <Link to ='/'className='log'>
            <img src={logo} alt="" />
        </Link>
        <Link to ='/Mint' className="join">
            <h1>Join Discord</h1>
            <div className="disco">
                <img src={disc} alt="" />
            </div>
        </Link>
        </nav> 
    </>
  )
}

export default NavBar
