import React, {useRedirect} from "react";
import { useState } from "react";


const Login = () => {
    const [redirect, setRedirect] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("this works?")
        
    };
    return (
        <div>
            <button className="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;