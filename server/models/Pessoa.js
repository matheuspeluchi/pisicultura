let mongoose =require('mongoose');
let tipos = require('./tipos');


let pessoaSchema = new mongoose.Schema({
    nome: {type: String, uppercase: true},
    endereco: {type: String, uppercase: true},
    bairro: {type: String, uppercase: true},
    enderecoNum: Number ,
    cep: {type: String, maxlength: 10},
    celular:{type: String,maxlength: 15},
    tipoPessoa:{type: mongoose.Types.ObjectId, ref:'Tipos'},
    password:{type: String, required: true,},
    login: {type: String, required: true},
    email: String,
    dataCadastro: Date,
    ultimaAtualizacao: {type: Date, default: new Date()
    }
});

module.exports = mongoose.model('Pessoa',pessoaSchema);