import React, { useState } from "react";
import QuizModal from "../components/QuizModal";


const questions = [
        {
                question: "What is your skin type?",
                answers: ["Dry","Oily","Combination","Normal","Sensitive"]      
        },
        {
                question: "What skin issues do you have? Check all that apply.",
                answers: ["Sensitivity","Redness","Dark circles","Elasticity","Dryness"]
        },
        {
                question: "What price range are you comfortable with having recommended?",
                answers: ["$", "$$", "$$$"]
        },
        {
                question: "What level of intensity do you want in a skincare routine?",
                answers: ["Very minmal","Moderate","Very extensive"]
        }
]

const Quiz = () => {
        const [userAnswers, setUserAnswers] = useState([])

        return (
                <body>

                < QuizModal questions={questions}/>
                   
                        {/* {questions.map(question => {
                                <React.Fragment>
                                <h1>{question.question}</h1>
                                <ul>
                                        <li>
                                                {question.answers}
                                        </li>
                                        <li>
                                                {question.answers}
                                        </li>
                                        <li>
                                                {question.answers}
                                        </li>
                                </ul>
                                </React.Fragment>
                        })} */}
                </body>
        )

}

export default Quiz