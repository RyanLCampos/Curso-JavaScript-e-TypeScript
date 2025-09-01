const inputTarefa = document.querySelector(".input-tarefa");
const listaTarefas = document.querySelector(".tarefas");

const popupOverlay = document.querySelector(".popup-overlay");
const popupConfirm = document.querySelector(".popup-confirm");
const popupCancel = document.querySelector(".popup-cancel");

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    adicionaTarefa();
  }
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("btn-remover")) {
    el.parentElement.remove();
    salvarTarefas();
  }

  if (el.classList.contains("btn-add-tarefa")) {
    adicionaTarefa();
  }

  if (el.classList.contains("btn-remover-todos")) {
    removerTodasTarefas();
  }
});

function adicionaTarefa() {
  if (!inputTarefa.value) return;

  criaTarefa(inputTarefa.value);
}

function limpaInput() {
  inputTarefa.value = "";
}

function criaTarefa(tarefa) {
  const li = criaLi(tarefa);

  listaTarefas.appendChild(li);

  criaButtonRemover(li);
  limpaInput();
  salvarTarefas();
}

function criaLi(texto) {
  const li = document.createElement("li");
  li.setAttribute("class", "item-tarefa");

  li.textContent = texto;

  return li;
}

function criaButtonRemover(li) {
  const btn = document.createElement("button");

  btn.setAttribute("class", "btn-remover");

  btn.innerText = "Remover";

  li.appendChild(btn);

  return btn;
}

function salvarTarefas() {
  const liTarefas = listaTarefas.querySelectorAll("li");
  const tarefas = [];

  for (let tarefa of liTarefas) {
    const tarefaTexto = tarefa.innerText;

    let novaTarefaTexto = tarefaTexto.replace("Remover", "").trim();
    tarefas.push(novaTarefaTexto);
  }

  const tarefasJSON = JSON.stringify(tarefas);

  localStorage.setItem("tarefas", tarefasJSON);
}

function recuperaTarefasSalvas() {
  let tarefasSalvas = localStorage.getItem("tarefas");

  tarefasSalvas = JSON.parse(tarefasSalvas);

  for (let tarefa of tarefasSalvas) {
    criaTarefa(tarefa);
  }
}

function removerTodasTarefas() {
 
  popupOverlay.classList.remove("hidden");


  popupConfirm.onclick = function () {
    while (listaTarefas.firstChild) {
      listaTarefas.removeChild(listaTarefas.firstChild);
    }
    salvarTarefas();
    popupOverlay.classList.add("hidden");
  };

  popupCancel.onclick = function () {
    popupOverlay.classList.add("hidden");
  };
}

recuperaTarefasSalvas();
