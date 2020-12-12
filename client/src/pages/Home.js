import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Quiz from "./Quiz";
import "../components/style/backgroundStyle.css";

const Home = () => {
    return (
        <div id="quiz-background-img">
            {/* <NavBar /> */}
            <div>
                <Quiz />
            </div>
            <Footer />
        </div>
    )
}

export default Home;