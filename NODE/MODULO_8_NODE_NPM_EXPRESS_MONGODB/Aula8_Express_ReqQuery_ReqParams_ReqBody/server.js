const express = require('express'); // Import

const app = express(); // Executa express

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    `);
});

app.get('/testes{/:idUsuarios}{.:ext}{/:parametro}{.:ext}', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi ${req.body.nome}`);
});

app.listen(3000, () => {
    console.log('Acessar -> http://localhost:3000/');
    console.log('Servidor executando na porta 3000...');
});