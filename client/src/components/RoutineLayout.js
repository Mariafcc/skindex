import React, { useState } from "react"
// import { Form, Button} from "react-bootstrap";
import "./style/opacity.css"
import ProductSelector from "./ProductSelector.js"
import Steps from "./Steps"
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Button, Modal } from "react-bootstrap";

const RoutineLayout = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    <Col className="col-sm-6 col-md-6 col-lg-12 center-text">
                        <ProductSelector />
                        <Button onClick={handleShow} className="m-4">Find Store</Button>
                        <Modal show={show} onHide={handleClose} >
                            <Modal.Header closeButton>Stores Near You</Modal.Header>
                            <Modal.Body>
                                <Card className="p-4">
                                    <Steps />
                                </Card>
                            </Modal.Body>
                            <Modal.Footer variant="secondary" onClick={handleClose}>
                                <Button>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Col>
                    {/* <Col className="col-sm-6">
                        <Card className="p-4">
                            <Steps />
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default RoutineLayout;