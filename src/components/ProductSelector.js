import React from "react";

const ProductSelector = () => {
    return (
        <p>
            <label for="fname">Product you have:</label>
            <input type="text" id="fname" name="fname"></input>
            <label for="cars">Product type:</label>
            <select name="product" id="products">
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
            <input type="submit" value="Submit"></input>
        </p>
    )
}

export default ProductSelector