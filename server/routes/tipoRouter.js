let express = require('express');
let router = express.Router();
let Tipo = require('../models/tipos');

router.put('/',(req,res)=>{
    let tipo = new Tipo(req.body);
    tipo.save((err,doc)=>{
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    });
});

router.get('/',(req,res)=>{
    Tipo.find()
        .then(data=> res.status(200).send(data))
        .catch(err=>res.status(500).send(err))
})


module.exports = router;