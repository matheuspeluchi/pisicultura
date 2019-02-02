const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mrp');


var usuarioSchema = new mongoose.Schema({
        usuario: String,
        senha: String,
        email: String
    }, { collection: 'usuarios' }
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }