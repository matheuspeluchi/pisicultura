const Cidade = require( '../models/Cidade');
const express = require('express');

const router = express.Router();


router.get('/',(req,res)=>{
    Cidade.find()
        .then(data=> res.status(200).send(data))
        .catch(err => res.status(500).send(err));
})

router.get('/:id',(req,res) => {
    Cidade.findById(req.body.id)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(500).send(err))
})


module.exports = router;