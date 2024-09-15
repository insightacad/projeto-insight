// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();
const express = require('express');
const path = require('path');
const getRoutes = require('./routes/getRoutes');
const blockedRoutes = require('./routes/blockedRoutes');
const apiRoutes = require('./routes/apiRoutes');
const { eAdmin } = require('./middlewares/auth');
const cookieParser = require('cookie-parser');
const app = express();

// Configurar o caminho até a pasta styles localizada em frontend
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());
app.use(cookieParser()); // Adiciona o middleware cookie-parser

// Usar a variável de ambiente PORT ou um valor padrão
const port = process.env.PORT ;

// ROTAS
app.use('/',getRoutes);
app.use('/dashboard',eAdmin,blockedRoutes);
app.use('/api',apiRoutes)

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}: http://localhost:${port}`);
});
