import axios from "axios";

const GET_PRODUCTS_API = 'https://dummyjson.com/products/';

export const GET_PRODUCT = async (productId) => {
    try {
        const res = await axios.get(GET_PRODUCTS_API + productId);
        const data = res.data;
        return data;
    }catch(err) {
        console.log(err)
    }
}