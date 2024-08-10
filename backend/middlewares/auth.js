const jwt = require('jsonwebtoken');

// Certifique-se de que o dotenv já foi carregado no arquivo principal
const secret = process.env.JWT_SECRET;

exports.eAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            erro: true,
            mensagem: "Token não fornecido!"
        });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.id;
        return next();
    } catch (err) {
        return res.status(401).json({
            erro: true,
            mensagem: "Token inválido!"
        });
    }
};
