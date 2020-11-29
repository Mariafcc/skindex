import React from "react"
// import { Form, Button} from "react-bootstrap";
// import "./style/landingLayout.css"
import LoginLayout from "./LoginLayout.js"
import SignupLayout from "./SignupLayout"
import DescriptionCard from "./DescriptionCard"
import { Container, Row, Col } from 'react-bootstrap'

const LandingLayout = () => {

    return (
        <div className="text-center pt-5 pb-5" style={{
            backgroundImage: `url(https://availdermatology.com/wp-content/uploads/2020/09/history-of-skincare-blog-photo.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }} >
            {/* <img className="img-fluid" src="/img/homepic.jpg" alt="serumHand" /> */}
            <Container >
                <Row>
                    <Col>
                        <DescriptionCard />
                    </Col>
                    <Col>
                        <SignupLayout />
                    </Col>
                </Row>
                <Row className="center">
                    {/* <Col>
                        <SignupLayout />
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default LandingLayout;