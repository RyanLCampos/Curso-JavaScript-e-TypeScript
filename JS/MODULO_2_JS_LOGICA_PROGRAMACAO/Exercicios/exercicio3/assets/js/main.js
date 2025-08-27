const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0 
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container')

for(let i = 0; i < elementos.length; i++){
    let { tag, texto } = elementos[i];
    container.innerHTML += `<${tag}> ${texto} </${tag}>`;
    // container.innerHTML += `<${tag}> ${elementos[i].texto} </${tag}>`;
}

// Outra forma

const container2 = document.querySelector('.container_segunda_forma');
const div = document.createElement('div');

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container2.appendChild(div);