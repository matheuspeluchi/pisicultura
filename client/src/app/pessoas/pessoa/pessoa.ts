export interface Pessoa {
  _id: String
  nome: string;
  endereco: string;
  bairro: string;
  enderecoNum: number;
  cep: string;
  celular: string;
  grupo:{
    id: string;
    nome: string;
    descricao: string;
  };
  password: string;
  login: string;
  email: string;
  dataCadastro: Date;
  ultimaAtualizacao: Date;
}
