import React from "react"
import "./style/opacity.css"
import { Card } from "react-bootstrap"

function DescriptionCard() {
    return (
        <div>
            <Card className="opacity-4 bg-light" id="desc-card">
                <Card.Body className="text-black opacity" >
                    SkinDex is an application made just for you. Beginning your SkinDex experience with our skin care assessment, we can build a personalized skincare routine that meets your specific needs based on your skin type, primary skin concerns, budget and type of routine you are looking for. With our handpicked list of recommended products, we are able to provide you with an easy way to start and end your day and update your routine as your needs change.
                </Card.Body>
            </Card>
        </div>
    )
}

export default DescriptionCard