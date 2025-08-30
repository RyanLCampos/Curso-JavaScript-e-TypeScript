/*
    FILTER

    Parametros -> (
    
    
    )
*/

/*
    function callBackFilter(valorElemento, indiceDoValor, arrayCompleto) {
        Implementacao de Codigo...
    }
*/

// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valorElemento => valorElemento > 10);

console.log(numerosFiltrados);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Ryan', idade: 22},
    { nome: 'Fulano', idade: 35},
    { nome: 'Ciclano', idade: 58},
    { nome: 'Cristiano', idade: 42},
    { nome: 'José', idade: 83},
    { nome: 'Maria', idade: 15}
];

const nomesComMais5Letras = pessoas.filter(valorElemento => valorElemento.nome.length >= 5);
console.log('Nomes com 5 letras ou mais:');
console.log(nomesComMais5Letras);

const pessoasMais50Anos = pessoas.filter(valorElemento => valorElemento.idade > 50);
console.log('Pessoas +50 anos:');
console.log(pessoasMais50Anos);

const nomesQueTerminamComA = pessoas.filter(valorElemento => valorElemento.nome.toLowerCase().endsWith('a'));
console.log('Nomes que terminam com "A":');
console.log(nomesQueTerminamComA);