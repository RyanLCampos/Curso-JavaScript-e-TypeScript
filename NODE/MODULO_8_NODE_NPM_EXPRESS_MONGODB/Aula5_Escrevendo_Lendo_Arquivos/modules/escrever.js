const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w'});
}


/*
    caminhoArquivo -> caminho que será escrito o arquivo
    'Frase 1'      -> Conteudo do arquivo
    flag: 'w'      -> Apaga tudo que está dentro do arquivo
    flag: 'a'      -> Vai adicionando conteudo dentro do arquivo (Sem apagar)

    exemplo: fs.writeFile(caminhoArquivo, 'Frase 1', { flag: 'w'});
*/