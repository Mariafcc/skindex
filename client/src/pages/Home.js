import React from "react";
import Footer from "../components/Footer";
import Quiz from "./Quiz";
import "../components/style/backgroundStyle.css";


const Home = () => {
    return (
        <div id="routine-background-img">
            <div>
                <Quiz />
            </div>
            <Footer />
        </div>
    )
}

export default Home;