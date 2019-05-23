let mongoose = require('mongoose');

let grupoSchema = new mongoose.Schema({
    nome:{type:String,required:true},
    descricao: {type:String,uppercase:true,required:true}
});

module.exports = mongoose.model('Grupo',grupoSchema);