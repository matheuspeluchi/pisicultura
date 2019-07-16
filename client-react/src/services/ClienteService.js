
const API = 'http://localhost:3001/cliente/';


export const ClienteService = {

    get(id){
        return fetch(API + id)
                .then(res => res.json())
    },

    list(){
        return fetch(API)
                .then(res => res.json())
    },

    post(id,data){
        return fetch(`${API}${id}`,{
            method:'POST',
            body: data
        })
                .then(res => res.json())
    },


    put(data){
        return fetch(API,{
            method:'PUT',
            body: data
        })
                .then(res => res.json())
    },

    delete(id){
        return fetch(API + id,{method:'DELETE'})
        .then(res => res.json())
    }
}