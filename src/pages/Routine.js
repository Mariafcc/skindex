import React from "react";
import NavBar from "../components/NavBar";

const Routine = () => {
    return (
        <div class="container">
            <header>
                <NavBar />
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
            </header>
            <div class="container">
                <div class="row">
                    <div class="col">
                        1 of 2
                    </div>
                    <div class="col">
                        2 of 2
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Routine;

//nav bar at the top
//User will have already taken a quiz to show recommendations 
//recommendations should be displayed after the quiz and when an item is deleted 
//made up api should have number 1,2,3.. for where to use in routine
//will have a section to input current items where they will put name, and item type. 
//limit user to put exactly what the item is. 
// item type will also be numbers of 1,2,3.. 
//a delete button should be included for each item
//link to each product for where to purchase (api to map)
// date of entry for count down of expiration date (leave for last)
//retake quiz option 
//footer displaying github page 
