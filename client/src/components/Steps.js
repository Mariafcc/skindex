import React, { Fragment, useState, useEffect } from "react";
import "./style/steps.css";
import axios from "axios";

const Steps = () => {
    const [products, setProducts] = useState({ hits: [] });

    useEffect(async () => {
        const fetchData = async () => {
            const result = await axios("http://localhost:8080/api/products",
            );
            setProducts(result.products)
        };
        fetchData();
    }, []);

    return (
        <Fragment>
            
            <div class="container">

                <div class="row">
                    <div class="col-4">These are your recommendations
                <ul class="list-group">
                            {products.hits.map(item => (
                                <li key={item.name}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
                            ))}


                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>


    )
};

export default Steps;