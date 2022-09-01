import React from 'react'
import Header from '../child comp/Header'
import Sidebar from '../child comp/Sidebar'
import "./Search.css"
const Search = () => {
  return (
    <div>
        <div id='searchbar'><input type="search"></input></div>
        <img src='loupe.png' alt='Magnifying glass icons created by Vectors Market - Flaticon' className='magnifies'/>
        <Header/>
        <Sidebar/>
    </div>
  )
}

export default Search