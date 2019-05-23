let express = require('express');
let router = express.Router();

let Pessoa = require('../models/Pessoa');


router.post('/:id',(req,res)=>{
    Pessoa.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err,doc)=>{
        if (err) return res.status(500).send(err);
        return res.status(200).send(doc);
    })
})


router.put('/', (req,res)=>{

    Pessoa.find({"login":req.body.login})
        .then((data)=>{
            if (data.length > 1){
                res.status = 400;
                res.send({"message":`Já existe um usuario registrado com o login ${req.body.login}`});
            }
        })
        .catch((err)=>{
            res.status = 500;
            res.send(err);
        })
    let pessoaNew = new Pessoa(req.body); // this is modal object.
    pessoaNew.save()
       .then((data)=> {
            res.status = 200;
            res.send(data);
        })
      .catch((err)=> {
            res.status = 400;
            res.send(err);
      })
});

router.get('/',(req,res)=> {
    Pessoa.find()
        .populate('tipoPessoa')
        .populate('grupo')
        .then((data)=>{
            res.status = 200;
            res.send(data);
        })
        .catch((err)=>{
            console.log(err)
            res.status = 500;
            res.send(err);
        })    
});

router.delete('/:id',(req,res)=>{
   
    Pessoa.findByIdAndDelete(req.params.id).then((err) => {
        if (err) {
            console.log(err)
            res.status = 500;
            res.send(err);
        } else {
            let response = {
                msg: "Pessoa removida com sucesso!",
                success: true
            }
            res.status = 200;
            res.send(response);
        }
        
    })
    
})
module.exports = router;
