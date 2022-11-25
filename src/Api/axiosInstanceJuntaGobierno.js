import axios from "axios";
import { baseUrlJuntaGobierno } from "./apiRoutes";

export default axios.create({
    baseURL:baseUrlJuntaGobierno, 
    
})