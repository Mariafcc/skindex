import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/api/result";

const saveQuestion = (id, question, answer) => {
    return axios.post(API_URL, {
        id, 
        question, 
        answer
    },{ headers: authHeader() })
    .then((response) => {

    })
    .catch((err) => {
        console.log(err);
    });
};

export default {
    saveQuestion,
};