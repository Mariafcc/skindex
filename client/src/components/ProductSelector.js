import React from "react";
import "./style/productSelector.css"
// import { useState, useEffect } from "react";

import Map from "./Map"


const ProductSelector = () => {
    // const [product, setProduct] = useState("");

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("product input " + product);

    // };



    return (
        <div className="container">
            <div>
                <div class="col-8">
                    <h3>This is your routine!</h3>
                <ul class="list-group">
                        <li class="list-group-item">
                            Cras justo odio
                            <div class="input-group input-group-sm">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Replace Item</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                </input>
                                <div class="input-group-append">
                                    <button class="input-group-text">submit</button>
                                </div>
                            </div>
                        </li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>
                <Map />
            </div>

        </div>

    )
}

export default ProductSelector