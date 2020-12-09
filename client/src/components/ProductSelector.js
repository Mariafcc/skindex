import React, { Fragment, useState, useEffect } from "react";
import "./style/productSelector.css"
import RoutineService from "../services/routine.service"
// import { useState, useEffect } from "react";
import { ListGroup, Table } from "react-bootstrap"
import { Container, Row, Col, Card } from "react-bootstrap";


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
    // console.log(reccs)


    const getProducts = () => {
        RoutineService.routineDisplay().then((res) => {
            const reccs = Object.values(res.data.products)
            reccs.sort((a, b) => { return a.order - b.order })
            setProducts([...reccs]);
            // console.log(res);
            console.log(reccs);
        })
            .catch((error) => {
                console.log(error);
            });
    };


    // console.log(products)

    return (

        <Fragment>

            <Container>
                <Card className="mx-auto">
                    <div>This is your routine!
                         <Table>
                            <thead>
                                {/* <th>Order</th> */}
                                <th>Type</th>
                                <th>Brand</th>
                                <th>Name</th>

                            </thead>
                            {[...products].map(product => {
                                return (

                                    <tr key={product.order}>
                                        <td>
                                            <p></p>
                                            {/* {product.type} */}
                                            {
                                                (product.type === 'moisturizer')
                                                    ? <img src="./icons/mouisturizer.png" alt="moisturizer" id="type-image"></img>
                                                    : product.type === 'cleanser'
                                                        ? <img src="./icons/cleanser.png" alt="cleanser" id="type-image"></img>
                                                        : product.type === 'spf'
                                                            ? <img src="./icons/spf.png" alt="spf" id="type-image"></img>
                                                            : product.type === 'toner'
                                                                ? <img src="./icons/toner.png" alt="toner" id="type-image"></img>
                                                                : product.type === 'essence'
                                                                    ? <img src="./icons/essence.png" alt="essence" id="type-image"></img>
                                                                    : product.type === 'exfoliator'
                                                                        ? <img src="./icons/exfoliator.png" alt="exfoliator" id="type-image"></img>
                                                                        : product.type === 'eye cream'
                                                                            ? <img src="./icons/eyecream.png" alt="eyecream" id="type-image"></img>
                                                                            : product.type === 'mask'
                                                                                ? <img src="./icons/facemask.png" alt="facemask" id="type-image"></img>
                                                                                : product.type === 'serum'
                                                                                    ? <img src="./icons/serum.png" alt="serum" id="type-image"></img>
                                                                                    : <div>not found</div>
                                            }
                                        </td>

                                        <td>
                                            {product.brand}
                                        </td>
                                        <td>
                                            {product.name}
                                        </td>
                                    </tr>


                                )
                            })}
                        </Table>

                    </div>
                </Card>
                {/* <Map /> */}
            </Container>
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