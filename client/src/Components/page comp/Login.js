import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./LoginSIgnup.css"
const Login = () => {
  const navigate=useNavigate()
  const [datainput,setdatainput]=useState({
    Email:"",
    Password:""
  })
  const handledatainput=(e)=>{
e.preventDefault()
axios.post("http://localhost:3001/login",datainput).then((incomingdata)=>{

  console.log(incomingdata.data)
  localStorage.setItem("AuthSpotify",incomingdata.data.authtoken)
  localStorage.setItem("Namespotify",incomingdata.data.username)
  localStorage.setItem("Emailspotify",incomingdata.data.useremail)
  navigate("/home")
}).catch((err)=>{
  console.log(err)
  alert("some error occured please try again")
})
console.log(datainput)
  }
  return (
    <div id='Loginpage'>
      <div id='LoginBox'>
      <Link to="/home"> <h1 id='iconsignuplogin'>Spotify</h1></Link> 
<form className='formLogin'>
  <label>Email</label>
  <input  type="email" onChange={(e)=>{setdatainput({...datainput,Email:e.target.value})}}/>
  <label>Password</label>
  <input onChange={(e)=>{setdatainput({...datainput,Password:e.target.value})}} type="password"/>
  <button onClick={(e)=>{handledatainput(e)}} id="submitLogin">Submit</button>
</form>
<p >
    Don't have an account  <Link to="/signup">
    click here
</Link>
  </p>
      </div>
    </div>
  )
}

export default Login