import React from "react"
// import { Form, Button} from "react-bootstrap";
import "./style/opacity.css"
import LoginLayout from "./LoginLayout.js"
import SignupLayout from "./SignupLayout"
import DescriptionCard from "./DescriptionCard"
import { Container, Row, Col, CardImg, Nav, Card, Button } from 'react-bootstrap';
import LoginSignup from "./LoginSignup";
import "./style/landingMediaQuery.css"


const LandingLayout = () => {

    return (
        <div className="text-center pt-5 pb-5">
            <Container className="p-4">
                <Row>
                    <Col className="col-sm-12 col-md-12 col-lg-6 pb-5 ">
                        <DescriptionCard />
                    </Col>
                    <Col className="col-sm-12 col-md-12 col-lg-6 pb-5 ">
                        <LoginSignup />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingLayout;