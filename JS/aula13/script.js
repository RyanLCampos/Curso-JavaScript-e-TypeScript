
let umaString = "Um texto";

// Buscar character com base no index

console.log(umaString[3]); // Melhor Forma
console.log(umaString.charAt(3));

// CONCATENAÇÃO
console.log(`${umaString} em um lindo dia.`); // Melhor Forma
console.log(umaString + ' em um lindo dia.');
console.log(umaString.concat(' em', ' um', ' lindo dia.'));


// Buscar index de uma String
console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('o', 3)); // Buscar a partir de um index, no caso 3.

console.log(umaString.lastIndexOf('m', 3)); // Busca do final para o começo

// Expressões Regulares
console.log(umaString.search(/t/)); // Retorna o indice
console.log(umaString.match(/t/));

// Substituir
console.log(umaString.replace(/Um/, 'Outra'));
console.log(umaString.replace(/t/g, '#')); // Substitui todos os 't' por '#'

// Cortar string
console.log(umaString.slice(3)); // Pega a partir do index 3 ("texto")
console.log(umaString.slice(-5)); // Pega string do final para o começo.

// Dividir strings
console.log(umaString.split(' ')); // Retorna array com strings separados.
