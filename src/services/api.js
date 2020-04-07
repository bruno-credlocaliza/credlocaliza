import axios from "axios";
import { getToken, isTokenExpired, logout } from "./auth";

const api = axios.create({ baseURL: "http://localhost/jwt2.php", headers : {"Content-type": "application/x-www-form-urlencoded"} });

api.interceptors.request.use(async config => {

    const token = getToken();
    if (token) {

        if(isTokenExpired()){
            logout()
            window.location.href="/login"
        }

        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
    
});

api.interceptors.response.use( response => {
    return response;
}, error => {
    return Promise.reject(error.response);
})

export default api;
