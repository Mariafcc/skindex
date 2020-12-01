import React, { useContext, useRef, useState } from "react";
import { Container, Row, Column, Card } from "react-bootstrap";

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
			<Container className="white d-flex justify-content-center">
				<Card className="bg-light">
					<Card.Body className="text-black opacity">
						<LoginForm />
					</Card.Body>
				</Card>
			</Container>
		</div>
	)  
}

export default LoginLayout;