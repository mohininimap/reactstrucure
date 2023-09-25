import axios from 'axios';

export const publicRequest = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL
})