import React from "react"
import "./style/opacity.css"
import DescriptionCard from "./DescriptionCard"
import { Container, Row, Col } from 'react-bootstrap';
import LoginSignup from "./LoginSignup";


const LandingLayout = () => {

    return (
        <div className="text-center pt-5 pb-5">
            <Container className="p-4">
                <Row>
                    <Col className="col-12 col-lg-6 pb-5 ">
                        <DescriptionCard />
                    </Col>
                    <Col className="col-12 col-lg-6 pb-5 ">
                        <LoginSignup />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingLayout;