import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import LoginForm from "./LoginForm"


const LoginLayout = () => {

	return (
		<div className="text-center pt-5 pb-5">
			<Container className="p-4">
				<Row>
					<Col className="col-sm-12 col-md-12 col-lg-6 pb-5 mx-auto">
						<Card className="">
							<Card.Body className="">
								<LoginForm />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default LoginLayout;