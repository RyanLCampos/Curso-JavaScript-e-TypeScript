function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }

      resolve(msg);
    }, tempo);
  });
}

// PROMISE.ALL

const promises = [
  'Primeiro Valor',
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  'Outro valor',
];

Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });

// PROMISE.RACE
// Entrega o primeiro resolvido

const promises2 = [
  esperaAi(1000, 10000), // ERRO
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promises2)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log(erro);
  });

// PROMISE.RESOLVE

function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', rand(1, 3));
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(erro => {
        console.log(erro);
    });
