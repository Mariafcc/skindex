import React from "react"
// import { Form, Button} from "react-bootstrap";
import "./style/opacity.css"
import LoginLayout from "./LoginLayout.js"
import SignupLayout from "./SignupLayout"
import DescriptionCard from "./DescriptionCard"
import { Container, Row, Col, Card } from 'react-bootstrap'

const LandingLayout = () => {

    return (
        <div className="text-center pt-5 pb-5" style={{
            backgroundImage: `url(https://availdermatology.com/wp-content/uploads/2020/09/history-of-skincare-blog-photo.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            position: "absolute",
            width: "100%",
            height: "100%"
        }} >
            {/* <img className="img-fluid" src="/img/homepic.jpg" alt="serumHand" /> */}
            <Container className="justify-content-center">
                <Row>
                    <Col className="col-sm-6 pb-5">
                        <DescriptionCard />
                    </Col>
                    <Col className="col-sm-6">
                        <Card className="p-4">
                            <SignupLayout />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LandingLayout;