import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    // console.log(window.location.pathname)
  return (
    <nav style={{float:'right'}}>
     {/* { window.location.pathname === '/likedbeers' ? null :  */}
         <button>
        <NavLink to="/likedbeers">Liked</NavLink>
      </button>
    {/* }  */}
      <button>

      <NavLink to="/beerform">Add New Beer</NavLink>
      </button>
      <button>

      <NavLink to="/">Home</NavLink>
      </button>
    </nav>
  );
}

export default NavBar;
