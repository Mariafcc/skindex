import React, { useContext, useRef, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import LoginForm from "./LoginForm"


const LoginLayout = () => {

	return (
		<div className="text-center pt-5 pb-5" style={{
			backgroundImage: `url(https://availdermatology.com/wp-content/uploads/2020/09/history-of-skincare-blog-photo.jpg)`,
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			position: "absolute",
			width: "100%",
			height: "100%"
		}} >
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