let express = require('express');
let router = express.Router();

let Grupo = require('../models/Grupo');


router.get('/',(req,res)=>{
    Grupo.find()
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(500).send(err))
});

router.get('/:id',(req,res)=>{
    Grupo.findById(req.params.id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).send(err))
});

router.put('/',(req,res)=>{

    Grupo.find({"nome":req.body.nome.toUpperCase()})
        .then((data)=>{
            if (data.length>1){
                return res.status(400)
                    .send({
                        msg:"Já existe um grupo com esse nome."
                    })
            }
        })
    
    let grupo = new Grupo(req.body);d

    grupo.save()
        .then(data=>res.status(200).send(data._id))
        .catch(err=>res.send(500).send(err))
})

router.post('/:id', (req,res)=>{
    Grupo.findOne({"nome":req.body.nome})
    .then((data)=>{
        console.log(data);
        if (data.length>1) return res.status(403).send({msg:"Registro duplicado"});
    }).catch(err=>res.status(500).send(err));


    Grupo.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(500).send(err))
})

router.delete('/:id',(req,res)=>{
    Grupo.findOneAndDelete({_id:req.params.id})
        .then(data=>res.status(200).send(data))
        .catch(err=>res.status(500).send(err))
})

module.exports = router;