function meuEscopo() {
  const form = document.querySelector(".form");

  const resultado = document.querySelector(".resultado");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const peso = parseFloat(
      event.target.querySelector("#peso").value.replace(",", ".")
    );
    const altura = parseFloat(
      event.target.querySelector("#altura").value.replace(",", ".")
    );

    if (validarFormulario(peso, altura, resultado)) {
      const imc = getImc(peso, altura);

      const resultadoIMC = respostaIMC(imc);

      const msg = `O seu IMC é ${imc} (${resultadoIMC})`;

      setResultado(msg, true);
    }
  });
}

function criaP(className) {
  const p = document.createElement("p");
  return p;
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";

  const p = criaP();

  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}

function respostaIMC(imc) {
  const nivel = [
    "Abaixo do Peso",
    "Peso Normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function validarFormulario(peso, altura, resultado) {
  if (!peso) {
    setResultado("Peso inválido", false);
    return false;
  } else if (!altura) {
    setResultado("Altura inválido", false);
    return false;
  } else {
    return true;
  }
}

meuEscopo();
