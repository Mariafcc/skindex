import React from "react"
// import { Form, Button} from "react-bootstrap";
import "./style/opacity.css"
import ProductSelector from "./ProductSelector.js"
import Steps from "./Steps"
import { Container, Row, Col, Card } from 'react-bootstrap'

const RoutineLayout = () => {

    return (
        <div className="text-center pt-5 pb-5" style={{
            backgroundImage: `url(https://learningworksforkids.com/wp-content/uploads/water-bokeh-background-H9NDQZV.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            position: "absolute",
            width: "100%",
            height: "100%"
        }} >
            <Container>
                <Row>
                    <Col className="col-sm-6 pb-5">
                        <ProductSelector />
                    </Col>
                    <Col className="col-sm-6">
                        <Card className="p-4">
                            <Steps />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RoutineLayout;