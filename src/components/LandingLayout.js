import React from "react"
import { Form, Button} from "react-bootstrap";
import "./style/landingLayout.css"

const LandingLayout = () => {

    return (
        <div className="text-center">
            <img className="img-fluid" src="/img/homepic.jpg" alt="serumHand" />
            <Form className="footer">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className="emailArea" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control className="passwordArea" type="password" placeholder="Password" />
                </Form.Group>
                <Button className="landinglogin" variant="dark" type="submit">
                    Log In
                 </Button>
            </Form>
            {/* change the img file to googledrive */}
        </div>
    )
}

export default LandingLayout;