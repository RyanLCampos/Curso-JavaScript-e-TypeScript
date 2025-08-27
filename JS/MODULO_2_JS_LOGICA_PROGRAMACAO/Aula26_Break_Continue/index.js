const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue - Continua para a proxima iteração
// Break - encerra o laço de repetição

let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('Pulei o numero 2');
        i++;
        continue;
    }

    console.log(numero);

    if(numero === 7) {
        console.log('Numero 7 encontrado, saindo...');
        i++;
        break;
    }

    i++;
}
