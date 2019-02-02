var express = require('express');
var router = express.Router();

var usuarios = require('../models/login')

router.post('/', function(req,res){
    console.log('Pagina de login')
    console.log(req.body)
})

router.get('/',function (req,res) {
    usuarios
})
