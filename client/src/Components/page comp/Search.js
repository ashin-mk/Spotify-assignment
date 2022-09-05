import React, { useEffect, useState } from 'react'
import Header from '../child comp/Header'
import Sidebar from '../child comp/Sidebar'
import Rating from "react-rating-stars-component";
import "./Home.css"
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import "./Search.css"
const Search = () => {
   const [search,setSearch]=useState("")
   const[isSearch,setIsSearch]=useState(false)
  const [dbdata,setDbdata]=useState()
  const navigate=useNavigate()
  const token=localStorage.getItem("AuthSpotify")
  let rate=0
 const handleSearch=(e)=>{
  if(e.target.value===""){
   setIsSearch(false)
  }else{setIsSearch(true)}
  setSearch(e.target.value)
 }
  useEffect(()=>{
axios.get("https://spotify-server-ashin.herokuapp.com/home").then((resultdata)=>{
 // console.log(resultdata.data.Artist)

  setDbdata(resultdata.data)
})
  },[])
const handleRating=(e)=>{
  if(token.length){
  rate=e
  //console.log(e)
  }else{
    alert("Click ok to Login")
      navigate("/login")   
  }
}
const updateRating=(i)=>{
  //console.log(i,"dfghjkl")
//console.log(rate)
  axios({
    url:"https://spotify-server-ashin.herokuapp.com/updaterate",
    method:"PUT",
    headers:{
      authtoken:localStorage.getItem("AuthSpotify")
    },
    data:{
      Song:i.Song,
      Artist:i.Artist,
      Rate:rate,
      uniqueid:i.UniqueId
    }
  })

}
  return (
    <div>
        <div id='searchbar'><input type="search" onChange={(e)=>handleSearch(e)}></input></div>
        <img src='loupe.png' alt='Magnifying glass icons created by Vectors Market - Flaticon' className='magnifies'/>
        <Header/>
        <Sidebar/>
        {
          isSearch===true &&
        
        <table className='TableTop10SOngs' style={{top:"150px", overflowY:"hidden"}}>
          <thead style={{fontSize:"30px",fontWeight:'bold'}}>Songs</thead>
          <tr>
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rate</th>
          </tr>
{dbdata && dbdata.Song.map((k,i)=>{
  if(k.Song.includes(search)){
  return(
<tr key={i}>
            <td ><img className='imgSongs' src={k.Image}/> </td>
            <td>{k.Song}</td>
            <td>{k.Released}</td>
            <td>{k.Artist}</td>
            <td onClick={()=>updateRating(k)}> <Rating
        activeColor="grey"
        color="white"
        size={35}
        onChange={handleRating}

        /></td>
          </tr>
  )}else return
})
          }
        </table>
}
{isSearch ===true &&
        <table className='TableTop10Artists' style={{top:"850px",}}>
          <thead style={{fontSize:"30px",fontWeight:'bold'}}>Artists</thead>
          <tr>
            <th>Artists</th>
            <th>Date of Birth</th>
            <th>Songs</th>
          </tr>
{dbdata && dbdata.Artist.map((k,i)=>{
  if(k.Artist.includes(search)){
return(
  <tr>
            <td> {k.Artist} </td>
            <td>{k.DOB}</td>
            <td id='songnametabledata'>
              {k.songlist.join(", ")}
            </td>
          </tr>
)}
else return
  })
}  
        </table>
}
    </div>
  )
}

export default Search