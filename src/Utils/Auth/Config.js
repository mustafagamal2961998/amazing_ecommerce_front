import Cookies from 'js-cookie'
const token = Cookies.get('token');

export const CONFIG = { 
    headers: { 
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        // 'Content-Type': 'application/json',
    }
};
