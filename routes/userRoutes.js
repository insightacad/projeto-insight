const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const path = require('path');
const cors = require('cors');
const env = require('dotenv')


router.use(cors({
    origin: process.env.MAINDOMAIN,
    methods: ['GET', 'POST'],
    credentials: true
  }));

// Rota raiz
router.get('/', (req, res) => {
  // Adicionar o diretorio da homepage aqui.
  res.sendFile(path.join(__dirname, '../frontend/pages/signin.html'));
});

router.get('/dashboard', userController.dashboard);
router.post('/api/user/profile/update', userController.updateProfile);
router.get('/api/profile:username', userController.UserInfo); //127.0.0.1:200/api/profile?username=test

module.exports = router;