let express = require('express');
let router = express.Router();
let Pessoa = require('../models/Pessoa');
let jwt = require('../core/auth/auth');



router.post('/', (req,res)=>{
    console.log(req.body);
    let login = req.body.login;
    let senha = req.body.senha
    Pessoa.find ({"login": login, "password":senha}) 
        .then ((data) => { 
            if (data.length != 1){
                res.status(401).send('Erro ao localizar usuario com as credenciais informadas!');
            }else{
                data = data[0];
                let payload = {
                    id: data._id,
                    nome: data.nome,
                   // empresa: data.empresaId
                }
                
                let token = jwt.gerarJWT(payload);
                res.status = 200;
                res.setHeader('Authorization',token).send(data);
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
