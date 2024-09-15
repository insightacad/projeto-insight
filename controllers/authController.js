// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();
const bcrypt = require('bcryptjs'); // Importa a biblioteca bcryptjs para criptografia de senhas
const jwt = require('jsonwebtoken'); // Importa a biblioteca jsonwebtoken para manipulação de tokens JWT
const User = require('../models/User'); // Importa o modelo User para interagir com a tabela de usuários no banco de dados

// Função para cadastrar um novo usuário
exports.signup = async (req, res) => {
    const http_body = req.body; // Obtém os dados do corpo da requisição

    // Definindo o objeto dados com as informações do usuário
    const dados = {
        username: http_body.username,
        nickname: http_body.nickname,
        password: await bcrypt.hash(http_body.password,12), // Criptografa a senha do usuário
    };

    // console.log(dados)

    try {
        // Tenta criar um novo usuário no banco de dados com os dados fornecidos
        await User.create(dados);
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    } catch (error) {
        // console.error("Erro ao criar usuário:", error.message);
        // Se ocorrer um erro ao criar o usuário, retorna uma mensagem de erro
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    }
};

// Função para autenticar um usuário
exports.signin = async (req, res) => {
    try {
        // Busca o usuário no banco de dados pelo username fornecido
        const user = await User.findOne({
            attributes: ['id', 'username', 'password'],
            where: {
                username: req.body.username
            }
        });

        // Se o usuário não for encontrado, retorna uma mensagem de erro
        if (!user) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta!"
            });
        }

        // Compara a senha fornecida com a senha armazenada no banco de dados
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);

        // Se as senhas não coincidirem, retorna uma mensagem de erro
        if (!passwordMatch) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta!"
            });
        }

        // Gera um token JWT para o usuário autenticado
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h' // Tempo de expiração do token
        });

        // Define o token como um cookie no cliente
        res.cookie('jwt_token', token, {
            httpOnly: true, // Impede que o JavaScript no frontend acesse o cookie
            secure: false,  // Defina como 'true' se estiver usando HTTPS
            maxAge: 3600000 // Expiração do cookie em 1 hora (em milissegundos)
        });

        // Retorna uma mensagem de sucesso
        return res.status(200).json({
            erro: false,
            mensagem: "Login realizado com sucesso!"
        });
    } 
    catch (error) {
        // Se ocorrer um erro interno do servidor, retorna uma mensagem de erro
        return res.status(500).json({
            erro: true,
            mensagem: "Erro interno do servidor! " + error.message
        });
    }
};

