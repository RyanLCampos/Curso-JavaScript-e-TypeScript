exports.paginaInicial = (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar Formulário</button>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Sou a nova rota de post!');
};