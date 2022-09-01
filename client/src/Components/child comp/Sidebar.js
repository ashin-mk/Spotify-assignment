import React from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div id='Sidebar'>
        <div>
<Link to="/home">
    <button>
    Home
    </button>
</Link>
        </div>
        <div>
        <div>
<Link to="/search">
    <button>
    Search
    </button>
</Link>
        </div>  
        </div>
        <div>
        <div>
<Link to="/addsongs">
    <button>
   + Addsongs
    </button>
</Link>
        </div>
        </div>

    </div>
  )
}

export default Sidebar