import React from "react"
// import { Form, Button} from "react-bootstrap";
import "./style/opacity.css"
import LoginLayout from "./LoginLayout.js"
import SignupLayout from "./SignupLayout"
import DescriptionCard from "./DescriptionCard"
import { Container, Row, Col, CardImg, Nav, Card, Button } from 'react-bootstrap';
import LoginSignup from "./LoginSignup"


const LandingLayout = () => {

    return (
        <div className="text-center pt-5 pb-5" style={{
            backgroundImage: `url(https://availdermatology.com/wp-content/uploads/2020/09/history-of-skincare-blog-photo.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "fixed",
            position: "absolute",
            width: "100%",
            height: "auto"
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
                    <Col className="col-sm-12 col-md-12 col-lg-6 pb-5">
                        <DescriptionCard />
                    </Col>
                    <Col className="col-sm-12 col-md-12 col-lg-6 pb-5">
                        <LoginSignup />
                        {/* <Card className="p-4">
                            <SignupLayout />
                        </Card> */}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingLayout;