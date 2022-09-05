import React, { useState } from 'react'
import "./AddArtists.css"
import axios from "axios"

 const AddArtists = (props) => {

  const [data,setData]=useState({
Artist:"",
DOB:"",
Bio:""
  })
  const handleData=(e)=>{
e.preventDefault()
//console.log(data)
axios({
  method:"POST",
  url:"https://spotify-server-ashin.herokuapp.com/addartists",
  data:data,
}).then((incdata)=>{
  // console.log("working Fine")
  // console.log(data)
  props.close.addNewArtist(data)
  props.close.closeArtists()

})
.catch((err)=>{
alert("some error occured")
})
  }
 
  return (
    <div id='AddArtistscomp'>
      <div id='artistBox'>
       
        <header id='headerAddartists'>
          <h1>Add Artists</h1>
        <button onClick={()=>{props.close.closeArtists()}} id="closeButton">
          x
        </button>
        </header>
        <div id='Artistsform'>
        <form>
<div className='ArtistFormdata'>
  <label>Artists</label>
  <input type="text" onChange={(e)=>{setData({...data,Artist:e.target.value.toLowerCase()})}}></input>
</div>
<div className='ArtistFormdata'>
  <label>Date Of Birth</label>
  <input type="date" onChange={(e)=>{setData({...data,DOB:e.target.value})}}></input>
</div>
<div className='ArtistFormdata'>
  <label>Bio</label>
  <textarea type="text" className='BioArtists' onChange={(e)=>{setData({...data,Bio:e.target.value})}}></textarea>
</div>
<button onClick={(e)=>handleData(e)} style={{position:"absolute",top:"400px",left:"150px"}}>Ok</button>
        </form>
        </div>
      </div>

    </div>
  )
}

export default AddArtists