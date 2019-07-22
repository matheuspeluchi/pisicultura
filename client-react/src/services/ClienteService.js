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

    save(id,cliente){
        if(id){
            return  axios.post(`${API}${id}`,cliente)      
        }else {
            return axios.put(API,cliente)
        }
     
            
                
    },

    delete(id){
        return axios.delete(API + id)
        
    }
}