const path = require('path');

/*
    __dirname: obtem o caminho absoluto da pasta atual
    '..': volta uma pasta
    'teste': arquivo que será gerado

    exemplo: const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');
*/

const caminhoArquivo = path.resolve(__dirname, 'pessoas.json');

const escrever = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//   { nome: "João" },
//   { nome: "Maria" },
//   { nome: "Fulano" },
//   { nome: "Ciclano" },
//   { nome: "Beltrano" },
// ];

// const json = JSON.stringify(pessoas, '', 2); // Converte objeto para JSON


// escrever(caminhoArquivo, json);

async function lerArquivo(caminhoArquivo) {
    const dados = await ler(caminhoArquivo);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);

    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo);