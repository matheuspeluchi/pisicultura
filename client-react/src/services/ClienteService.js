import axios from 'axios'
import api from './API'


export const ClienteService = {

    get(id){
        return api.get(`/cliente/${id}`)
    },

    list(){
        return api.get('/cliente')
                .then(res => res.data)
    },

    save(id,cliente){
        if(id){
            return  api.post(`/cliente/${id}`,cliente)      
        }else {
            return api.put('/cliente',cliente)
        }
     
            
                
    },

    delete(id){
        return api.delete('/cliente' + id)
        
    }
}