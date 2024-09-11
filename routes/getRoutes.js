const express = require('express');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const env = require('dotenv')

<<<<<<< HEAD:routes/getRoutes.js
    router.use(cors({
        origin: process.env.MAINDOMAIN,
        methods: ['GET', 'POST'],
        credentials: true
    }));

    //ROTA RAIZ
    router.get('/', (req, res) => {
        // Adicionar o diretorio da homepage aqui.
        res.sendFile(path.join(__dirname, '../frontend/pages/homepage.html'));
    });
    // Rotas de cadastro e login
    router.get('/signup', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signup.html'));
    });
  
    router.get('/signin', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signin.html'));
    });
=======
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
>>>>>>> d72060b0395eed8c2ad743ee4e2f2911ff0f240b:routes/authRoutes.js

module.exports = router;
