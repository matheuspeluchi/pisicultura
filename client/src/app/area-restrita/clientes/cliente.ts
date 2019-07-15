export class Cliente {

    constructor(
        public _id: {type: string, alias: 'id'} = null,
        public rsocial: string = null,
        public fantasia: string = null,
        public cnpj: string = null,
        public ie: string = null,
        public endereco: string = null,
        public enderecoNum: number = null,
        public cidade: { _id: {type: string, alias: 'id'},codigo: number, nome: string } = null
    ){}
}
