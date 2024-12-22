import axios from 'axios';

// Axios instance oluştur
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // API'nin ana URL'i
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Token'ı localStorage'dan al
        const token = localStorage.getItem('authToken');
        // console.log('token:', token);
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
