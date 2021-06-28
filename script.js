function addTask(){
    $('.tarefas #tarefa').clone().find('input').val('').end().appendTo('.outrasTarefas')
}