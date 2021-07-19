function addTask() {
  const outrasTarefas = document.querySelector(".outrasTarefas");

  function criacao() {
    let listaTarefas = Array.from(document.querySelectorAll(".tarefa"));

    const tarefas = document.createElement(`div${listaTarefas.length}`);
    tarefas.classList.add("tarefas", "shadow");

    const divTarefa = document.createElement(`div${listaTarefas.length}`);
    divTarefa.classList.add("tarefa");

    const cloneCheckBox = document.querySelector(".checkbox").cloneNode(true);
    cloneCheckBox.id = `checkbox${listaTarefas.length}`;
    const cloneInput = document.querySelector(".text-input").cloneNode(true);
    cloneInput.id = `text-input${listaTarefas.length}`;
    const cloneAdd = document.querySelector(".adicionar").cloneNode(true);

    divTarefa.appendChild(cloneCheckBox);
    divTarefa.appendChild(cloneInput);
    divTarefa.appendChild(cloneAdd);
    tarefas.appendChild(divTarefa);

    outrasTarefas.appendChild(tarefas);
  }
  criacao();
}

function marcacao(id) {
  let inputParaMarcar = document.getElementById(`text-input${id.substr(8)}`);
  let flagId = document.getElementById(id);
  let parentDiv = flagId.parentNode.parentNode;
  console.log(parentDiv);
  if (flagId.checked == true && inputParaMarcar.value.length > 0) {
    inputParaMarcar.classList.add("tracejar");
    parentDiv.classList.remove("shadow");
  } else {
    inputParaMarcar.classList.remove("tracejar");
    parentDiv.classList.add("shadow");
  }
}
