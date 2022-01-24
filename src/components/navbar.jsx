import React from "react";
import { NavLink } from "react-router-dom";
function Navbar({user}){
    return(
        <nav className="navbar navbar-light bg-light">
        <NavLink className="navbar-brand" to="/movies" >Movies</NavLink>
        <NavLink className="navbar-brand" to="/customers">Customers</NavLink>
        <NavLink className="navbar-brand" to="/rentals">Rentals</NavLink>
       {(!user&&<React.Fragment>
           <NavLink className="navbar-brand" to="/login">Login</NavLink>
        <NavLink className="navbar-brand" to="/registerForm">Register</NavLink>
        </React.Fragment>)}
         {(user&&<React.Fragment>
            <NavLink className="navbar-brand" to="/profile">{user.name}</NavLink>
         <NavLink className="navbar-brand" to="/logout">Logout</NavLink>
         </React.Fragment>)
       } 
        </nav>
    )
}
export default Navbar;