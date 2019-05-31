const mongoose = require('mongoose');

const empresSchema = new mongoose.Schema({
    rsocial: {type: String, required: true, alias:'razaoSocial',minlength:2},
    cnpj:{type: String, required: true, maxlength:14},
    ie: Number,
    endereco: {type: String, required:true, maxlength:255},
    enderecoNum: Number,
    cidade:{type: Types.ObjectId, ref:'Cidade'},
});

module.exports = mongoose.model('Empresa',clienteSchema);