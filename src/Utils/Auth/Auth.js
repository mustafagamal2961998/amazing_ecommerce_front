import axios from "axios";
import { LOGIN, REGISTER } from "../APIs";
import { handleShowAlert } from '../Alerts/handleShowAlert'
import Cookies from 'js-cookie';

export const handleAuth = async (e, form, url, setIsLoading, setIsLoggedIn) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        if(url === 'signup') {
            const res = await axios.post(REGISTER, form);
            if(res.data.statusCode === 200){
                setTimeout(() => {
                    location.pathname = '/auth/login';
                }, 2000)
            }else if (res.data.statusCode === 422) {
                handleShowAlert(res.data.statusCode, res.data.message)
            }
            handleShowAlert(res.data.statusCode, res.data.message)
        }else if(url === 'login') {
            const res = await axios.post(LOGIN, form);
            if(res.data.statusCode === 200){
                Cookies.set('token', res.data.data.access_token);
                setIsLoggedIn(true);
                location.pathname = '/';
            }else if (res.data.statusCode === 422) {
                handleShowAlert(res.data.statusCode, res.data.message)
            }
        }
    } catch(error) {
        handleShowAlert(error.response.status, error.response.data.message)
    } finally{
        setIsLoading(false);
    }
}