import axios from "axios"
import { CONFIG } from "../Auth/Config";

export const GET_DATA = async (url) => {
    try {
        const res = await axios.get(url, CONFIG);
        return res.data.data;
    }catch(error){
        console.log(error)
    }
}