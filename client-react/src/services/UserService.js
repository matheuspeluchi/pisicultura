
import api from './API'
import axios from 'axios'


export const UserService = {

    login(data){
      return  api.post('/login',data)
                .then(res => {
                    sessionStorage.setItem('Authorization',res.headers.authorization)
                    window.location= '/'
                })
                .catch(err => err)
    },


    logout(){
        sessionStorage.removeItem('Authorization')
        window.location = '/login'
    },


    isAuthenticated(){
        return (sessionStorage.getItem('Authorization') !== null)
    }

    
}
