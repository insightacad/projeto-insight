const express = require('express');
const path = require('path');
const router = express.Router();
const cors = require('cors');
const env = require('dotenv')

    router.use(cors({
        origin: process.env.MAINDOMAIN,
        methods: ['GET', 'POST'],
        credentials: true
    }));

    //ROTA RAIZ
    router.get('/', (req, res) => {
        // Adicionar o diretorio da homepage aqui.
        res.sendFile(path.join(__dirname, '../frontend/pages/home.html'));
    });
    // Rotas de cadastro e login
    router.get('/signup', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signup.html'));
    });
  
    router.get('/signin', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/signin.html'));
    });

module.exports = router;
