const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rotas da API de cadastro e login
router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/logout', authController.logout);
module.exports = router;