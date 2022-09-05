import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Sidebar from '../child comp/Sidebar';
import Header from '../child comp/Header';

const Artists = () => {
    const [data,setData]=useState()
    
  useEffect(()=>{
    axios.get("http://localhost:3001/home").then((resultdata)=>{
      setData(resultdata.data.Artist)
    console.log(resultdata.data.Artist)}
      )},[])
  return (
    <div>
        <Header/>
        <Sidebar/>
        <table className='TableTop10Artists' style={{top:"158px"}}>
          <thead style={{fontSize:"30px",fontWeight:'bold'}}>Top 10 Artists</thead>
          <tr>
            <th>Artists</th>
            <th>Date of Birth</th>
            <th>Songs</th>
          </tr>
{data && data.map((k,i)=>{
return(
  <tr key={i}>
            <td> {k.Artist} </td>
            <td>{k.DOB}</td>
            <td id='songnametabledata'>
              {k.songlist.join(", ")}
            </td>
          </tr>
)}
)
}
          
        </table>
    </div>
  )
}

export default Artists