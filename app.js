// Carregar variáveis de ambiente do arquivo .env
require('dotenv').config();
const express = require('express');
const path = require('path');
const getRoutes = require('./routes/getRoutes');
const blockedRoutes = require('./routes/blockedRoutes');
const apiRoutes = require('./routes/apiRoutes');
const { eAdmin } = require('./middlewares/auth');
const cookieParser = require('cookie-parser');
const fs = require('fs');
const https = require('https');
const app = express();

// Configurar o caminho até a pasta styles localizada em frontend
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());
app.use(cookieParser()); // Adiciona o middleware cookie-parser

// Carregar os certificados SSL
const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/insightacad.com.br/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/insightacad.com.br/fullchain.pem')
};

// Usar a variável de ambiente PORT ou um valor padrão
const port = process.env.PORT ;

// ROTAS
app.use('/',getRoutes);
app.use('/dashboard',eAdmin,blockedRoutes);
app.use('/api',apiRoutes)

https.createServer(options, app).listen(port, () => {
      console.log(`Servidor iniciado na porta ${port}: https://localhost:${port}`);
});
