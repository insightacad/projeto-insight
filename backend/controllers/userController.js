const bcrypt = require("bcryptjs"); // Importa a biblioteca bcryptjs para criptografia de senhas
const User = require("../models/User"); // Importa o modelo User para interagir com a tabela de usuários no banco de dados

// Função para exibir o dashboard com a lista de usuários
exports.dashboard = async (req, res) => {
  // Busca todos os usuários no banco de dados, selecionando apenas os atributos id, username e password, e ordena pelo id em ordem decrescente
  await User.findAll({
    attributes: ["id", "username", "password"],
    order: [["id", "DESC"]],
  })
    .then((users) => {
      // Se a busca for bem-sucedida, retorna um JSON com a lista de usuários e o id do usuário que fez a requisição
      return res.json({
        erro: true,
        users,
        id_user: req.userId,
      });
    })
    .catch(() => {
      // Se ocorrer um erro na busca, retorna um JSON com uma mensagem de erro
      return res.status(404).json({
        erro: true,
        mensagem: "Erro: Nenhum usuário encontrado.",
      });
    });
};

// Função para atualizar o perfil do usuário
exports.updateProfile = async (req, res) => {
  // Declaração de variáveis utilizadas localmente
  const http_body = req.body;

  // Verifica se um novo nome de usuário foi fornecido
  if (http_body.new_username != null) {
    // Lógica para atualizar o nome de usuário
  }

  // Verifica se um novo apelido foi fornecido
  if (http_body.new_nickname != null) {
    // Lógica para atualizar o apelido
  }

  // Verifica se uma nova descrição foi fornecida
  if (http_body.new_description != null) {
    // Lógica para atualizar a descrição
  }

  // Verifica se uma nova senha foi fornecida
  if (http_body.password != null) {
    // Lógica para atualizar a senha
  }
};