import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://0bcc-76-88-125-70.ngrok.io'
})



export default instance;