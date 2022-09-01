import React from 'react'
import "./AddArtists.css"
imp
const AddArtists = (props) => {
 
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
  <input type="text"></input>
</div>
<div className='ArtistFormdata'>
  <label>Date Of Birth</label>
  <input type="date"></input>
</div>
<div className='ArtistFormdata'>
  <label>Bio</label>
  <textarea type="text" className='BioArtists'></textarea>
</div>
        </form>
        </div>
      </div>

    </div>
  )
}

export default AddArtists