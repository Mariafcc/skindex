import React, { Component } from "react";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Spinner = (props) => {
    //other logic
    return (
        <div>
            {props.visible ? <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
            // visible={visible}
            /> : ""}

        </div>
    );
}

export default Spinner;