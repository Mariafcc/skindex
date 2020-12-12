import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Quiz from "./Quiz";

const Home = () => {
    return (
        <div>
            {/* <NavBar /> */}
            <div>
                <Quiz />
            </div>
            <Footer />
        </div>
    )
}

export default Home;