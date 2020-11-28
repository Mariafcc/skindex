import React from "react";
import { useHistory } from 'react-router-dom';

const LoginLayout = () => {

    const history = useHistory()

    return (
        <div>
            <form>

                <h3>Log in</h3>


                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" placeholder="Enter username" />
                </div>


                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>


                <button type="logInsubmit" className="btn btn-dark btn-lg btn-block"
                    onClick={() => history.push('/routine')}
                >Sign in</button>

            </form>


        </div>
    )
}

export default LoginLayout;