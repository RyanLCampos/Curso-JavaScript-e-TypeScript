const pessoas = [
    { id: 3, nome: 'Ryan Lucas' },
    { id: 2, nome: 'Fulano' },
    { id: 1, nome: 'Ciclano' },
]

const novasPessoas = new Map(); // Map -> Mantém a ordem de inserção.

// for(const pessoa of pessoas) {
//     const { id } = pessoa;

//     novasPessoas[id] = { ...pessoa };
// }

for(const {id, nome} of pessoas) {
    novasPessoas.set(id, { id, nome });
}


console.log(novasPessoas);

console.log(novasPessoas.get(2)); // Obtém valor da chave.

novasPessoas.delete(2); // Remove com base no valor da chave 

console.log(novasPessoas);