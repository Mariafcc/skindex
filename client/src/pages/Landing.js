import React from "react";
import LandingLayout from "../components/LandingLayout";
import "../pages/Landing";
import Footer from "../components/Footer";
import "../components/style/backgroundStyle.css";

const Landing = () => {
    return (
        <div id="routine-background-img">
            <div>
                <LandingLayout />
            </div>
            <Footer />
        </div>

    )
}

export default Landing;
