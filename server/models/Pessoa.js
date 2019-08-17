const mongoose = require('mongoose');

let pessoaSchema = new mongoose.Schema({
    nome: {type: String, uppercase: true},
    endereco: {type: String, uppercase: true},
    bairro: {type: String, uppercase: true},
    socialId:{type: String},
    enderecoNum: Number ,
    cep: {type: String, maxlength: 10},
    celular:{type: String,maxlength: 15},
    grupo:{type: mongoose.Schema.Types.ObjectId, ref:'Grupo'},
    password:{type: String, },
    email: {type: String, unique: true},
    dataCadastro: Date,
    ultimaAtualizacao: {type: Date, default: new Date()
    }
});

module.exports = mongoose.model('Pessoa',pessoaSchema);