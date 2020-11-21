import React from "react";
import { Link, useLocation } from "react-router-dom";



const NavBar = () => {
    const location = useLocation();

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >SkinDex</a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link>
                    <Link
                        to="/login"
                        className={location.pathname === "/login" ? "nav-link active" : "nav-link"}
                    >
                        Login
                    </Link>

                </div>
            </div>
        </nav>

    )
}

export default NavBar;
