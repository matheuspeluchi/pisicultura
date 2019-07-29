import axios from 'axios'

const api = axios.create({
    baseURL: 'http://200.129.226.147:3001'
})


api.interceptors.request.use(async config => {
    const token = sessionStorage.getItem('Authorization');
    if (token){
        config.headers = {
          'Authorization': token,
          
        }
    }

    return config;
})



export default api