import React, { Fragment, useState } from "react";
import "./style/steps.css";
import RoutineService from "../services/routine.service"
import { ListGroup } from "react-bootstrap"
import { useEffect } from "react";
import axios from "axios"


const Steps = () => {
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
        }).catch((error) => {
            console.log(error);
        });
    };

    

    // const routine = () => {
    //     GettingRoutine.productDisplay()
    //     .then((response) => {
    //         setProducts(response)
    //         console.log(response)
    //     })


    // }



    return (
        <Fragment>

            <div class="container">

                <div class="row">
                    <div class="col-4">These are your recommendations
                    <ListGroup>
                            {products && products.length > 0 ? products.map((product, index) => (
                                <ListGroup.Item key={index}>
                                    {product.brand},
                                    {product.name}
                                </ListGroup.Item>
                            )) : ''}
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