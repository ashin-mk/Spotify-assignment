import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    const token=localStorage.getItem("Authorization")
    localStorage.setItem("Authorization","")
  return (
    <div id='Header'>
        <div className='spotify-logo'>
            Spotify
        </div>
        {
            !token.length &&
            <div className='logsign-box'>
        <Link to="/signup">
            <button >
                Signup
            </button>
        </Link>
        <Link to="/login">
<button>
    Login
    </button>  
     </Link>
        </div>
        }
        {
            token &&
            <div  className='Userdetails'>
                Name
                </div>
               
        }
         {console.log(token)}
    </div>
  )
}

export default Header