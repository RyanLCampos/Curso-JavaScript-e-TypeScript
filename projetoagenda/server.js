require('dotenv').config();

/* ============================================
   IMPORTS
============================================ */

const express = require('express'); // Framework principal do servidor
const session = require('express-session'); // Gerenciar sessões do usuário
const MongoStore = require('connect-mongo'); // Sessions salvas na base de dados
const flash = require('connect-flash'); // Mensagens rápidas e auto-destrutivas (feedback ao usuário)

const helmet = require('helmet'); // Proteção contra vulnerabilidades comuns (segurança HTTP)
const csrf = require('csurf'); // Protege a aplicação contra ataques CSRF
const path = require('path'); // Lidar com caminhos e diretórios do sistema

const routes = require('./routes'); // rotas da aplicação

const {             // Middlewares → funções executadas entre a requisição e a resposta
  middlewareGlobal, // middleware geral disponível para todas as rotas
  checkCsrfError,   // verifica erros do CSRF e impede ataques
  csrfMiddleware    // injeta o token CSRF nas views (forms)
} = require('./src/middlewares/middleware');

/* ============================================
   EXPRESS APP
============================================ */

const app = express();

/* ============================================
   DATABASE CONNECTION (Mongoose)
============================================ */

const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING)
  .then(() => app.emit('pronto'))
  .catch(e => console.log(e));

/* ============================================ */


app.use(helmet());

app.use(express.urlencoded({ extended: true }));             // Permite a aplicação receber dados de formulários
app.use(express.json());                                     // Permite receber dados em JSON (APIs, AJAX, fetch)
app.use(express.static(path.resolve(__dirname, 'public')));  // Servir arquivos estáticos (CSS, JS, imagens, etc.)

/* ============================================
   SESSIONS + FLASH
============================================ */

const sessionOptions = session({
  secret: 'testesla123',

  store: MongoStore.create({
    mongoUrl: process.env.CONNECTIONSTRING
  }),

  resave: false,
  saveUninitialized: false,

  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    httpOnly: true
  }
});

app.use(sessionOptions);
app.use(flash());

/* ============================================
   VIEW ENGINE
============================================ */

app.set('views', path.resolve(__dirname, 'src', 'views')); // Caminho das views (templates) que serão renderizadas
app.set('view engine', 'ejs');                             // Engine utilizado para renderizar as views (EJS)

/* ============================================
   CSRF PROTECTION
============================================ */

app.use(csrf());
app.use(checkCsrfError);
app.use(csrfMiddleware);

/* ============================================
   ROTAS E MIDDLEWARES CUSTOMIZADOS
============================================ */

app.use(middlewareGlobal);
app.use(routes);

/* ============================================
   SERVER INIT
============================================ */

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar → http://localhost:3000/');
    console.log('Servidor executando na porta 3000...');
  });
});
