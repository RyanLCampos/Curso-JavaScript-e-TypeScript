const nome = 'Ryan Lucas';

let i = 0;

while (i < nome.length) {
    console.log(nome[i]);

    i++;
}

console.log('\nSegue a vida...');

function random(min, max){
    const r = Math.random() * (max - min) + min;

    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = 10;

let count = 0;

// Verifica o valor antes de executar
while (rand !== 10) {
    rand = random(min, max);
    count++;
}


console.log('Encontrar numero 10 utilzando While');
console.log(`Tentativas: ${count}`)

// Alterou o valor antes de verificar
do {
    
    rand = random(min, max);
    count++;
    
} while (rand !== 10);

console.log('\n Encontrar numero 10 utilzando Do-While');
console.log(`Tentativas: ${count}`)