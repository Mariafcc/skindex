import React from "react";
import { useHistory } from 'react-router-dom';

const SignupLayout = () => {
    const history = useHistory()

    return (
        <form>
            <h3>Signup for Routine</h3>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block"
            onClick={() => history.push('/home')}
            >Register</button>

        </form>
    );

}

export default SignupLayout;