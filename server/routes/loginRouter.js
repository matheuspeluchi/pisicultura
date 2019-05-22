let express = require('express');
let router = express.Router();
let Pessoa = require('../models/Pessoa');


router.post('/', (req,res)=>{
    let login = req.body.login;
    let senha = req.body.password
    console.log(">>>>>>>>" + login)
    Pessoa.find ({"login": login, "password":senha}) 
        .then ((doc) => { 
            if (doc.length != 1){
                return res.status(500).send('Erro ao localizar usuario, multiplos registros encontrados.');
            }else{
                res.status = 200;
                res.send(doc);
            }            
        }) 
        .catch ((err) => { 
            res.status = 401;
            res.send(err);
        });
});

router.get('/',(req,res)=> {
    console.log(req.body);
    res.status = 200;
    res.send(req.body);
    
});

module.exports = router;
