// Arrays são dados por referência

// Outra opção
// const nomes = Array('Nome1', 'Nome2', 'Nome3');

// Mais utilizado
const nomes = ['Ryan', 'Lucas', 'Campos'];

const frutas = ['Maçã', 'Banana', 'Uva', 'Manga', 'Kiwi'];

/*
    Realiza uma cópia, ou seja, não realiza alterações em 'nomes'.
*/
const novo = [...nomes];

const elementoRemovidoFinal = novo.pop(); // Remove ultimo elemento do array.

const elementoRemovidoInicio = novo.shift(); // Remove primeiro elemento do array.

novo.push('Campos'); // Adiciona elemento ao final do array.

novo.unshift('Ryan'); // Adiciona elemento no inicio do array.

console.log(novo.length); // Retorna tamanho do array
console.log(novo);

// Obtem elementos do indice 2 ao 4. (Uva, Manga e Kiwi)
const frutasNovos = frutas.slice(2, 5);
console.log(frutasNovos);

// Converte String em Array
const alfabeto = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

const arrayAlfabeto = alfabeto.split(' ');

console.log(arrayAlfabeto);

// Converte Array em String

const alfabetoString = arrayAlfabeto.join(', ');

console.log(alfabetoString);
