const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    
    rsocial: {type: String, required: true, alias:'razaoSocial',minlength:2},
    fantasia: String,
    cnpj:{type: String, required: true, maxlength:14},
    ie: String,
    endereco: {type: String, required:true, maxlength:255},
    enderecoNum: Number,
    bairro: String,
    cidade: String,
    telefone: String,
    telefone1: String,
    celular: String,
    contato: String,
    email: String,
    bancoNome: String,
    bancoAgencia: String,
    bancoConta: String,
    bancoTitular: String,
    //tipo:{type: mongoose.Schema.Types.ObjectId, ref: 'Tipos'}

});

empresaSchema.virtual('id').get(function(){
    return this._id;
});

empresaSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Cliente-Sistema',empresaSchema);