import React from "react";
import LoginLayout from "./LoginForm.js";
import SignupLayout from "./SignupLayout";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import $ from "jquery";


const LoginSignup = () => {
    {
        $('#bologna-list a').on('click', function (e) {
            e.preventDefault()
            $(this).tab('show')
        })
    }
    return (
        <Col>
            <Card>
                <div class="card-header" style={{
                    fontFamily: "Helvetica"
                }}>
                    <ul class="nav nav-tabs card-header-tabs" id="bologna-list" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" href="#signuptab" role="tab" aria-controls="description" aria-selected="true">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#logintab" role="tab" aria-controls="history" aria-selected="false">Login</a>
                        </li>
                    </ul>
                </div>
                <div class="card-body">
                    <div class="tab-content">
                        <div class="tab-pane active" id="signuptab" role="tabpanel">
                            <SignupLayout />
                        </div>

                        <div class="tab-pane" id="logintab" role="tabpanel" aria-labelledby="history-tab">
                            <LoginLayout />
                        </div>
                    </div>
                </div>
            </Card>
        </Col>
        //     <Accordion defaultActiveKey="0">
        //         <Card className="p-4">
        //             <Card.Header>
        //                 <Accordion.Toggle as={Button} variant="link" eventKey="0">
        //                     Sign Up
        //   </Accordion.Toggle>
        //             </Card.Header>
        //             <Accordion.Collapse eventKey="0">
        //                 <SignupLayout />
        //             </Accordion.Collapse>
        //         </Card>
        //         <Card className="p-4">
        //             <Card.Header>
        //                 <Accordion.Toggle as={Button} variant="link" eventKey="1">
        //                     Login
        //   </Accordion.Toggle>
        //             </Card.Header>
        //             <Accordion.Collapse eventKey="1">
        //                 <LoginForm />
        //             </Accordion.Collapse>
        //         </Card>
        //     </Accordion>
    )
}

export default LoginSignup;