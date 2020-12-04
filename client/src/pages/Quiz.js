import React, { useState } from "react";
import QuizModal from "../components/QuizModal";
import NavBar from "../components/NavBar";


const questions = [
        {
                id: 1,
                question: "What is your skin type?",
                answers: ["Dry", "Oily", "Normal"]
        },
        {
                id: 2,
                question: "What is your primary skin issue?",
                answers: ["Dullness", "Acne", "Elasticity", "Dryness"]
        },
        {
                id: 3,
                question: "What price range are you comfortable with having recommended?",
                answers: ["$", "$$", "$$$"]
        },
        {
                id: 4,
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