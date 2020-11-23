import React, { useState } from "react";
import QuizModal from "../components/QuizModal";
import NavBar from "../components/NavBar";
import QuizPicks from "../components/QuizPicks";


const questions = [
        {
                question: "What is your skin type?",
                answers: ["Dry", "Oily", "Combination", "Normal", "Sensitive"]
        },
        {
                question: "What is your primary skin issue?",
                answers: ["Sensitivity", "Redness", "Dark circles", "Elasticity", "Dryness"]
        },
        {
                question: "What price range are you comfortable with having recommended?",
                answers: ["$", "$$", "$$$"]
        },
        {
                question: "What level of intensity do you want in a skincare routine?",
                answers: ["Very minimal (3 Products)", "Moderate (4 Products)", "Extensive (8 Products)", "Very extensive (9 Products)"]
        }
]

const Quiz = () => {

        return (
                <div>
                        <div>
                                <NavBar />
                                < QuizModal questions={questions} />
                        </div>
                </div>
        )

}

export default Quiz