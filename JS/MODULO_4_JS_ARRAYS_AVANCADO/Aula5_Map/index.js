/*
    function callBackMap(valorElemento, indiceDoValor, arrayCompleto) {
        Implementacao de Codigo...
    }
*/

// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(valorElemento => valorElemento * 2);

console.log(numerosDobrados);

// Para cada elemento: 
// Retorne apenas uma string com o nome da pessoa
// Remove apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Ryan', idade: 22},
    { nome: 'Fulano', idade: 35},
    { nome: 'Ciclano', idade: 58},
    { nome: 'Cristiano', idade: 42},
    { nome: 'José', idade: 83},
    { nome: 'Maria', idade: 15}
];


const nomes = pessoas.map(obj => obj.nome);
console.log('Nomes: ');
console.log(nomes);

const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log('\nIdades: ');
console.log(idades);


const ids = pessoas.map(function(obj, indice) {
    const newObj = {...obj}; // Cria cópia para não alterar original
    newObj.id = indice + 1;
    return newObj;
});
console.log('\nObjeto com ID: ');
console.log(ids);