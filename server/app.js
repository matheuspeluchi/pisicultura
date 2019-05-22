const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/desenvolvimento',(err, client) => {
    if (err) return console.log(err);

    app.listen(3000,function(){
        console.log('Servidor inicado na porta 3000')
    })
  });


//Rotas_Inicio

let login = require('./routes/login');

app.use('/login', login);

//Rotas_Fim





app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    return   res.render('index.ejs')

})

app.set('View Engine', 'ejs')


