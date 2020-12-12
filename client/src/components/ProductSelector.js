import React, { Fragment, useState, useEffect } from "react";
import "./style/productSelector.css"
import RoutineService from "../services/routine.service"
import Map from "./Map"
import { useHistory } from 'react-router-dom';
import { Button, Modal } from "react-bootstrap";

// import { useState, useEffect } from "react";
import { ListGroup, Table } from "react-bootstrap"
import { Container, Row, Col, Card } from "react-bootstrap";


const ProductSelector = () => {
    // const [product, setProduct] = useState("");

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("product input " + product);

    // };

    const [products, setProducts] = useState([]);

    const history = useHistory()

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

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // console.log(products)

    return (

        <Fragment>

            <Container>
                <Card className="mx-auto mb-4 p-2 pr-5 pl-5" id="table-card">
                    <h3>This is your routine!</h3>
                    <br></br>
                    <p>Here is a list of products that have been generated for you based on your quiz answers. Enjoy!</p>
                </Card>
                <Card className="mx-auto mb-4" id="table-card" style={{
                    backgroundColor: ""
                }}>
                    <div>
                        <Table className="table-fit">
                            <thead className="thead-dark">
                                {/* <th>Order</th> */}
                                <th>Steps</th>
                                <th>Brand</th>
                                <th>Name</th>

                            </thead>
                            {[...products].map(product => {
                                return (

                                    <tr key={product.order}>
                                        <td id="table-col align-baseline">
                                            <p></p>
                                            {/* {product.type} */}
                                            {
                                                (product.type === 'moisturizer')
                                                    ? <img src="./icons/moisturizer.png" alt="moisturizer" id="type-image"></img>
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

                                        <td id="table-col align-baseline">
                                            {product.brand}
                                        </td>
                                        <td id="table-col">
                                            {product.name}
                                            <p>
                                                <Button onClick={handleShow} className="m-4 btn-sm" variant="secondary">Find Store</Button>
                                            </p>
                                            <Modal show={show} onHide={handleClose} >
                                                <Modal.Header closeButton>Stores Near You</Modal.Header>
                                                <Modal.Body>
                                                    <Card className="p-4">
                                                        <Map store={product.store} />
                                                        {/* <p>{product.store}</p> */}
                                                    </Card>
                                                </Modal.Body>
                                                <Modal.Footer variant="secondary" onClick={handleClose}>
                                                    <Button>
                                                        Close
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </td>
                                        <td id="table-col align-baseline">
                                            
                                            <a style={{display: "table-cell"}} href={product.link} target="_blank">
                                                <img src="./icons/serum.png" alt="serum" id="type-image"></img>
                                            </a>

                                        </td>
                                    </tr>


                                )
                            })}
                        </Table>

                    </div>
                </Card>
                {/* <Map /> */}
            </Container>
        </Fragment >

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