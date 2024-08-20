const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//Rotas de cadastro e login

router.post('/api/signup', authController.signup);
router.post('/api/signin', authController.signin);

module.exports = router;
