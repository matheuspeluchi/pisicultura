const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//Rotas_Inicio

var login = require('../routes/login');

app.use('/login', login;)

//Rotas_Fim




app.listen(3000,function(){
    console.log('Servidor inicado na porta 3000')
})

app.use(bodyParser.urlencoded({extended:true}))

app.get('/',function(req,res){
    return   res.render('index.ejs')

})

app.set('View Engine', 'ejs')


