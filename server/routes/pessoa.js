let express = require('express');
let router = express.Router();

let Pessoa = require('../models/Pessoa');



router.use((req, res, next)=> {
    console.log('Time: ', Date.now());
    next();
  });

router.put('/', (req,res)=>{
    //console.log(req.body);
    
    let pessoa = new Pessoa(req.body); // this is modal object.
    
    pessoa.save()
      .then((data)=> {
        console.log(data);
        res.status = 200;
        res.send(data);
       })
      .catch((err)=> {
        console.log(err);
        res.status = 400;
        res.send(err);
      })
      
});

router.get('/',(req,res)=> {
    console.log(req.body);
    res.status = 200;
    res.send(req.body);
    
});

module.exports = router;
