const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')

const config = {
    useNewUrlParser: true
}
mongoose.connect('mongodb://localhost:27017/desenvolvimento',config,(err, client) => {
    if (err) return console.log(err);

    app.listen(3000,function(){
        console.log('Servidor inicado na porta 3000')
    })
});

//Logger

if (app.get('env') == 'production') {
    app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
} else {
    app.use(morgan('dev'));
}

app.use(bodyParser.json());

  
//Rotas_Inicio

let loginRouter = require('./routes/loginRouter');
let pessoaRouter = require('./routes/pessoaRouter');
let tiposRouter = require('./routes/tipoRouter');
app.use('/login', loginRouter);
app.use('/pessoa', pessoaRouter);
app.use('/tipos', tiposRouter);

//Rotas_Fim


  
app.get('/',function(req,res){
    return   res.render('index.ejs')

})

app.set('View Engine', 'ejs')


