import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RoutineLayout from "../components/RoutineLayout";
import "../components/style/backgroundStyle.css";


const Routine = () => {

    return (

        <div className="text-center pt-5 pb-5" id="routine-background-img">
            <NavBar />
            <RoutineLayout />
            <Footer />

        </div>
    )
}

export default Routine;

