import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthDataContext } from "../authorization/authWrapper";
import "./style/NavBar.css"
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'


const NavBar = () => {
    const location = useLocation();
    const authContext = useContext(AuthDataContext);
    const { onLogout, user } = authContext;

    const showLogout = user ? true : false;

    return (
        // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        //     <Navbar.Brand href="/">SkinDex</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //     <Navbar.Collapse id="responsive-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Nav.Link href="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>Home</Nav.Link>
        //             <Nav.Link href="/login" className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>Login</Nav.Link>
        //         </Nav>
        //         <Nav>
        //             <Link
        //                 to="/"
        //                 className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>

        //                 {showLogout ? <button id="logout-button" onClick={onLogout}>Logout</button> : ''}
        //             </Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        // <Navbar>
        //     <Nav>
        //         <Link
        //             to="/"
        //             className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>

        //             {showLogout ? <button id="logout-button" onClick={onLogout}>Logout</button> : ''}
        //         </Link>
        //     </Nav>
        // </Navbar>
        <Link
            to="/"
            className={location.pathname === "/login" ? "nav-link active" : "nav-link"}>

            {showLogout ? <button id="logout-button" onClick={onLogout}>Logout</button> : ''}
        </Link>


    )
}

export default NavBar;