function addTask() {
  $("#tarefa").clone().find("#tarefa").val("").end().appendTo(".outrasTarefas");
}

function teste() {
  $("#adicionar").keydown(function (tecla) {
    if (tecla.keyCode == 9) {
      addTask();
    }
  });
}
