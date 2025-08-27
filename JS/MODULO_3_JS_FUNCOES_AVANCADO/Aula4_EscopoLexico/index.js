const nome = 'Ryan Lucas'; // Variavel Global

function falaNome() {
    // const nome = 'Campos'; // Utiliza este 
    console.log(nome); // busca a variável até chegar ao escopo global
}

function usaFalaNome(){
    const nome = 'campos'; // Não é utilzado
    falaNome();
}

usaFalaNome();