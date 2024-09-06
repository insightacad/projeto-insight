const express = require('express');
const path = require('path');
const router = express.Router();
const authController = require('../controllers/authController');

    // Rotas GET de autenticação 
    router.get('/signup', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signup.html'));
    });
    router.get('/signin', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signin.html'));
    });
    // Rotas POST de autenticação
    router.post('/api/signup', authController.signup);
    router.post('/api/signin', authController.signin);

module.exports = router;
