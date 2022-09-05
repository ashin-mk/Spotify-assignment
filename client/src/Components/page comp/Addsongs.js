import React, { useEffect, useState } from 'react'
import AddArtists from '../child comp/AddArtists'
import Header from '../child comp/Header'
import Sidebar from '../child comp/Sidebar'
import "./Addsongs.css"
import FileBase64 from 'react-file-base64'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addsongs = () => {
  const [artistName,setArtistsName]=useState()
  const [artists,setArtists]=useState()

  const [addsongs,setAddsongs]=useState({
    Song:"",
    Image:null,
    Released:"",
    Artist:"",
  })
  const navigate=useNavigate()
  useEffect(()=>{
axios.get("http://localhost:3001/home").then((artistdata)=>{
  setArtistsName(artistdata.data.Artist)
})
  },[])
  const handleAddSong=(id,e)=>{
    if(e.target.value!==""){
      setAddsongs({...addsongs,[id]:e.target.value})
    }

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
  const addNewArtist=(k)=>{
    artistName.push(k)
  }
  const handleInputs=(e)=>{
    e.preventDefault()
    if(addsongs.Artist.length){
      axios({
        url:"http://localhost:3001/addsongs",
        method:'POST',
        data:addsongs,
        headers:{
          authtoken:localStorage.getItem("AuthSpotify")
        }
      }).then((data)=>{
  console.log(data)
      }).catch((err)=>{
        console.log(err)
      })
    }else{
      alert("please select an artist")
    }
    
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
            <select type="text"  onChange={(e)=>{handleAddSong("Artist",e)}}>
              <option value="" disabled selected>Select Artist</option>
              {artistName && artistName.map((data,i)=>{
                return(
                  <option value={data.Artist} key={i}>{data.Artist}</option>
                )
              })}
            </select>
            </div>
            
            <button id='AddartistsButt' onClick={(e)=>{handleArtists(e)}}>+   Add Artists</button>
            <div className='SubmitCancelButt'>
            <button onClick={()=>{navigate("/")}}>Cancel</button> <button onClick={(e)=>{handleInputs(e)}}>Save</button>
            </div>
          </form>
          {artists===true &&
          <AddArtists close={{closeArtists,addNewArtist}}/>

          }
          
        </div>
   
      
    </div>
  )
}

export default Addsongs