const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');
const corsOptions = {
    exposedHeaders: ['x-access-token']
};
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
app.use(cors(corsOptions));

  
//Rotas_Inicio

let loginRouter = require('./routes/loginRouter');
let pessoaRouter = require('./routes/pessoaRouter');
let tiposRouter = require('./routes/tipoRouter');
let gruposRouter = require ('./routes/gruposRouter');
app.use('/login', loginRouter);
app.use('/pessoa', pessoaRouter);
app.use('/tipos', tiposRouter);
app.use('/grupos', gruposRouter);

//Rotas_Fim


  
app.get('/',function(req,res){
    return   res.render('index.ejs')

})

app.set('View Engine', 'ejs')


