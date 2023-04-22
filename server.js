const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

// Configuração do middleware
app.use(bodyParser.json());
app.use(cors());

// Rota para servir o conteúdo estático do Angular
app.use(express.static(path.join(__dirname, 'dist/crud')));

// Rota padrão que envia a página inicial do Angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/crud/index.html'));
});

// Inicie o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});