'use client'
import axios from "axios"
import { CONFIG } from "./Config"
import { GET_USER_INFO } from "../APIs"

export const GetUserInfo = async () => {
    try {
        const res = await axios.get(GET_USER_INFO, CONFIG);
        const data = res.data.data;
        return data;
    }catch (error) {
        console.log(error)
    }
}
