function addTask() {
  const taskDiv = document.querySelector(".tarefas");
  const outrasTarefas = document.querySelector(".outrasTarefas");
  const tarefa = document.querySelector(".tarefa");
  const clone = taskDiv.cloneNode(true);
  outrasTarefas.appendChild(clone);
}
