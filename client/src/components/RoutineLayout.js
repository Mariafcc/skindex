import React, { useState } from "react"
// import { Form, Button} from "react-bootstrap";
import "./style/opacity.css"
import ProductSelector from "./ProductSelector.js"
// import Steps from "./Steps"
import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Button, Modal } from "react-bootstrap";

const RoutineLayout = () => {

    return (
        <div>
            <Container>
                <Row>
                    <ProductSelector />
                </Row>
            </Container>
        </div>
    )
}

export default RoutineLayout;