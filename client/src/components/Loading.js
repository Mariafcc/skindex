import React from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Spinner = (props) => {
    
    return (
        <div>
            {props.visible ? <Loader
                type="TailSpin"
                color="#BFE1DB"
                height={100}
                width={100}
                timeout={3000} //3 seconds
                className="p-10"
            /> : ""}

        </div>
    );
}

export default Spinner;