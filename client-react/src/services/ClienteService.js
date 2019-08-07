
import api from './API'


export const ClienteService = {

    get(id){
        return api.get(`/cliente/${id}`)
    },

    list(){
        return api.get('/cliente')
                .then(res => res.data)
    },

    save(cliente){
        console.log(cliente)
        if(cliente._id){
            return  api.post(`/cliente/${cliente._id}`,cliente)      
        }else {
            return api.put('/cliente',cliente)
        }
     
            
                
    },

    delete(id){
        return api.delete('/cliente' + id)
        
    }
}