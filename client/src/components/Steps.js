
import React, { Fragment} from "react";
import "./style/steps.css";
import Map from "./Map"



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