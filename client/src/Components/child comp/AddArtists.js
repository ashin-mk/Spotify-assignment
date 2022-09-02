import React, { useState } from 'react'
import "./AddArtists.css"

const AddArtists = (props) => {

  const [data,setData]=useState({
Artist:"",
DOB:"",
Bio:""
  })
  const handleData=()=>{

  }
 
  return (
    <div id='AddArtistscomp'>
      <div id='artistBox'>
       
        <header id='headerAddartists'>
          <h1>Add Artists</h1>
        <button onClick={()=>{props.state()}} id="closeButton">
          x
        </button>
        </header>
        <div id='Artistsform'>
        <form>
<div className='ArtistFormdata'>
  <label>Artists</label>
  <input type="text" onChange={(e)=>{setData({...data,Artist:e.target.value})}}></input>
</div>
<div className='ArtistFormdata'>
  <label>Date Of Birth</label>
  <input type="date" onChange={(e)=>{setData({...data,DOB:e.target.value})}}></input>
</div>
<div className='ArtistFormdata'>
  <label>Bio</label>
  <textarea type="text" className='BioArtists' onChange={(e)=>{setData({...data,Bio:e.target.value})}}></textarea>
</div>
        </form>
        </div>
      </div>

    </div>
  )
}

export default AddArtists