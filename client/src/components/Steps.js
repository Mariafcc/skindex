import React, { Fragment, useState, setState } from "react";
import "./style/steps.css";
import GettingRoutine from "../services/routine.service"
import { ListGroup } from "react-bootstrap"
import { useEffect } from "react";


const Steps = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        routine();
    })

    const routine = () => {
        GettingRoutine.productDisplay()
    }



    return (
        <Fragment>

            <div class="container">

                <div class="row">
                    <div class="col-4">These are your recommendations
                    <ListGroup>
                            {products.map(product => (
                                <ListGroup.Item key={product.name}>
                                    <strong>
                                        {product.name}
                                    </strong>
                                </ListGroup.Item>
                            ))}
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                        {/* <ul class="list-group">


                            {gettingProducts.map(data => (<li key={data.products.name} class="list-group-item"></li>))}
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </Fragment>


    )
};

export default Steps;