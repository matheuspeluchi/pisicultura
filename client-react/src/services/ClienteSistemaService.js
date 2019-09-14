
import api from './API'


export const ClienteService = {

    get(id){
        return api.get(`/clientesistema/${id}`)
    },

    list(){
        return api.get('/clientesistema')
                .then(res => res.data)
                .catch(err => err.data)
    },

    save(cliente){
        console.log(cliente)
        if(cliente._id){
            return  api.post(`/clientesistema/${cliente._id}`,cliente)      
        }else {
            return api.put('/clientesistema',cliente)
        }               
    },

    delete(id){
        return api.delete('/clientesistema' + id)
        
    }
}