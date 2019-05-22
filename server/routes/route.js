let express = require('express');
let router = express.Router();
let loginRouter = require('./routes/login');
let pessoaRouter = require('./routes/pessoa');
let tiposRouter = require('./')

app.use('/login', loginRouter);
app.use('/pessoa',pessoaRouter);
