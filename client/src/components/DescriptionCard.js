import React from "react"
import "./style/opacity.css"
import { Card } from "react-bootstrap"

function DescriptionCard() {
    return (
        <div>
            <Card className=" bg-light pt-3" id="desc-card">
                <Card.Title>
                    <img src="./img/header.png"></img>
                </Card.Title>
                <Card.Body className="text-black" >
                    <p>SkinDex is an application made just for you!</p>
                    <p>Begin your SkinDex experience with our skin care assessment. We can build a personalized skincare routine that meets your specific needs based on your skin type, primary skin concerns, budget and type of routine you are looking for.</p>
                    <p>With our handpicked list of recommended products, we are able to provide you with an easy way to start and end your day and update your routine as your needs change.</p>
                </Card.Body>
            </Card>
        </div>
    )
}

export default DescriptionCard