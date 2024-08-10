// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    const dados = req.body;
    dados.password = await bcrypt.hash(dados.password, 32);

    try {
        await User.create(dados);
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    } catch (error) {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
    }
};

exports.signin = async (req, res) => {
    try {
        const user = await User.findOne({
            attributes: ['id', 'username', 'password'],
            where: {
                username: req.body.username
            }
        });

        if (user === null) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta!"
            });
        }

        if (!(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: Usuário ou a senha incorreta!"
            });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '7d' // 7 dias
        });

        return res.json({
            erro: false,
            mensagem: "Login realizado com sucesso!",
            token
        });
    } catch (error) {
        return res.status(500).json({
            erro: true,
            mensagem: "Erro interno do servidor!"
        });
    }
};
