import React from "react";
import NavBar from "../components/NavBar";
import LoginLayout from "../components/LoginLayout";
import Footer from "../components/Footer";
import "../components/style/backgroundStyle.css";



const Login = () => {

    return (
        <div id="routine-background-img">
            {/* < NavBar /> */}
            <LoginLayout />
            <Footer />
        </div>
    )
}

export default Login;