import axios from "axios";
import { baseUrl } from "./apiRoutes";

export default axios.create({
    baseURL:baseUrl, 
    headers: {'Content-Type': 'application/json'},
})