import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://74c9-2603-8000-bd00-a3cc-6df4-a56a-c542-52c4.ngrok.io'
})



export default instance;