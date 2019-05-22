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

app.use(bodyParser.json())

//Rotas_Inicio

let loginRouter = require('./routes/login');
let pessoaRouter = require('./routes/pessoa');
app.use('/login', loginRouter);
app.use('/pessoa',pessoaRouter);

//Rotas_Fim







app.get('/',function(req,res){
    return   res.render('index.ejs')

})

app.set('View Engine', 'ejs')


