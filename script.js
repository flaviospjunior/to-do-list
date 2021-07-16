function addTask() {
  const outrasTarefas = document.querySelector(".outrasTarefas");

  function criacao() {
    let listaTarefas = Array.from(document.querySelectorAll(".tarefa"));

    const tarefas = document.createElement(`div${listaTarefas.length}`);
    tarefas.classList.add("tarefas");

    const divTarefa = document.createElement(`div${listaTarefas.length}`);
    divTarefa.classList.add("tarefa");

    const cloneCheckBox = document.querySelector(".checkbox").cloneNode(true);
    const cloneInput = document.querySelector(".text-input").cloneNode(true);
    const cloneAdd = document.querySelector(".adicionar").cloneNode(true);

    divTarefa.appendChild(cloneCheckBox);
    divTarefa.appendChild(cloneInput);
    divTarefa.appendChild(cloneAdd);
    tarefas.appendChild(divTarefa);

    outrasTarefas.appendChild(tarefas);
  }
  criacao();

  //const clone = taskDiv.cloneNode(true);
  //outrasTarefas.appendChild(clone);
}
