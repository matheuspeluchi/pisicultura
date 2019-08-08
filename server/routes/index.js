const express = require ('express');
const router = express.Router();


const loginRouter = require ('./loginRouter');
const pessoaRouter = require ('./pessoaRouter');
const tiposRouter = require ('./tipoRouter');
const gruposRouter = require ('./gruposRouter');
const cidadeRouter = require ('./cidadeRouter');
const clienteSistemaRouter = require ('./clienteSistemaRouter');

router.use('/login', loginRouter);
router.use('/pessoa', pessoaRouter);
router.use('/tipos', tiposRouter);
router.use('/grupos', gruposRouter);
router.use('/cidade', cidadeRouter);
router.use('/clientesistema', clienteSistemaRouter);

module.exports = router;