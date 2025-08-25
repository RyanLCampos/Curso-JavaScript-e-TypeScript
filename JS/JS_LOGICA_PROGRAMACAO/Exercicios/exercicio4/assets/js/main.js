const paragrafos = document.querySelector(".paragrafos");

// Seleciona todos os paragrafos da div
const ps = paragrafos.querySelectorAll("p"); // Retorna uma NodeList

const estilosBody = getComputedStyle(document.body);
const backgroudColorBody = estilosBody.backgroundColor;

console.log(backgroudColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroudColorBody;
    p.style.color = '#fff';
    p.style.fontWeight = 600;
}
