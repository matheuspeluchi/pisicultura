const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
    
    rsocial: {type: String, required: true, alias:'razaoSocial',minlength:2},
    fantasia: String,
    cnpj:{type: String, required: true, maxlength:14},
    ie: Number,
    endereco: {type: String, required:true, maxlength:255},
    enderecoNum: Number,
    bairro: String,
    cidade:{type: mongoose.SchemaTypes.ObjectId, ref:'Cidade'},
    telefone: String
});

module.exports = mongoose.model('Empresa',empresaSchema);