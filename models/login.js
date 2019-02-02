const express = require('express');

    var db = require('../conf/database');
    var usuarios =  db.Mongoose.model('usuarios',db.usuarioSchema,'usuarios');



    usuarios.find({}).lean().exec({
        function(error,data){
            console.log('usuariosLista',{"usuariosLista" : data});
        });
    })


module.exports