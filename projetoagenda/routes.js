const express = require('express');
const route = express.Router();
const homeController = require('./src/controller/homeController');
const loginController = require('./src/controller/loginController');
const contatoController = require('./src/controller/contatoController');

const { loginRequired } = require('./src/middlewares/middleware');

// Rotas da Home
route.get('/', homeController.index);

// Rotas de Login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de Contato
route.get('/contato', loginRequired, contatoController.index);
route.post('/contato', loginRequired, contatoController.create);
route.get('/contato/:id', loginRequired, contatoController.edit);

module.exports = route;

