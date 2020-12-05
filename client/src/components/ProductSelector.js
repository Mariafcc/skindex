import React, { Fragment, useState, useEffect } from "react";
import "./style/productSelector.css"
import RoutineService from "../services/routine.service"
// import { useState, useEffect } from "react";
import { ListGroup } from "react-bootstrap"


import Map from "./Map"



const ProductSelector = () => {
    // const [product, setProduct] = useState("");

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("product input " + product);

    // };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    // const getProducts = () => {
    //     RoutineService.productDisplay().then((data) => {
    //         setProducts(data.data.products);
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // };

    const getProducts = () => {
        RoutineService.routineDisplay().then((data) => {
            setProducts(data.data.products);
            console.log(data.data.products)
        }).catch((error) => {
            console.log(error);
        });
    };



    return (

        <Fragment>

            <div className="container">
                <div className="row">
                    <div className="col-4">This is your routine!
                    <ListGroup>
                            {products && products.length > 0 ? products.map((product, index) => (
                                <ListGroup.Item key={index}>
                                    {product.brand},
                                    {product.name},
                                    {product.type}
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Replace Item</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
                                </input>
                                <div className="input-group-append">
                                    <button className="input-group-text">submit</button>
                                </div>
                            </div>
                                </ListGroup.Item>
                            )) : ''}
                        </ListGroup>
                        {/* <ul className="list-group">


                            {gettingProducts.map(data => (<li key={data.products.name} className="list-group-item"></li>))}
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul> */}
                    </div>
                </div>
                {/* <Map /> */}
            </div>
        </Fragment>

        // <div className="container">
        //     <div>
        //         <div className="col-8">
        //             <h3>This is your routine!</h3>
        //             <ul className="list-group">
        //                 <li className="list-group-item">
        //                     Cras justo odio
        //                     <div className="input-group input-group-sm">
        //                         <div className="input-group-prepend">
        //                             <span className="input-group-text" id="inputGroup-sizing-sm">Replace Item</span>
        //                         </div>
        //                         <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
        //                         </input>
        //                         <div className="input-group-append">
        //                             <button className="input-group-text">submit</button>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className="list-group-item">Dapibus ac facilisis in</li>
        //                 <li className="list-group-item">Morbi leo risus</li>
        //                 <li className="list-group-item">Porta ac consectetur ac</li>
        //                 <li className="list-group-item">Vestibulum at eros</li>
        //             </ul>
        //         </div>
        //     </div>

        // </div>

    )
}

export default ProductSelector