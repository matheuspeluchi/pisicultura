const express = require ('express');
const router = express.Router();


const loginRouter = require ('./loginRouter');
const pessoaRouter = require ('./pessoaRouter');
const tiposRouter = require ('./tipoRouter');
const gruposRouter = require ('./gruposRouter');
const cidadeRouter = require ('./cidadeRouter');
const empresaRouter = require ('./empresaRouter');

router.use('/login', loginRouter);
router.use('/pessoa', pessoaRouter);
router.use('/tipos', tiposRouter);
router.use('/grupos', gruposRouter);
router.use('/cidade', cidadeRouter);
router.use('/cliente', empresaRouter);

module.exports = router;