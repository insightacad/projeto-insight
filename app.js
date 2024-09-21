require('dotenv').config();
const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const cookieParser = require('cookie-parser');
const getRoutes = require('./routes/getRoutes');
const blockedRoutes = require('./routes/blockedRoutes');
const apiRoutes = require('./routes/apiRoutes');
const { eAdmin } = require('./middlewares/auth');
const app = express();

// Configurar o caminho até a pasta frontend
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());
app.use(cookieParser());

// Configurar as rotas
app.use('/', getRoutes);
app.use('/dashboard', eAdmin, blockedRoutes);
app.use('/api', apiRoutes);

// Carregar os certificados SSL
const sslOptions = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH)
};

// Definir as portas
const httpsPort = process.env.PORT;  // Usando a variável de ambiente PORT para HTTPS
const httpPort = process.env.PORT2;  // Porta HTTP padrão para redirecionar

// Servidor HTTPS
https.createServer(sslOptions, app).listen(httpsPort, () => {
    console.log(`Servidor HTTPS iniciado na porta ${httpsPort}: https://localhost:${httpsPort}`);
});

// Servidor HTTP para redirecionar para HTTPS
http.createServer((req, res) => {
    res.writeHead(301, { "Location": `https://${req.headers.host}${req.url}` });
    res.end();
}).listen(httpPort, () => {
    console.log(`Servidor HTTP iniciado na porta ${httpPort}: https://localhost:${httpPort}`);
});

