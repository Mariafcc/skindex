import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style/NavBar.css"

const NavBar = () => {
    const location = useLocation();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand">SkinDex</a>
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link" }>
            Home
                    </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    {/* <Link to="/home" className={location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                        Home
                    </Link> */}
                    <Link
                        to="/login"
                        className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>
                        Login
                    </Link>
                </div>
            </div>
            </nav>
        </div> 
    )
} 
 
export default NavBar;