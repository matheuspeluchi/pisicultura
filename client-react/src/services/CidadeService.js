import axios from 'axios'
const API = 'http://localhost:3001/cidade';


export const CidadeService = {

    get(){
        return axios.get(API)
    }
}