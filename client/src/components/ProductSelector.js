import React, { Fragment, useState, useEffect } from "react";
import "./style/productSelector.css"
import RoutineService from "../services/routine.service"
import Map from "./Map"
import { Button, Modal, Table, Container, Card } from "react-bootstrap";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const ProductSelector = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = () => {
        RoutineService.routineDisplay().then((res) => {
            const reccs = Object.values(res.data.products)
            reccs.sort((a, b) => { return a.order - b.order })
            setProducts([...reccs]);
        
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




    return (

        <Fragment>

            <Container>
                <Card className="mx-auto mb-4 p-2 pt-4 pr-5 pl-5 mt-4" class="table-card" id="routine-card">
                    <Card.Title>
                        <img alt="header" src="./img/header.png"></img>
                    </Card.Title>
                    <h3>This is your Routine!</h3>
                    <br></br>
                    <p>Here is a list of products that have been generated for you based on your quiz answers. Enjoy!</p>
                    <p>Products are listed in the order you should use them. Click on an icon to learn more.</p>
                </Card>
                <Card className="mx-auto mb-12" class="table-card" id="routine-card" style={{
                    
                }}>
                    <div>
                        <Table size="sm" className="table-fit" >
                            <thead className="thead-dark" >

                                <th>Steps</th>
                                <th>Brand</th>
                                <th>Name</th>

                            </thead>
                            {[...products].map(product => {
                                return (

                                    <tr key={product.order}>
                                        <td id="table-col product-table">
                                            
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

                                        <td id="table-col align-baseline" id="product-table">
                                            {product.brand}
                                        </td>
                                        <td id="table-col" id="product-table">
                                            {product.name}
                                            <p>
                                                <a onClick={handleShow} id="fa-images"><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></a>
                                                <a href={product.link} target="_blank" id="fa-images"><FontAwesomeIcon icon={faShoppingBag} size="lg" /></a>
                                            </p>
                                            <Modal
                                                show={show} onHide={handleClose}
                                            >
                                                <Modal.Header className="d-block text-center" closeButton><h4>Stores Near You</h4></Modal.Header>
                                                <Modal.Body className="modal-body">
                                                    <Card className="">
                                                        <Map store={product.store} />
                                                    </Card>
                                                </Modal.Body>
                                                <Modal.Footer onClick={handleClose}>
                                                    <Button className="btn-secondary">
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
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="moisturizer">
                            Moisturizer
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Apply a dime sized amount to palm and evenly distribute across face.</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={cleanserShow}
                    onHide={() => setCleanserShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="cleanser">
                            Cleanser
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Lather cleanser on face and use morning and night for 30 seconds.</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={tonerShow}
                    onHide={() => setTonerShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="toner">
                            Toner
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Apply toner to a cotton round and directly to face to remove any remaining dirt and grime and shrink pore size. Rub in until evenly distributed.</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={serumShow}
                    onHide={() => setSerumShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="serum">
                            Serum
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Apply a dropper’s amount of serum to face and rub into face until absorbed.</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={essenceShow}
                    onHide={() => setEssenceShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="essence">
                            Essence
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>For additional hydration and improved efficiency of your other products, apply a nickel sized amount go essence to your palms and pat to face to apply. </Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={spfShow}
                    onHide={() => setSpfShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="spf">
                            SPF
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Apply a quarter sized amount of SPF to both your face and neck and blend thoroughly.</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={maskShow}
                    onHide={() => setMaskShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="mask">
                            Face Mask
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Apply a thin layer of the face mask onto palms and spread evenly across face, avoiding eyes. Use as often as directed on individual product.</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={exfolShow}
                    onHide={() => setExfolShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="exfoliator">
                            Exfoliator
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>On a damp clean face, use exfoliant to massage skin in circular motion, avoiding eyes. Rinse after 30 second massage.</Modal.Body>
                </Modal>
                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={eyeShow}
                    onHide={() => setEyeShow(false)}
                >
                    <Modal.Header closeButton className="d-block text-center">
                        <Modal.Title id="eyecream">
                            Eye Cream
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Use a dime sized amount of eye cream and dab across orbital bone. Tap cream until absorbed.</Modal.Body>
                </Modal>
            </Container>
        </Fragment >



    )
}

export default ProductSelector