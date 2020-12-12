import React, { Fragment, useState, useEffect } from "react";
import "./style/productSelector.css"
import RoutineService from "../services/routine.service"
import Map from "./Map"

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

    // Info modals
    const [cleanserShow, setCleanserShow] = useState(false);
    const [tonerShow, setTonerShow] = useState(false);
    const [serumShow, setSerumShow] = useState(false);
    const [moistureShow, setMoistureShow] = useState(false);
    const [essenceShow, setEssenceShow] = useState(false);
    const [maskShow, setMaskShow] = useState(false);
    const [eyeShow, setEyeShow] = useState(false);
    const [exfolShow, setExfolShow] = useState(false);
    const [spfShow, setSpfShow] = useState(false);


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
                                            {/* Icons for each product type */}
                                            {
                                                (product.type === 'moisturizer')
                                                    ? <Button onClick={() => setMoistureShow(true)} id="icon-btn"><img src="./icons/moisturizer.png" alt="moisturizer" id="type-image"></img></Button>
                                                    : product.type === 'cleanser'
                                                        ? <Button onClick={() => setCleanserShow(true)} id="icon-btn"><img src="./icons/cleanser.png" alt="cleanser" id="type-image"></img></Button>
                                                        : product.type === 'spf'
                                                            ? <Button onClick={() => setSpfShow(true)} id="icon-btn"><img src="./icons/spf.png" alt="spf" id="type-image"></img></Button>
                                                            : product.type === 'toner'
                                                                ? <Button onClick={() => setTonerShow(true)} id="icon-btn"><img src="./icons/toner.png" alt="toner" id="type-image"></img></Button>
                                                                : product.type === 'essence'
                                                                    ? <Button onClick={() => setEssenceShow(true)} id="icon-btn"><img src="./icons/essence.png" alt="essence" id="type-image"></img></Button>
                                                                    : product.type === 'exfoliator'
                                                                        ? <Button onClick={() => setExfolShow(true)} id="icon-btn"><img src="./icons/exfoliator.png" alt="exfoliator" id="type-image"></img></Button>
                                                                        : product.type === 'eye cream'
                                                                            ? <Button onClick={() => setEyeShow(true)} id="icon-btn"><img src="./icons/eyecream.png" alt="eyecream" id="type-image"></img></Button>
                                                                            : product.type === 'mask'
                                                                                ? <Button onClick={() => setMaskShow(true)} id="icon-btn"><img src="./icons/facemask.png" alt="facemask" id="type-image"></img></Button>
                                                                                : product.type === 'serum'
                                                                                    ? <Button onClick={() => setSerumShow(true)} id="icon-btn"><img src="./icons/serum.png" alt="serum" id="type-image"></img></Button>
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
                                    </tr>


                                )
                            })}
                        </Table>

                    </div>
                </Card>
                {/* Product Type info modals */}
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={moistureShow}
                    onHide={() => setMoistureShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="moisturizer">
                            moisturizer
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={cleanserShow}
                    onHide={() => setCleanserShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="cleanser">
                            cleanser
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={tonerShow}
                    onHide={() => setTonerShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="toner">
                            toner
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={serumShow}
                    onHide={() => setSerumShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="serum">
                            serum
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={essenceShow}
                    onHide={() => setEssenceShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="essence">
                            essence
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={spfShow}
                    onHide={() => setSpfShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="spf">
                            spf
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={maskShow}
                    onHide={() => setMaskShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="mask">
                            facemask
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={exfolShow}
                    onHide={() => setExfolShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="exfoliator">
                            exfoliator
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={eyeShow}
                    onHide={() => setEyeShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="eyecream">
                            eye cream
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
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