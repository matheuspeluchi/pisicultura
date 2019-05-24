export interface Pessoa {
  nome: string;
  endereco: string;
  bairro: string;
  enderecoNum: number;
  cep: string;
  celular: string;
  tipoPessoa: {
    id: string,
    descricao: string,
    relationSchema: string
  };
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
