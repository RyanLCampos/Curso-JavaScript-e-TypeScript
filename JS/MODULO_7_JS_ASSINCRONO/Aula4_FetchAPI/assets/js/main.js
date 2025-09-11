document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {

    try {
        const href = el.getAttribute('href');
    
        const response = await fetch(href);
    
        const html = await response.text();
    
        carregaResultado(html);
    } catch (error) {
        console.error(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}