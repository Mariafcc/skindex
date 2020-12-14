import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthDataContext } from "../authorization/authWrapper";
import "./style/NavBar.css";


const NavBar = () => {
    const location = useLocation();
    const authContext = useContext(AuthDataContext);
    const { onLogout, user } = authContext;

    const showLogout = user ? true : false;

    return (
        
        <Link
            to="/"
            className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>

            {showLogout ? <button id="logout-btn" className="btn btn-light" onClick={onLogout}>Logout</button> : ''}
        </Link>


    )
}

export default NavBar;