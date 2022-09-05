import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./LoginSIgnup.css"
const Signup = () => {
  const [inputData,setInputData]=useState({
    Name:"",
    Email:"",
    Password:""
  })
  const handleInputdata=(e)=>{
e.preventDefault()
axios.post("http://localhost:3001/signup",inputData).then((data)=>{
  console.log(data)
}).catch((err)=>{
  console.log(err)
})
console.log(inputData)
  }
  return (
    <div id='Signuppage'>
      <div id='signupBox'>
      <Link to="/home"><h1 id='iconsignuplogin'>Spotify</h1></Link> 
        <form className='formSignup'> 
          <label>Name</label>
          <input type="text" onChange={(e)=>{setInputData({...inputData,Name:e.target.value})}}></input>
          <label >Email</label>
          <input type="email" onChange={(e)=>{setInputData({...inputData,Email:e.target.value})}}></input>
          <label> Password</label>
          <input type="password" onChange={(e)=>{setInputData({...inputData,Password:e.target.value})}}></input>

          <button onClick={(e)=>{handleInputdata(e)}} id="submitSignup">Submit</button>
        </form>

  <p >
    Already have an account  <Link to="/login">
    click here
</Link>
  </p>
 

      </div>

    </div>
  )
}

export default Signup