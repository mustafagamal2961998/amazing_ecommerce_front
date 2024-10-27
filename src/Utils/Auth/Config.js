import Cookies from 'js-cookie'
const token = Cookies.get('token');

export const CONFIG = { 
    headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
 }
};
