import axios from "axios";
const token = sessionStorage.getItem("loginToken")
console.log(token);

const BASE_URL = "http://localhost:5000";

const serviceInstance = axios.create({
    baseURL:BASE_URL,
    headers:{
        Authorization :`Bearer ${token}`,
        'Content-Type':'application/json'
    }
})
export const travelApi = serviceInstance;