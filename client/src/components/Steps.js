import React, { Fragment, useState } from "react";
import "./style/steps.css";
import RoutineService from "../services/routine.service"
import { ListGroup } from "react-bootstrap"
import { useEffect } from "react";


const Steps = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])


    const getProducts = () => {
        RoutineService.routineDisplay().then((data) => {
            setProducts(data.data.products);
            console.log(data)
        }).catch((error) => {
            console.log(error);
        });
    };



    return (
        <Fragment>

            <div className="container">

                <div className="row">
                    <div className="col-4">These are your recommendations
                    <ListGroup>
                            {products && products.length > 0 ? products.map((product, index) => (
                                <ListGroup.Item key={index}>
                                    {product.brand},
                                    {product.name}
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
            </div>
        </Fragment>


    )
};

export default Steps;