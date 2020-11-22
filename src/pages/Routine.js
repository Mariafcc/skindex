import React from "react";
import NavBar from "../components/NavBar";
import Steps from "../components/Steps";
import ProductSelector from "../components/ProductSelector";

const Routine = () => {
    return (
        <div class="container">
            <header>
                <NavBar />
               
            </header>
            <div>
                <ProductSelector/>
                <Steps />
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
