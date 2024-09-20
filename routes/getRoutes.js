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
    router.get('/admin', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/admin.html'));
    });
<<<<<<< HEAD
=======

    router.get('/admin', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/pages/admin.html'));
    });
>>>>>>> 3cd5ea284e984cbe7dfe16fd84e9ed06f9499120

module.exports = router;
