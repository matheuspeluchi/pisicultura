export interface Empresa {
    _id: {type: string, alias:'id'},
    razaoSocial: string,
    fantasia: string,
    cnpj: string,
    ie: string,
    endereco: string,
    enderecoNum: number,
    cidade: {
        id: string,
        codigo: number,
        nome: string
    }

}
