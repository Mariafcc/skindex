import React from "react"
import "./style/opacity.css"
import ProductSelector from "./ProductSelector.js"
import { Container, Row } from 'react-bootstrap';


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