import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <NavLink 
            to='/likedbeers'
            >
                Liked
            </NavLink>
            <br/>
            <NavLink 
            to='/beerform'
            >
                Add New Beer
            </NavLink>
            <br/>
            <NavLink 
            to='/'
            >
                Home
            </NavLink>
        </nav>
    )
}

export default NavBar
