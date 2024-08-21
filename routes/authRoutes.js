const express = require('express');
const path = require('path');
const router = express.Router();
const authController = require('../controllers/authController');

    // Rotas de cadastro e login
    router.get('/signup', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signup.html'));
    });
  
    router.post('/signup', authController.signup);
  
    router.get('/signin', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signin.html'));
    });
  
    router.post('/signin', authController.signin);

module.exports = router;
