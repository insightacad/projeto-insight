const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
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
  // res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
router.post('/dashboard', userController.dashboard);
router.post('/user/profile/update', userController.updateProfile);

module.exports = router;