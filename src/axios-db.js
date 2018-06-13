import axios from 'axios';

const instance = axios.create ({
    baseURL: 'https://imagelibrary-47a2f.firebaseio.com/'
});
    
export default instance;