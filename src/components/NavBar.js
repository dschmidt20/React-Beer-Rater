import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    // console.log(window.location.pathname)
  return (
    <nav>
     {/* { window.location.pathname === '/likedbeers' ? null :  */}     

      <NavLink to="/beerform">Add New Beer</NavLink>
      <br/> 
     
      <NavLink to="/">Home</NavLink>
      <br/>
    </nav>
  );
}

export default NavBar;
