require("dotenv-safe").load();

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const config = {
    useNewUrlParser: true,
    useCreateIndex: true,
}
const cors = require('cors')

//Conexão com o banco de dados;

//mongoose.connect('mongodb://localhost:27017/desenvolvimento',config,(err, client) => {
mongoose.connect('mongodb+srv://matheusrocha:p7DK0izfTK0B5HgD@desenvolvmento-sh39i.mongodb.net/desenvolvimento?retryWrites=true&w=majority',config,(err, client) => {
    let port = '3001'
    if (err) return console.log(err);
    
    app.listen(port,function(){
        console.log('Servidor inicado na porta ' + port)
    })
});
app.use(cors())
/*

//Define Cabeçalhos de resposta e configuração do CORS;
app.use((req, res, next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    //res.header("Access-Control-Expose-Headers","Authorization, Content-Type, Accept, Origin");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header("Allow","GET, POST, PUT, DELETE, OPTIONS")
    next();
  });
*/
//Logger

if (app.get('env') == 'production') {
    app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
    } else {
        app.use(morgan('dev'));
}


// Acessar body das requisições.
app.use(bodyParser.json());



  
//Rotas 

app.use('/', require('./routes'))


  
app.get('/',function(req,res){
    return   res.render('index.ejs')

})

app.set('View Engine', 'ejs')


