import React, { useContext, useRef, useState } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";
import { AuthDataContext } from "../authorization/authWrapper";
import { useHistory } from 'react-router-dom';
import { Alert } from "react-bootstrap";

const required = (value) => {
    if (!value) {
        return (
            <div>
                <Alert>
                    This field is required!
                </Alert>
            </div>
        );
    }
};

const LoginForm = () => {
    const form = useRef();
    const checkBtn = useRef();

    const authContext = useContext(AuthDataContext)
    const { onLogin } = authContext;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory()


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(email, password).then(
                (authData) => {
                    onLogin(authData);
                    history.push("/home");

                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                }
            );
        } else {

        }
    };

    const handleLogintoRoutine = (e) => {
        e.preventDefault();

        setMessage("");

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(email, password).then(
                (authData) => {
                    onLogin(authData);
                    history.push("/routine");

                    window.location.reload();
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                }
            );
        } else {

        }
    };


    return (
        <div>
            <Form ref={form} className="input-sm">
                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <Input type="text" name="email" value={email} onChange={onChangeEmail}
                        validations={[required]} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <Input type="password" name="password" value={password} onChange={onChangePassword} validations={[required]} className="form-control" placeholder="Enter password" />
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-dark btn-lg btn-block">Take SkinDex Test</button>
                <button onClick={handleLogintoRoutine} type="submit" className="btn btn-dark btn-lg btn-block">My SkinDex Routine</button>

                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
                <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
        </div>
    )
}

export default LoginForm;