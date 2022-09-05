import React, { useEffect, useState } from 'react'
import Header from '../child comp/Header'
import Sidebar from '../child comp/Sidebar'
import Rating from "react-rating-stars-component";
import "./Home.css"
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
  const [dbdata,setDbdata]=useState()
  const navigate=useNavigate()
  const token=localStorage.getItem("AuthSpotify")
  let rate=0
 
  useEffect(()=>{
axios.get("https://spotify-server-ashin.herokuapp.com/home").then((resultdata)=>{
//  console.log(resultdata.data.Artist)
resultdata.data.Song.sort(function(a,b){
  if(b.Rate>a.Rate){
    return 1
  }else if(b.Rate===a.Rate){
    return 0
  }else{
    return -1
  }
})
resultdata.data.Artist.sort(function(a,b){
  if(b.Rate>a.Rate){
    return 1
  }else if(b.Rate===a.Rate){
    return 0
  }else{
    return -1
  }
})

  setDbdata(resultdata.data)
})
  },[])
const handleRating=(e)=>{
  if(token.length){
  rate=e
  ////console.log(e)
  }else{
    alert("Click ok to Login")
      navigate("/login")   
  }
}
const updateRating=(i)=>{
  ////console.log(i,"dfghjkl")
////console.log(rate)
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
////console.log(dbdata)
  return (
    <div>
        <Header></Header>
         <Sidebar/>

        <table className='TableTop10SOngs'>
          <thead style={{fontSize:"30px",fontWeight:'bold'}}>Top 10 Songs</thead>
          <tr>
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rate</th>
          </tr>
{dbdata && dbdata.Song.map((k,i)=>{
  if(i<10){
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
          <tr>View All songs
        <Link to="/Songs">Click here</Link>
       </tr>
        </table>
       
        <table className='TableTop10Artists'>
          <thead style={{fontSize:"30px",fontWeight:'bold'}}>Top 10 Artists</thead>
          <tr>
          
            <th>Artists</th>
            <th>Date of Birth</th>
            <th>Songs</th>
            
          </tr>
{dbdata && dbdata.Artist.map((k,i)=>{
  if(i<10){

  
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
      <tr>View All artist<Link to="/Artist">click here</Link></tr>    
        </table>
    </div>
  )
}

export default Home