import React from "react";
import "./style/productSelector.css"
import { useState } from "react";



const ProductSelector = () => {
    const [product, setProduct] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log("product input " + product);
        
    };



    return (
        <div className="container">
            <img src="./img/routine.jpg" class="img-fluid" alt="Responsive image"></img>
            <div className="centered">
                <label className="pname" for="fname">Product you have:</label>
                <input className="pinput" type="text" type="text"
                    placeholder="Product you have"
                    name="product" onChange={e => setProduct(e.target.value)}></input>
                <br></br>
                <label className="ptype" for="type">Product type:</label>
            <div class="centered">
                <label className="pname" for="fname">Product you have:</label>
                <input className="pinput" type="text" id="fname" name="fname"></input>
                <br></br>
                <label className="ptype"for="type">Product type:</label>
                <select className="selector" name="product" id="products">
                    <option value="cleanser">Cleanser</option>
                    <option value="toner">Toner</option>
                    <option value="essence">Essence</option>
                    <option value="serum">Serum</option>
                    <option value="moisturizer">Moisturizer</option>
                    <option value="eye">Eye Cream</option>
                    <option value="exfoliator">Exfoliator</option>
                    <option value="mask">Mask</option>
                    <option value="spf">SPF</option>
                </select>
                <button type="button" className="selectorBtn"
                    onClick={handleSubmit}>Submit</button>
                {/* <div>
                    <p>{product}</p>
                </div> */}
            </div>

                <button type="button" className="selectorBtn" >Submit</button>
            </div>
        </div>
    )
}

export default ProductSelector