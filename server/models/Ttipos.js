let mongoose = require('mongoose');

let tipoSchema = new mongoose.Schema({
    descricao: {type: String, uppercase:true, required:true},
    relationSchema:{type:String, uppercase:true, required:true}
})

module.exports = mongoose.model('Tipos',tipoSchema)