require('dotenv').config();

// Imports
const express = require('express');
const routes = require('./routes');
const { middlewareGlobal, outroMiddleware } = require('./src/middlewares/middleware');

const app = express(); // Executa express

/* ====== ====== CONEXÃO COM A BASE DE DADOS ====== ====== */
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto')
  })
  .catch(e => console.log(e));

const path = require('path');

/* ====== ====== ====== ====== ====== ====== */

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Proprio middleware
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
      console.log('Acessar -> http://localhost:3000/');
      console.log('Servidor executando na porta 3000...');
  });
})