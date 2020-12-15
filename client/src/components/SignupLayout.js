import React, { useState, useRef, useEffect} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../services/auth.service";
import Spinner from "../components/Loading";
import { Alert } from "react-bootstrap";

import { useHistory } from 'react-router-dom';

const SignupLayout = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [isValid, setValid] = useState(true);
    const history = useHistory();

    const [showSpinner, setShowSpinner] = useState(false);

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

    const required = (value) => {
        setValid(true);
        if (!value) {
            setValid(false);
            return (
                <div>
                    <Alert>
                        This field is required!
                    </Alert>
                </div>
            );
        }
    };

    const validEmail = (value) => {
        setValid(true);
        if (!isEmail(value) || !value) {
            setValid(false);
            return (
                <div>
                    <Alert>
                        This is not a valid email!
                    </Alert>
                </div>
            );
        }
    };

    const vUsername = (value) => {
        setValid(true);
        if (value.length < 3 || value.length > 20) {
            setValid(false);
            return (
                <div>
                    <Alert>
                        The username must be between 3 and 20 characters.
                    </Alert>
                </div>
            );
        }
    };

    const vPassword = (value) => {
        setValid(true);
        if (value.length < 6 || value.length > 40) {
            setValid(false);
            return (
                <div>
                    <Alert>
                        The password must be between 6 and 40 characters.
                    </Alert>
                </div>
            );
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);
        setShowSpinner(true);
        setValid(true);

        vUsername(username);
        validEmail(email);
        vPassword(password);

        if (!isValid) {
            setSuccessful(false);
            setShowSpinner(false);
            return;
        }

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setShowSpinner(false);
                    setTimeout(() => setSuccessful(true), 1000);
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
                    setShowSpinner(false);
                }
            );
        }else{
            setSuccessful(false);
            setShowSpinner(false);
        }
    };

    const redirectAfterSuccessfulRegister = () => {
        const to = { pathname: `login`, hash: `#hash` };
        history.push(to)
    };

    useEffect(() => {
        if (successful) {
            setShowSpinner(true);
            redirectAfterSuccessfulRegister();
        }
    }, [successful]);



    return (
        <div>
            {showSpinner ? <Spinner visible={showSpinner} /> :
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

                    <button type="submit" disabled={!password} className="btn btn-dark btn-lg btn-block">Register</button>
                    {message && (
                        <div className="form-group">
                            <div
                                className={successful ? "alert alert-success" : "alert alert-success"}
                                role="alert"
                            >
                                {message}
                            </div>
                            <div className="success-message text-center">You will be redirected to login in a second</div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            }
        </div>
    );

}

export default SignupLayout;