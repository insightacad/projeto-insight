const jwt = require('jsonwebtoken'); // Importa a biblioteca jsonwebtoken para manipulação de tokens JWT

// Certifique-se de que o dotenv já foi carregado no arquivo principal
const secret = process.env.JWT_SECRET; // Obtém a chave secreta do JWT a partir das variáveis de ambiente

exports.eAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization; // Obtém o cabeçalho de autorização da requisição

    // Verifica se o cabeçalho de autorização foi fornecido
    if (!authHeader) {
        return res.status(401).json({
            erro: true,
            mensagem: "Token não fornecido!"
        });
    }

    // Divide o cabeçalho de autorização para obter o token
    const [, token] = authHeader.split(' ');

    try {
        // Verifica e decodifica o token usando a chave secreta
        const decoded = jwt.verify(token, secret);
        req.userId = decoded.id; // Armazena o ID do usuário decodificado na requisição
        return next(); // Chama o próximo middleware ou rota
    } catch (err) {
        // Se o token for inválido, retorna uma mensagem de erro
        return res.status(401).json({
            erro: true,
            mensagem: "Token inválido!"
        });
    }
};