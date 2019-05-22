let mongoose =require('mongoose');

let pessoaSchema = new mongoose.Schema({
    nome: String,
    password: String,
    login: String,
    email: String
});

module.exports = mongoose.model('Pessoa',pessoaSchema);