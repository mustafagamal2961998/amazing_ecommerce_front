import axios from "axios"

export const GET_DATA = async (url) => {
    try {
        const res = await axios.get(url);
        return res.data.data;
    }catch(error){
        console.log(error)
    }
}