const mongoose = require('mongoose');

const cidadeSchema = new mongoose.Schema({
    codigo: Number,
    nome: String
})

module.exports = mongoose.model('Cidade', cidadeSchema);