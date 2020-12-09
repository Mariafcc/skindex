import React from "react";
import LoginForm from "./LoginForm.js";
import SignupLayout from "./SignupLayout";
import { Accordion, Card, Button } from "react-bootstrap";

const LoginSignup = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Card className="p-4">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Sign Up
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <SignupLayout />
                </Accordion.Collapse>
            </Card>
            <Card className="p-4">
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Login
      </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <LoginForm />
                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
}

export default LoginSignup;