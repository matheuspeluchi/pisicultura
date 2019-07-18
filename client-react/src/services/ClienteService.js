import axios from 'axios'
const API = 'http://localhost:3001/cliente/';


export const ClienteService = {

    get(id){
        return axios.get(`${API}${id}`)
    },

    list(){
        return fetch(API)
                .then(res => res.json())
    },

    post(id,cliente){
        return axios.post(`${API}${id}`,cliente)
                
    },


    put(data){
        return axios.put(API,data)
    },

    delete(id){
        return axios.delete(API + id)
        
    }
}