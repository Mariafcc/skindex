import React, { useState } from "react";
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
                <div className="text-center pt-5 pb-5" style={{
                        backgroundImage: `url(https://availdermatology.com/wp-content/uploads/2020/09/history-of-skincare-blog-photo.jpg)`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "fixed",
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                }} >
                        {/* <img className="img-fluid" src="/img/homepic.jpg" alt="serumHand" /> */}
                        {/* <Container className="fluid">
                            <Row>
                                <Col className="">
                                    <Card className="pb-2 w-75">
                                        <img src="./img/header.png"></img>
                                    </Card>
                                </Col>
                            </Row>
                        </Container> */}
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
