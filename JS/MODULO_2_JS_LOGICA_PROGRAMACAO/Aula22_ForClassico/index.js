
// Sem estrutura de repetição
console.log('==== Sem Estrutura de Repetição =====');
console.log('Linha 1');
console.log('Linha 2');
console.log('Linha 3');
console.log('Linha 4');
console.log('Linha 5');

// Com estrutura de repetição (For - Classico)
console.log('==== Com Estrutura de Repetição ====');
for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

const numerosPares = [];
const numerosImpares = [];

// Par ou Impar
for (let i = 0; i <= 10; i++){
    if (i % 2 == 0 ? numerosPares.push(i) : numerosImpares.push(i));
}

console.log(`Numeros Pares: ${numerosPares}`);
console.log(`Numeros Impares: ${numerosImpares}`);

const frutas = ['Maçã', 'Pêra', 'Uva'];

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}