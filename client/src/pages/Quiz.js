import React from "react";
import QuizModal from "../components/QuizModal";
import { Container, Row, Col } from "react-bootstrap";


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
                answers: ["Very minimal (3 Products)", "Moderate (5 Products)", "Very extensive (9 Products)"]
        }
]

const Quiz = () => {

        return (
                <div className="text-center pt-5 pb-5">
                        <Container className="p-4">
                                <Row>
                                        <Col className="mx-auto my-auto">
                                                < QuizModal questions={questions} />
                                        </Col>
                                </Row>
                        </Container>
                </div>
        )

}

export default Quiz 
