// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));


function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    const thead = document.createElement('thead');
    const row = document.createElement('tr');

    const thNome = document.createElement('th');
    thNome.textContent = 'Nome';
    row.appendChild(thNome);

    const thEmail = document.createElement('th');
    thEmail.textContent = 'Email';
    row.appendChild(thEmail);

    const thIdade = document.createElement('th');
    thIdade.textContent = 'Idade';
    row.appendChild(thIdade);
    
    const thSalario = document.createElement('th');
    thSalario.textContent = 'Salario';
    row.appendChild(thSalario);

    thead.appendChild(row);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    for(let pessoa of json) {
        const tr = document.createElement('tr');

        const tdNome = document.createElement('td');
        tdNome.textContent = pessoa.nome;
        tr.appendChild(tdNome);

        const tdEmail = document.createElement('td');
        tdEmail.textContent = pessoa.email;
        tr.appendChild(tdEmail);

        const tdIdade = document.createElement('td');
        tdIdade.textContent = pessoa.idade;
        tr.appendChild(tdIdade);

        const tdSalario = document.createElement('td');
        tdSalario.textContent = pessoa.salario;
        tr.appendChild(tdSalario);

        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = '';

    resultado.appendChild(table);
}