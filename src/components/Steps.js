import React from "react";
import "./style/steps.css";
import ProductSelector from "./ProductSelector"

const Steps = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col-8">This will display the google map and recommendations</div>
                <div class="col-4">This is your routine!
                {/* <div>
                    <p>{product}</p>
                </div> */}
                </div>
            </div>
        </div>

        <div className="container">
            <img className="img-fluid" src="/img/routineList.jpg" alt="serum" />
        </div>        
    )
};

export default Steps;