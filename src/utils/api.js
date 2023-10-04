import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN

const headers = {
    Authorization: "bearer "+TMDB_TOKEN
}

export const FetchAPI = async (url, params) => {
    try {
        const {data} = await axios.get(API_BASE_URL + url, {
            headers,
            params
        })
        return data
    } catch (error) {
        console.log(error)
        return error
    }   
}