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
            <NavLink 
            to='/beerform'
            >
                Add New Beer
            </NavLink>
            <NavLink 
            to='/'
            >
                Home
            </NavLink>
        </nav>
    )
}

export default NavBar
