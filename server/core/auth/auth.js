const jwt = require("jsonwebtoken");

function validarJWT(req, res, next){
    let token = req.headers['Authorization'];
    if (!token) return res.status(401).send({ auth: false, message: 'Token inválido ou expirado!' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Falha na validação do token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}

function gerarToken(payload) {
    return jwt.sign(payload, process.env.SECRET, {
        expiresIn: process.env.TIME // Expira em 5min
      });
}


module.exports = {validarJWT: validarJWT, gerarJWT: gerarToken}