const express = require('express');
const route = express.Router();
const homeController = require('./controller/homeController');
const contatoController = require('./controller/contatoController');

// Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// Rotas Contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;

