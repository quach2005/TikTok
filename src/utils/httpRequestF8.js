import axios from "axios";
const httpRequestF8 = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL_FUllSTACK
})

export const get = async (path, options = {}) => {
    try {
        const response = await httpRequestF8.get(path, options)
        return response.data
    } catch (error) {
        console.log(error.message)
    }
}

export default httpRequestF8

