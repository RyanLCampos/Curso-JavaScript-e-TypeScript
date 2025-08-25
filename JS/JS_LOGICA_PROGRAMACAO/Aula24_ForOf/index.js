
// For clássico - Geralmente com iteráveis (Array ou String)
// For in - Retorna índice ou chave (String, Array ou Objetos)
// For of - Retorna o valor em si (iteraveis,  array ou strings)

const nome = 'Ryan Lucas';


for (let valor of nome) {
    console.log(valor);
}

console.log("\n===== ===== ===== ====\n");

const nomes = ['Ryan', 'Lucas', 'Campos'];

for (let valor of nomes){
    console.log(valor);
}
