let mongoose =require('mongoose');

let pessoaSchema = new mongoose.Schema({
    nome: String,
    password: String,
    login: String,
    email:{
        type: String,
        unique: true
    }
});

module.exports = mongoose.model('Pessoa',pessoaSchema);