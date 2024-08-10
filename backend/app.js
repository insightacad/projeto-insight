// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();
const express = require('express');
const path = require('path');
const authRoutes = require('./routes/userRoutes');
const userRoutes = require('./routes/userRoutes');
const { eAdmin } = require('./middlewares/auth');
const app = express();
// Usar a variável de ambiente PORT ou um valor padrão
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());

// ROTAS
app.use('/', authRoutes);
app.use('/dashboard', eAdmin, userRoutes);

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}: http://localhost:${port}`);
});
