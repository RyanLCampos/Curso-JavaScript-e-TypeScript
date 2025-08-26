function mostrarHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR");
}

function funcaoDoInterval() {
    console.log(mostrarHora());
}

const timer = setInterval(function () {
    console.log(mostrarHora());
} , 1000);

setTimeout(function () {
    clearInterval(timer);

}, 6000);

setTimeout(function () {
    console.log('Olá Mundo!');
}, 7000)
