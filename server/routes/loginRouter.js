const express = require('express');
const Pessoa = require('../models/Pessoa');
const jwt = require('../core/auth/auth');
const router = express.Router();


router.post('/', (req,res)=>{
    let login = req.body.login;
    let senha = req.body.password
    Pessoa.find ({"email": login, "password":senha})
        .then ((data) => { 
            if (data.length != 1){
                res.status(401).send('Erro ao localizar usuario com as credenciais informadas!');
            }else{
                data = data[0];
                let payload = {
                    id: data._id,
                    nome: data.nome,
                    grupo: data.grupo.nome
                   // empresa: data.empresaId
                }
                
                let token = jwt.gerarJWT(payload);
                res.status = 200;
                res.setHeader('Authorization',token)
                res.json({auth: true,id:data._id});
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
