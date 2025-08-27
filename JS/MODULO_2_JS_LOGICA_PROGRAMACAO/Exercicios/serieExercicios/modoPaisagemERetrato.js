// Escreva uma função chamada ePaisagem
// Recebe dois argumentos, largura e altura
// Retorne true se modo paisagem

function ePaisagem(largura, altura) {
  return largura > altura ? true : false;
}

const ePaisagem2 = (largura, altura) => (largura > altura); // True ou False

console.log(ePaisagem2(50, 20));
