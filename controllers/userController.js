const bcrypt = require("bcryptjs"); // Importa a biblioteca bcryptjs para criptografia de senhas
const User = require('../models/User'); // Importa o modelo User para interagir com a tabela de usuários no banco de dados
const Course = require('../models/Courses'); // Importa o modelo Course para interagir com a tabela de cursos no banco de dados

// Função para exibir o dashboard com a lista de usuários
exports.dashboard = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "username", "password"],
      order: [["id", "DESC"]]
    });
    return res.json({
      erro: false,
      id_user: req.userId,
    });
  } catch (error) {
    return res.status(404).json({
      erro: true,
      mensagem: "Erro: Nenhum usuário encontrado.",
    });
  }
};

// Função para obter a lista de cursos
exports.getCourses = async (req, res) => {
  try {
    // Buscar todos os cursos do banco de dados
    const courses = await Course.findAll({
      attributes: ["id", "name", "description"], // Inclua os atributos definidos no modelo
      order: [["id", "DESC"]] // Ordenar por ID, do mais recente para o mais antigo
    });

    return res.json({
      erro: false,
      courses
    });
  } catch (error) {
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao buscar cursos.",
    });
  }
};

exports.UserInfo = async (req, res) => {
  const params = req.params;

  try {
    const user = await User.findOne({
      attributes: ['id', 'username', 'nickname', 'description', 'creation_date'],
      where: {
        username: params.username
      }
    });

    if (user) {
      res.status(200).json({
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        description: user.description,
        creation_date: user.creation_date,
      });
    } else {
      res.status(400).json({
        message: "ERROR: Client Error",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "ERROR: Server Error",
    });
  }
};

// Função para atualizar o perfil do usuário
exports.updateProfile = async (req, res) => {
  const http_body = req.body;

  try {
    const user = await User.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({
        erro: true,
        mensagem: "Usuário não encontrado.",
      });
    }

    if (http_body.new_username != null) {
      user.username = http_body.new_username;
    }

    if (http_body.new_nickname != null) {
      user.nickname = http_body.new_nickname;
    }

    if (http_body.new_description != null) {
      user.description = http_body.new_description;
    }

    if (http_body.password != null) {
      user.password = await bcrypt.hash(http_body.password, 12);
    }

    await user.save();

    return res.json({
      erro: false,
      mensagem: "Perfil atualizado com sucesso.",
    });
  } catch (error) {
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao atualizar perfil.",
    });
  }
};