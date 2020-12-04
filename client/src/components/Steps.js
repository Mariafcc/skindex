
import React, { Fragment} from "react";
import Map from "./Map"

import "./style/steps.css";



const Steps = () => {




    return (
        <Fragment>

            <div className="container">

                <div className="row">

                    <div className="col-4">
                        <h2>Where to buy:</h2>
                        <Map />

                    </div>
                </div>
            </div>
        </Fragment>


    )
};

export default Steps;