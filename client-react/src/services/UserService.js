
import api from './API'
import axios from 'axios'


export const UserService = {

    login(data){
      return  api.post('/login',data)
                .then(res => {
                    console.log(res)
                    sessionStorage.setItem('Authorization',res.data.token)
                    window.location= '/'
                })
                .catch(err => console.log)
    },


    logout(){
        sessionStorage.removeItem('Authorization')
        window.location = '/login'
    },


    isAuthenticated(){
        return (sessionStorage.getItem('Authorization') !== null)
    }

    
}
