import axios from 'axios';
import app from '../../estilos/index';

const api = axios.create({
    baseURL: app.parametros.baseUrl,
    timeout: 60 * 0.5 * 1000,
});

export default api;