let express = require('express');
let router = express.Router();

let Pessoa = require('../models/login');



router.use((req, res, next)=> {
    console.log('Time: ', Date.now());
    next();
  });

router.post('/', (req,res)=>{
    let login = req.body.login;
    let senha = req.body.password
    Pessoa.find ({name: login, password:senha}) 
        .then ((doc) => { 
            console.log (doc); 
            res.status = 200;
            res.send(body);
        }) 
        .catch ((err) => { 
            console.log (err); 
        });
});

router.get('/',(req,res)=> {
    console.log(req.body);
    res.status = 200;
    res.send(req.body);
    
});

module.exports = router;
