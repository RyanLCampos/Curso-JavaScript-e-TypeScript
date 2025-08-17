const nome = 'Ryan Lucas';
const sobrenome = 'Pires Campos';
const idade = 22;
const peso = 64;
const alturaEmM = 1.63;

let imc; // peso / (altura * altura)
let anoNascimento;
let anoAtual = 2025;

imc = peso / (alturaEmM * alturaEmM);

anoNascimento = anoAtual - idade;

// Template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${imc}`); // Mais legivel
console.log(`${nome} nasceu em ${anoNascimento}`);