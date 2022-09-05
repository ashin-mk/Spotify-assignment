import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../child comp/Header'
import Sidebar from '../child comp/Sidebar'
import Rating from "react-rating-stars-component";
import { useNavigate } from 'react-router-dom';
const Songs = () => {
    const [data,setData]=useState()
    const navigate=useNavigate()
  const token=localStorage.getItem("AuthSpotify")
  let rate=0
    useEffect(()=>{
        axios.get("https://spotify-server-ashin.herokuapp.com/home").then((resultdata)=>{
            setData(resultdata.data.Song)
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
        }).then(()=>{
            window.location.reload(false)
        })
      
      }
  return (
    <div>
        <Header/>
        <Sidebar/>
        <table className='TableTop10SOngs'>
          <thead style={{fontSize:"30px",fontWeight:'bold'}}>Songs</thead>
          <tr>
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artists</th>
            <th>Rate</th>
          </tr>
{data && data.map((k,i)=>{

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
  )
})
          }
        </table>

    </div>
  )
}

export default Songs