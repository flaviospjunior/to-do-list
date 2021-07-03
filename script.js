function addTask() {
  const taskDiv = document.querySelector("#tarefa");
  const outrasTarefas = document.querySelector(".outrasTarefas");
  const clone = taskDiv.cloneNode(true);
  outrasTarefas.appendChild(clone);
}
