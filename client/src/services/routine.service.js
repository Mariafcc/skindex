import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/products"

const productDisplay = () => {
    return axios.get(API_URL, { headers: authHeader() });
}

const routineDisplay = () => {
    return axios.get(`${API_URL}/myroutine`, { headers: authHeader() });
}


export default {
    productDisplay,
    routineDisplay,
    
}