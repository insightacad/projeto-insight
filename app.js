// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();
const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
// const apiRoutes = require('./routes/apiRoutes');
const { eAdmin } = require('./middlewares/auth');
const app = express();

// Configurar o caminho até a pasta styles localizada em frontend
app.use(express.static(path.join(__dirname, 'frontend')));

app.use(express.json());
// Usar a variável de ambiente PORT ou um valor padrão
const port = process.env.PORT ;

// ROTAS
app.use('/user',userRoutes);
app.use('/',authRoutes)
//app.use('/',authRoutes);
// app.use('/api', eAdmin, apiRoutes);


app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}: http://localhost:${port}`);
});
