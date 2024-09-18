const jwt = require('jsonwebtoken'); // Importa a biblioteca jsonwebtoken para manipulação de tokens JWT

// Certifique-se de que o dotenv já foi carregado no arquivo principal
const secret = process.env.JWT_SECRET; // Obtém a chave secreta do JWT a partir das variáveis de ambiente

exports.eAdmin = (req, res, next) => {
    // Obtém o token JWT do cookie chamado 'jwt_token'
    const token = req.cookies.jwt_token;

    // Verifica se o token foi fornecido
    if (!token) {
        // Redireciona para a rota de login se o token não for fornecido
        return res.redirect('/signin');
    }

    try {
        // Verifica e decodifica o token usando a chave secreta
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.id; // Armazena o ID do usuário decodificado na requisição
        return next(); // Chama o próximo middleware ou rota
    } catch (err) {
        // Redireciona para a rota de login se o token não for invalido
        return res.redirect('/signin');
    }
};
