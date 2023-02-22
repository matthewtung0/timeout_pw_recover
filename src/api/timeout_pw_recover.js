import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://time-out-app.xyz:443/'
})



export default instance;