const seuNumero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = seuNumero;
texto.innerHTML = `<p><strong>Raiz Quadrada: </strong> ${seuNumero ** 0.5}</p>`;
texto.innerHTML += `<p><strong>${seuNumero} é inteiro: </strong> ${Number.isInteger(seuNumero)}</p>`;
texto.innerHTML += `<p><strong>É NaN: </strong> ${Number.isNaN(seuNumero)} </p>`;
texto.innerHTML += `<p><strong>Arredondado para baixo: </strong> ${Math.floor(seuNumero)} </p>`;
texto.innerHTML += `<p><strong>Arredondado para cima: </strong> ${Math.ceil(seuNumero)} </p>`;
texto.innerHTML += `<p><strong>Com duas casas decimais: </strong> ${Number(seuNumero).toFixed(2)} </p>`;