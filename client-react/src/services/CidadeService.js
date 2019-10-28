import axios from 'axios'
const API = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'


export const CidadeService = {

    getAll(){
        return axios.get(API)
    },

    get(id){
        return axios.get(`${API}/${id}`)
    }
}