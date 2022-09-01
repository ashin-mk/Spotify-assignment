import React from 'react'
import Header from '../child comp/Header'
import Sidebar from '../child comp/Sidebar'
import Rating from "react-rating-stars-component";
import "./Home.css"
const Home = () => {
const handleRating=(rating)=>{
  console.log(rating)
}
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

          <tr>
            <td>asdfghjkl </td>
            <td>sdfghjkl</td>
            <td>dfyukjk</td>
            <td>tycuyivub</td>
            <td > <Rating
        activeColor="grey"
        color="white"
        size={35}
        onChange={handleRating}
        /></td>
          </tr>
        </table>
       
        <table className='TableTop10Artists'>
          <thead style={{fontSize:"30px",fontWeight:'bold'}}>Top 10 Artists</thead>
          <tr>
            <th>Artists</th>
            <th>Date of Birth</th>
            <th>Songs</th>
          </tr>

          <tr>
            <td>asdfghjkl  </td>
            <td>sdfghjkl</td>
            <td id='songnametabledata'>dfyukjk  tacyugyihijxtytfugyihojipotacyugyihijxtytfugyihojipotacyugyihij xtytfugyihojipo  tacyugyihij xtytfugyihojipo  tacyugyihij xtytfugyihojipo </td>
          </tr>
        </table>
    </div>
  )
}

export default Home