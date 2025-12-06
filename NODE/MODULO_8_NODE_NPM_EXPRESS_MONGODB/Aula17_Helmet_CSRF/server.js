require('dotenv').config();

// Imports
const express = require('express');
const routes = require('./routes');
const { middlewareGlobal, outroMiddleware, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

const app = express(); // Executa express

/* ====== ====== CONEXÃO COM A BASE DE DADOS ====== ====== */
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => {
    app.emit('pronto')
  })
  .catch(e => console.log(e));

const session = require('express-session');

const path = require('path');

/* ====== ====== ====== ====== ====== ====== */
app.use(helmet());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
  secret: 'testesla123',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csrf());

// Proprio middleware
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
      console.log('Acessar -> http://localhost:3000/');
      console.log('Servidor executando na porta 3000...');
  });
})