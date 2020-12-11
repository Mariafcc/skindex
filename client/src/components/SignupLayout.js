import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";

import { useHistory } from 'react-router-dom';

const required = (value) => {
    if (!value) {
        return (
            <div>This field is required!</div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div>This is not a valid email.</div>
        );
    }
};

const vUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div>The username must be between 3 and 20 characters.</div>
        );
    }
};

const vPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div>The password must be between 6 and 40 characters.</div>
        );
    }
};


const SignupLayout = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const history = useHistory();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    const redirectAfterSuccessfulRegister = () => {
        const to = { pathname: `login`, hash: `#hash` };
        setTimeout(() => history.push(to), 0);
    };

    useEffect(() => {
        if (successful) {
            redirectAfterSuccessfulRegister();
        }
    });

    return (
        <Form onSubmit={handleRegister} ref={form}>
            <h3>Signup for Routine</h3>

            <div className="form-group">
                <label>Username</label>
                <Input type="text" name="username"
                    value={username}
                    onChange={onChangeUsername}
                    validations={[required, vUsername]} className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <Input type="email" name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]} className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <Input type="password" name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vPassword]} className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            {message && (
                <div className="form-group">
                    <div
                        className={successful ? "alert alert-success" : "alert alert-danger"}
                        role="alert"
                    >
                        {message}
                    </div>
                    <div className="success-message text-center">You will be redirected to login in 3 seconds</div>
                </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
    );

}

export default SignupLayout;