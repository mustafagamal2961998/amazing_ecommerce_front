import axios from "axios";

export const handleAuth = async (e, form, url, setIsLoading) => {

    e.preventDefault();
    setIsLoading(true);
    try {
        url === 'signup' ? console.log(url, form) : console.log(url, {email: form.email, password: form.password})
        // const res = await axios.post(url, form);
        // const data = res.data;
        // return data;
    }catch(err) {
        console.log(err)
    }finally{
        setIsLoading(false);
    }
}