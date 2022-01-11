import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar navbar-light bg-light">
        <NavLink className="navbar-brand" to="/movies" >Movies</NavLink>
        <NavLink className="navbar-brand" to="/login">Login</NavLink>
        <NavLink className="navbar-brand" to="/rentals">Rentals</NavLink>
        <NavLink className="navbar-brand" to="/registerForm">Register</NavLink>
        <NavLink className="navbar-brand" to="/customers">Customers</NavLink>
        </nav>
    )
}
export default Navbar;