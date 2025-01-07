import axios from "axios";  
const httpRequestLast = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_LAST
})

export const get = async (options = {} ) =>{
    const response = await httpRequestLast.get("",options);
    return response.data
}


export default httpRequestLast