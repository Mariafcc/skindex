import React from "react";
import NavBar from "../components/NavBar";
import LandingLayout from "../components/LandingLayout";
import Login from "./Login";
import "../pages/Landing";
import Footer from "../components/Footer";
import "../components/style/backgroundStyle.css";

const Landing = () => {
    return (
        <div id="landing-background-img">
            <div>
                {/* <NavBar /> */}
                <LandingLayout />
            </div>
            <Footer />
        </div>

    )
}

export default Landing;
// NAVBAR
// Navbar with link to signup and login routes
// Logo in navbar with route to landing page

// BODY
// Static Description of project in container
// "Take Quiz" button which routes to the quiz (pulls up modals?)

// FOOTER
// Link to github - in js or html