import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
    const token=localStorage.getItem("AuthSpotify")
    const name=localStorage.getItem("Namespotify")
    const email=localStorage.getItem("Emailspotify")

    // localStorage.setItem("Authorization","")
// console.log(name)
const handleLogout=()=>{
    localStorage.setItem("AuthSpotify","")
    localStorage.setItem("Emailspotify","")
    localStorage.setItem("Namespotify","")
window.location.reload(false)
}
  return (
    <div id='Header'>
        <div className='spotify-logo'>
            Spotify
        </div>
        {
            token==="" &&
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
            <div >
               <div> {name}</div>
               <div>  {email}</div>
                </div>
                <div className='logoutfn'>
<button onClick={()=>{handleLogout()}}>Logout</button>
                </div>
                </div>
               
        }
         
    </div>
  )
}

export default Header