const bcrypt = require('bcryptjs'); // Importa a biblioteca bcryptjs para criptografia de senhas
const jwt = require('jsonwebtoken'); // Importa a biblioteca jsonwebtoken para manipulação de tokens JWT
const User = require('../models/User'); // Importa o modelo User para interagir com a tabela de usuários no banco de dados

// Função para verificar a senha do usuário
exports.passwordverify = async (userid, passw) => {
    // Criptografa a senha fornecida pelo usuário
    passwhash = await bcrypt.hash(passw, 12);

    // Busca o usuário no banco de dados pelo id, selecionando apenas os atributos id, username e password
    const user = await User.findOne({
        attributes: ['id', 'username', 'password'],
        where: {
            id: userid
        }
    });

    // Compara a senha criptografada fornecida com a senha armazenada no banco de dados
    if (passwhash == user.password) {
        // Se as senhas coincidirem, retorna true
        return true;
    } else {
        // Se as senhas não coincidirem, retorna false
        return false;
    }
}