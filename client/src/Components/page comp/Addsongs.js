import React, { useState } from 'react'
import AddArtists from '../child comp/AddArtists'
import Header from '../child comp/Header'
import Sidebar from '../child comp/Sidebar'
import "./Addsongs.css"
import FileBase64 from 'react-file-base64'

const Addsongs = () => {
  const [artists,setArtists]=useState(false)
  const [addsongs,setAddsongs]=useState({
    Song:"",
    Image:null,
    Released:"",
    Artists:"",
  })
  const handleAddSong=(id,e)=>{
setAddsongs({...addsongs,[id]:e.target.value})
// console.log(addsongs)
  }
  const handleArtists=(e)=>{
    e.preventDefault()
    setArtists(true)
    //console.log("ww")
  }
  const closeArtists=()=>{
    setArtists(false)
  }
  const handleInputs=(e)=>{
    e.preventDefault()
    console.log(addsongs)
  }
  return (
    <div>
      <Header/>
      <Sidebar/>
      
        <h1 className='heading-addsongs'>Add songs</h1>
        <div className='Add-Song'>
          <form>
            <div className='input-addsongs'>
            <label>Song name</label>
            <input type="text" onChange={(e)=>{handleAddSong("Song",e)}}></input>
            </div>
            
            <div className='input-addsongs'>
            <label>Date Released</label>
            <input type="date" onChange={(e)=>{handleAddSong("Released",e)}}></input>
            </div>
           
            <div className='input-addsongs'>
            <label>Art-work</label>
            <div  className='base64'>
            <FileBase64 type="file" multiple={false} onDone={({base64})=>setAddsongs({...addsongs,Image:base64})}>
            </FileBase64>
            </div>
            <div id='imageUpload'>
              <img id='imageuploadicon' src='upload.png' alt='Ui icons created by mim_studio - Flaticon'/>
              <p>Upload image</p>
            </div>
       
            
            </div>
            
            <div className='input-addsongs'>
            <label>Artists</label>
            <input type="text" onChange={(e)=>{handleAddSong("Artists",e)}}></input>
            </div>
            
            <button id='AddartistsButt' onClick={(e)=>{handleArtists(e)}}>+   Add Artists</button>
            <div className='SubmitCancelButt'>
            <button onClick={()=>{}}>Cancel</button> <button onClick={(e)=>{handleInputs(e)}}>Save</button>
            </div>
          </form>
          {artists===true &&
          <AddArtists state={closeArtists}/>

          }
          
        </div>
   
      
    </div>
  )
}

export default Addsongs