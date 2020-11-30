import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/products"

const productDisplay = (brand, name) => {
    return axios.get(API_URL, {
        brand,
        name
    },{ headers: authHeader() })
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
}

export default {
    productDisplay,
}