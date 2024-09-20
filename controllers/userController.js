const bcrypt = require("bcryptjs"); // Importa a biblioteca bcryptjs para criptografia de senhas
<<<<<<< HEAD
const User = require("../models/User"); // Importa o modelo User para interagir com a tabela de usuários no banco de dados
const Course = require("../models/Courses"); // Importa o modelo Course para interagir com a tabela de cursos no banco de dados
const UserCourse = require("../models/User_Courses"); // Importa o modelo Course para interagir com a tabela de cursos no banco de dados
const jwt = require("jsonwebtoken"); // Importa a biblioteca jsonwebtoken para manipulação de tokens JWT
=======
const User = require('../models/User'); // Importa o modelo User para interagir com a tabela de usuários no banco de dados
const Course = require('../models/Courses'); // Importa o modelo Course para interagir com a tabela de cursos no banco de dados
const UserCourse = require('../models/User_Courses'); // Importa o modelo Course para interagir com a tabela de cursos no banco de dados
const jwt = require('jsonwebtoken'); // Importa a biblioteca jsonwebtoken para manipulação de tokens JWT
>>>>>>> c4007d31e32a42ebe702e8229be7072e6e30a989
const secret = process.env.JWT_SECRET; // Obtém a chave secreta do JWT a partir das variáveis de ambiente

// Função para exibir o dashboard com a lista de usuários
exports.dashboard = async (req, res, next) => {
  try {
    // Recupera o usuário autenticado
    const user = await User.findByPk(req.userId, {
      attributes: ["id", "username", "nickname", "description"],
    });

    // Verifica se o usuário foi encontrado
    if (!user) {
      return res.status(404).json({
        erro: true,
        mensagem: "Usuário não encontrado.",
      });
    }

    // Busca os cursos do usuário
    const userCourses = await UserCourse.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: Course,
          as: "Course", // Certifique-se que o alias na associação está correto
          attributes: ["id", "name"], // Apenas id e name do curso
        },
      ],
    });

    // Cria um objeto com as informações do usuário
    const userInfo = {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      description: user.description,
    };

    // Mapeia os resultados dos cursos para serem retornados
    const courses = userCourses.map((userCourse) => ({
      course_id: userCourse.Course.id, // ID do curso
      course_name: userCourse.Course.name, // Nome do curso
    }));

    // Retorna os dados: informações do usuário fora do array de cursos
    return res.status(200).json({
      user: userInfo,
      courses: courses, // Array de cursos
    });
  } catch (error) {
    // Captura erros e responde com mensagem de erro
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao recuperar os dados do usuário.",
    });
  }
};

<<<<<<< HEAD


exports.enrollUser = async (req, res) => {
  try {
    const { course_id } = req.body;
    const user_id = req.userId; // Supondo que você tenha o ID do usuário armazenado na requisição

    // Verifica se o curso existe
    const courseExists = await Course.findByPk(course_id);
    if (!courseExists) {
      return res.status(404).json({ message: "Curso não encontrado." });
    }

    // Inscreve o usuário no curso
    const enrollment = await UserCourse.create({ user_id, course_id });

    return res
      .status(201)
      .json({ message: "Inscrição realizada com sucesso!", enrollment });
  } catch (error) {
    console.error("Erro ao inscrever-se:", error);
    return res.status(500).json({ message: "Erro ao inscrever-se" });
  }
=======
exports.enrollUser = async (req, res) => {
    try {
        const { course_id } = req.body;
        const user_id = req.userId; // Supondo que você tenha o ID do usuário armazenado na requisição

        // Verifica se o curso existe
        const courseExists = await Course.findByPk(course_id);
        if (!courseExists) {
            return res.status(404).json({ message: 'Curso não encontrado.' });
        }

        // Inscreve o usuário no curso
        const enrollment = await UserCourse.create({ user_id, course_id });

        return res.status(201).json({ message: 'Inscrição realizada com sucesso!', enrollment });
    } catch (error) {
        console.error('Erro ao inscrever-se:', error);
        return res.status(500).json({ message: 'Erro ao inscrever-se' });
    }
>>>>>>> c4007d31e32a42ebe702e8229be7072e6e30a989
};

// Função para obter a lista de cursos
exports.getCourses = async (req, res) => {
  try {
    // Buscar todos os cursos do banco de dados
    const courses = await Course.findAll({
<<<<<<< HEAD
      attributes: ["id", "name", "description", "link"], // Inclua os atributos definidos no modelo
      order: [["id", "DESC"]], // Ordenar por ID, do mais recente para o mais antigo
=======
      attributes: ["id", "name", "description","link"], // Inclua os atributos definidos no modelo
      order: [["id", "DESC"]] // Ordenar por ID, do mais recente para o mais antigo
>>>>>>> c4007d31e32a42ebe702e8229be7072e6e30a989
    });

    return res.json({
      erro: false,
      courses,
    });
  } catch (error) {
    return res.status(500).json({
      erro: true,
      mensagem: "Erro ao buscar cursos.",
    });
  }
};
exports.getUserCourses = async (req, res) => {
<<<<<<< HEAD
  try {
    const userCourses = await UserCourse.findAll({
      where: { user_id: req.userId },
      include: [
        {
          model: Course,
          as: "Course", // Certifique-se de usar o alias definido na associação
          attributes: ["name", "description", "link"],
        },
      ],
    });

    if (userCourses.length === 0) {
      return res
        .status(404)
        .json({ message: "Nenhum curso encontrado para este usuário." });
    }

    // Corrigido: Alterado 'userCourses' para 'userCourse' no map
    const result = userCourses.map((userCourse) => ({
      user_id: userCourse.user_id,
      course_id: userCourse.course_id,
      course_name: userCourse.Course.name,
      description: userCourse.Course.description,
      link: userCourse.Course.link, // Inclui link
    }));

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erro ao buscar os cursos do usuário." });
  }
=======
    try {
        const userCourses = await UserCourse.findAll({
            where: { user_id: req.userId },
            include: [{
                model: Course,
		as: 'Course', // Certifique-se de usar o alias definido na associação
                attributes: ['name','description','link']
            }]
        });

        if (userCourses.length === 0) {
            return res.status(404).json({ message: 'Nenhum curso encontrado para este usuário.' });
        }

        // Corrigido: Alterado 'userCourses' para 'userCourse' no map
        const result = userCourses.map(userCourse => ({
            user_id: userCourse.user_id,
            course_id: userCourse.course_id,
            course_name: userCourse.Course.name,
	    description: userCourse.Course.description,
	    link: userCourse.Course.link // Inclui link
        }));

        return res.status(200).json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao buscar os cursos do usuário.' });
    }
>>>>>>> c4007d31e32a42ebe702e8229be7072e6e30a989
};

exports.UserInfo = async (req, res) => {
  const params = req.params;

  try {
    const user = await User.findOne({
      attributes: [
        "id",
        "username",
        "nickname",
        "description",
        "creation_date",
      ],
      where: {
        username: params.username,
      },
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
